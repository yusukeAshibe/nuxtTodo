<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">Hello, {{ $accessor.user.name }}</h1>
    </div>
    <div class="columns is-mobile">
      <v-app>
        <v-btn depressed color="primary" @click="externalLink">予定追加</v-btn>
        <br />
        <Calendar />
      </v-app>
      <!--Plan /-->
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Logo from "~/components/Logo.vue";
import Calendar from "~/components/calendar.vue";
import Plan from "~/components/plan.vue";
import firebase from "@/plugins/firebase";

export default Vue.extend({
  //mysql　データ取得
  // async asyncData({ $axios }) {
  //   const users = await $axios.$get("http://localhost:5000");
  //   return { users };
  // },
  data() {
    return {
      note_content: "hello",
      notes: [],
    };
  },
  components: {
    Calendar,
    Logo,
  },
  created() {
    const id = this.$accessor.user.id;
    const name = this.$accessor.user.name;
    const token = this.$accessor.user.token;
    const pic = this.$accessor.user.pic;
  },
  methods: {
    saveContent: function (value: string) {
      // 新しいテキストのためのキーを取得
      var newNoteKey = firebase.database().ref().child("notes").push().key;
      firebase
        .database()
        .ref("notes/" + this.$accessor.user.id + "/" + newNoteKey)
        .set({ content: value });
    },
    externalLink() {
      const url =
        "https://docs.google.com/forms/d/e/1FAIpQLSdkFksd6C3zTBf-pml8m1g6Lgj7D3i2Hfl3WpMVHyEz0pPZ-w/viewform?usp=sf_link";
      window.location.href = url;
    },
  },
  middleware: ["auth-filter"],
});
</script>