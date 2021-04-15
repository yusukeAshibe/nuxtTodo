<template>
  <div class="container">
    <div>
      <h1 class="title">Login Page</h1>
      <div>
        <button class="button--grey" @click="authGoogle">
          Googleでログイン
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import { Auth, Provider } from "@/services/auth";
export default Vue.extend({
  data() {
    return {};
  },
  async asyncData() {},
  methods: {
    async authGoogle() {
      const auth = new Auth(this.$accessor, {
        apiKey: "AIzaSyDg5eHzBW1KMBLlBn1Hqd3nVAGqSuwt7n8",
        authDomain: "todo-ca05a.firebaseapp.com"
      });
      await auth.login(Provider.Google);
      this.$router.push("/");
    }
  }
});
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;

  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
