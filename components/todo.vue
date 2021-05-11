<template>
  <div class="container">
    <div v-if="loading">
      <Loading />
    </div>
    <h1 class="title">Todoリスト</h1>
    <div class="addArea">
      <v-text-field
        class="task"
        type="text"
        name="text"
        id="addTask"
        placeholder="タスクを追加"
        v-model="text"
      />
      <v-btn id="addButton" class="button button--green" @click="addTodo()"
        >追加</v-btn
      >
    </div>
    <br />
    <div class="Filter">
      <v-row align="center" justify="space-around">
        <v-btn depressed @click="doneFilter(100)"> すべて </v-btn>
        <v-btn depressed color="primary" @click="doneFilter(0)"> 作業前 </v-btn>
        <v-btn depressed color="error" @click="doneFilter(1)"> 作業中 </v-btn>
        <v-btn depressed color="warning" @click="doneFilter(2)"> 完了！ </v-btn>
      </v-row>
    </div>
    <br />
    <br />
    <template>
      <v-data-table
        :headers="headers"
        :items="todos"
        :items-per-page="10"
        @click:row="clickRow"
        class="elevation-1"
      >
        <template v-slot:[`item.done`]="{ item }">
          <div v-if="item.done == 0">
            <v-btn @click.stop="clickEdit(item)" depressed color="primary">{{
              doneView(item.done)
            }}</v-btn>
          </div>
          <div v-if="item.done == 1">
            <v-btn @click.stop="clickEdit(item)" depressed color="error">{{
              doneView(item.done)
            }}</v-btn>
          </div>
          <div v-if="item.done == 2">
            <v-btn @click.stop="clickEdit(item)" depressed color="warning">{{
              doneView(item.done)
            }}</v-btn>
          </div>
        </template>
        <template v-slot:[`item.text`]="{ item }">
          <nuxt-link :to="{ name: 'id-todoDetail', params: { id: item.id } }">{{
            textView(item.text)
          }}</nuxt-link>
        </template>
        <template v-slot:[`item.id`]="{ item }">
          <v-btn @click.stop="deleteTodo(item)" depressed>削除</v-btn>
        </template>
        <template v-slot:[`item.registerDate`]="{ item }">
          <div>{{ registerDateView(item.registerDate) }}</div>
        </template>
      </v-data-table>
    </template>
  </div>
</template>
<script lang="ts">
// 下記、「OptionsAPI で記述」するために必要
import Vue from "vue";
import { Todo } from "~/models/Todo";
import dayjs from "~/node_modules/dayjs";
import Loading from "~/components/Logo.vue";
import firebase from "@/plugins/firebase";

export default Vue.extend({
  components: {
    Loading,
  },
  data() {
    return {
      headers: [
        {
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "Task内容", value: "text", sortable: false },
        { text: "完了フラグ", value: "done" },
        { text: "削除", value: "id", sortable: false },
        { text: "登録日", value: "registerDate" },
      ],
      text: "" as string,
      loading: false as boolean,
      todos: [] as Todo[],
      userId: "" as string,
    };
  },
  computed: {},
  watch: {
    // todos: {
    //   handler: function(val, oldVal) {
    //     this.todos = this.$accessor.todo.todos;
    //   },
    //   deep: true
    // }
  },
  methods: {
    //タスク追加

    addTodo() {
      if (this.text) {
        const Obj = {
          text: this.text as string,
          userId: this.$accessor.user.id as string,
        };
        this.$accessor.todo.addTodo(Obj);
        this.text = "";
        this.todos = this.$accessor.todo.todos.filter(
          (todo) => todo.userId == this.$accessor.user.id
        );
      }
    },
    //行の詳細表示
    clickRow(row: any) {
      console.log("clickRow", row);
    },
    //完了フラグの表示
    doneView(done: number) {
      if (done == 0) {
        return "作業前";
      } else if (done == 1) {
        return "作業中";
      } else if (done == 2) {
        return "完了!";
      }
    },
    registerDateView(registerDate: string) {
      const viewRegisterDate = dayjs(registerDate)
        .locale("ja")
        .format("YYYY/MM/DD(dd) ");
      return viewRegisterDate;
    },
    //完了フラグの変更
    clickEdit(todo: Todo) {
      this.$accessor.todo.changeDone(todo);
    },
    //絞り込み（後は結果を反映）
    doneFilter(num: number) {
      this.loading = true;
      Promise.resolve()
        .then(() => {
          if (num == 100) {
            this.todos = this.$accessor.todo.todos.filter(
              (todo) => todo.userId == this.$accessor.user.id
            );
          } else {
            //完了フラグで絞り込み後USERIDで絞り込み
            var result = this.$accessor.todo.todos.filter(
              (todo) => todo.done == num
            );
            result = result.filter(
              (todo) => todo.userId == this.$accessor.user.id
            );
            this.todos = result;
          }
        })
        .finally(() => {
          this.loading = false;
        });
    },
    //タスク削除
    deleteTodo(todo: Todo) {
      var result = window.confirm("タスクを削除しますか");
      if (result) {
        this.$accessor.todo.delete(todo);
        this.todos = this.$accessor.todo.todos.filter(
          (todo) => todo.userId == this.$accessor.user.id
        );
      }
    },
    textView(text: string) {
      if (text.length <= 30) {
        return text;
      } else {
        return text.substring(0, 29) + "...";
      }
    },
  },
  created() {
    this.userId = this.$accessor.user.id;
    this.todos = this.$accessor.todo.todos.filter(
      (todo) => todo.userId == this.$accessor.user.id
    );
  },
});
</script>
<style>
.container {
  width: 750px;
  margin: 100px auto;
  text-align: center;
}

h1 {
  font-size: 32pt;
}

input {
  width: 300px;
  margin: 20px;
  padding: 8px 4px;
  font-size: 16pt;
}

button {
  margin: 0 10px;
  padding: 4px 8px;
  font-size: 10pt;
}

ul {
  margin-top: 20px;
  padding: 0;
  text-align: center;
}

li {
  list-style: none;
  margin: 5px 0;
  font-size: 14pt;
}

span {
  margin: 0 5px;
}
.title {
  margin-left: auto;
  margin-right: auto;
}
.task {
  width: 700px;
}
.done {
  text-decoration: line-through;
}
</style>
