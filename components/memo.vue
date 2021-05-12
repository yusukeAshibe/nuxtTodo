<template>
  <v-data-table
    :headers="headers"
    :items="memoList"
    :items-per-page="100"
    class="elevation-1"
  >
    <template v-slot:[`item.title`]="{ item }">
      <nuxt-link :to="{ name: 'id-memoDetail', params: { id: item.id } }">{{
        titleView(item.title)
      }}</nuxt-link>
    </template>
    <template v-slot:[`item.id`]="{ item }">
      <v-btn @click.stop="deleteMemo(item)" depressed>削除</v-btn>
    </template>
    <template v-slot:[`item.updatedAt`]="{ item }">
      <div>{{ updatedAtView(item.updatedAt) }}</div>
    </template>
  </v-data-table>
</template>

<script lang="ts">
// 下記、「OptionsAPI で記述」するために必要
import Vue from "vue";
import dayjs from "~/node_modules/dayjs";
import Loading from "~/components/Logo.vue";
import firebase from "@/plugins/firebase";
import { Memo } from "~/models/Memo";

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
        { text: "タイトル", value: "title", sortable: false },
        // { text: "内容", value: "detail" },
        //{ text: "登録日", value: "createdAt" },
        { text: "更新日", value: "updatedAt" },
      ],
      text: "" as string,
      loading: false as boolean,
      memos: [] as any,
      userId: "" as string,
    };
  },
  props: ["memoList"],
  computed: {},
  methods: {
    deleteMemo() {},
    titleView(title: string) {
      return title;
    },
    updatedAtView(updatedAt: any) {
      var date = new Date(updatedAt.seconds * 1000);
      var viewDate =
        date.getFullYear() +
        "/" +
        (date.getMonth() + 1) +
        "/" +
        date.getDate() +
        " " +
        date.getHours() +
        ":" +
        date.getMinutes() +
        ":" +
        date.getSeconds();
      return viewDate;
    },
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

 