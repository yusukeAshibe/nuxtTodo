

<template>
  <v-app>
    <div>メモ詳細ページ。</div>
    <v-col cols="12">
      <v-text-field
        placeholder="単語"
        outlined
        :counter="100"
        v-model="title"
      />
    </v-col>
    <v-col cols="12">
      <v-textarea label="メモ" outlined :counter="1000" v-model="detail" />
      <v-btn @click.stop="updateMemo()" depressed color="primary">更新</v-btn>
    </v-col>
    <v-col cols="12">
      <v-btn class="delete" @click="deleteMemo()"> 削除 </v-btn>
    </v-col>
  </v-app>
</template>
<script lang="ts">
import Vue from "vue";
import dayjs from "dayjs";
import "dayjs/locale/ja";
import firebase from "@/plugins/firebase";
export default Vue.extend({
  data() {
    return {
      docId: "" as string,
      id: 0 as number,
      title: "" as string,
      detail: "" as string,
    };
  },
  computed: {},
  created() {
    //DB接続とデータ取得＝＞表示まで
    const db = firebase.firestore();
    this.id = Number((this as any).$route.params.id);
    console.log(this.id);
    db.collection("memos")
      .where("newMemo.id", "==", this.id)
      .get()
      .then((querySnapshot) => {
        console.log(querySnapshot);
        querySnapshot.forEach((doc) => {
          this.docId = doc.id;
          this.title = doc.data().newMemo.title;
          this.detail = doc.data().newMemo.detail;
        });
      });
  },
  methods: {
    updateMemo() {
      const db = firebase.firestore();
      const memoRef = db.collection("memos").doc(this.docId);
      console.log(memoRef);
      memoRef.update({
        "newMemo.title": this.title,
        "newMemo.detail": this.detail,
        "newMemo.updatedAt": firebase.firestore.FieldValue.serverTimestamp(),
      });
      alert("編集が完了しました");
      (this as any).$router.push("/wordbook");
    },
    deleteMemo() {
      const db = firebase.firestore();
      db.collection("memos").doc(this.docId).delete();
      alert("削除が完了しました");
      (this as any).$router.push("/wordbook");
    },
  },
});
</script>
<style></style>

