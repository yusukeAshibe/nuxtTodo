<template>
  <v-app>
    <div>タスク詳細ページ。 id:{{ id }}</div>
    <v-col cols="12">
      <v-text-field
        placeholder="タスク"
        outlined
        :counter="100"
        v-model="text"
      />
    </v-col>
    <v-col cols="12">
      <v-textarea label="詳細" outlined :counter="1000" v-model="memo" />
      <v-btn @click.stop="update()" depressed color="primary">保存</v-btn>
    </v-col>
    <v-col cols="12">
      <div>登録日時：{{ ViewRegisterDate(this.registerDate) }}</div>
      <div>更新日時：{{ ViewUpdateDate(this.finishDate) }}</div>
    </v-col>
  </v-app>
</template>
<script lang="ts">
import Vue from "vue";
import { Todo } from "~/models/Todo";
import dayjs from "dayjs";
import "dayjs/locale/ja";
export default Vue.extend({
  data() {
    return {
      id: 0 as number,
      text: "" as string,
      done: 0 as number,
      memo: "" as string,
      registerDate: 0 as number,
      finishDate: 0 as number,
    };
  },
  computed: {},
  created() {
    this.id = Number((this as any).$route.params.id);
    const searchTodo = this.$accessor.todo.todos.find(
      (todos) => todos.id == this.id
    );
    if (searchTodo) {
      this.id = searchTodo.id as number;
      this.text = searchTodo.text as string;
      this.done = searchTodo.done as number;
      this.memo = searchTodo.memo as string;
      this.registerDate = searchTodo.registerDate as number;
      this.finishDate = searchTodo.finishDate as number;
    }
  },
  methods: {
    update() {
      const updateTodo: Todo = {
        id: this.id as number,
        text: this.text as string,
        done: this.done as number,
        memo: this.memo as string,
        registerDate: this.registerDate as number,
        finishDate: Date.now(),
        userId: this.$accessor.user.id,
      };
      this.$accessor.todo.updateTodo(updateTodo);
      alert("編集が完了しました");
      (this as any).$router.push("/todo");
    },
    ViewRegisterDate(registerDate: number) {
      console.log("mesoddo");
      return dayjs(registerDate).locale("ja").format("YYYY/MM/DD(dd) HH:mm:ss");
    },
    ViewUpdateDate(finishDate: number) {
      return dayjs(finishDate).locale("ja").format("YYYY/MM/DD(dd) HH:mm:ss");
    },
  },
});
</script>
<style></style>
