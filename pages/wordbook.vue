<template>
  <div class="page">
    <h1 class="title">Cloud storeにデータ保存の単語帳</h1>
    <label>
      <span> 単語: </span>
      <v-text-field outlined type="text" v-model="memo.title" />
    </label>
    <label>
      <span> 意味: </span>
      <v-text-field outlined type="text" v-model="memo.detail" />
    </label>
    <v-btn class="ma-2" outlined large fab color="indigo" @click="submit">
      <v-icon>mdi-pencil</v-icon>
    </v-btn>
    <div><Memo :memoList="this.memos" /></div>
  </div>
</template>
  

<script lang="ts">
import firebase from "@/plugins/firebase";
import Vue from "vue";
import { Memo } from "~/models/Memo";

export default Vue.extend({
  middleware: ["auth-filter"],
  data() {
    return {
      memo: {
        title: "" as string,
        detail: "" as string,
      },
      memos: [] as any,
    };
  },
  created() {
    const db = firebase.firestore();
    db.collection("memos")
      .get()
      .then((snap) => {
        const array = [] as any;
        snap.forEach((doc) => {
          if (doc.data().newMemo.userId == this.$accessor.user.id) {
            array.push(doc.data().newMemo);
          }
        });
        console.log(array);
        this.memos = array;
      });
  },
  methods: {
    submit() {
      this.$nuxt.$loading.start();
      const db = firebase.firestore();

      //初回
      // if (this.memo.title && this.memo.detail) {
      //   let dbMemos = db.collection("memos");
      //   const newMemo: Memo = {
      //     id: 1 as number,
      //     title: this.memo.title,
      //     detail: this.memo.detail,
      //     createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      //     updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
      //     userId: this.$accessor.user.id,
      //   };
      //   dbMemos
      //     .add({
      //       newMemo,
      //     })
      //     .then((ref) => {
      //       console.log("Add ID: ", ref.id);
      //       this.memo.title = this.memo.detail = "";
      //     });
      // }

      // それ以降;

      if (this.memo.title && this.memo.detail) {
        db.collection("memos")
          .orderBy("newMemo.createdAt", "desc")
          .limit(1)
          .get()
          .then((snap) => {
            snap.forEach((doc) => {
              var newMemoId!: number;
              newMemoId = doc.data().newMemo.id + 1;
              console.log(newMemoId);
              const newMemo: Memo = {
                id: newMemoId,
                title: this.memo.title,
                detail: this.memo.detail,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
                userId: this.$accessor.user.id,
              };
              let dbMemos = db.collection("memos");
              dbMemos
                .add({
                  newMemo,
                })
                .then((ref) => {
                  console.log("Add ID: ", ref.id);
                  this.memo.title = this.memo.detail = "";
                  //ここでデータベースの内容取得したい
                  const db = firebase.firestore();
                  db.collection("memos")
                    .get()
                    .then((snap) => {
                      const array = [] as any;
                      snap.forEach((doc) => {
                        if (
                          doc.data().newMemo.userId == this.$accessor.user.id
                        ) {
                          array.push(doc.data().newMemo);
                        }
                      });
                      console.log(array);

                      this.memos = array;
                    });
                  this.$nuxt.$loading.finish();
                });
            });
          });
      }

      //  ここまで;
    },
  },
});
</script>