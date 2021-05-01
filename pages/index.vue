<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">Hello, {{ $accessor.user.name }}</h1>
    </div>
    <div class="columns is-mobile">
      <Calendar />
      <!-- <div v-for="(user, key) in users" :key="key">
        <h5>ID：{{ user.id }}</h5>
        <h5>ブランド名：{{ user.name }}</h5>
      </div> -->
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Logo from "~/components/Logo.vue";
import Calendar from "~/components/calendar.vue";

export default Vue.extend({
  //mysql　データ取得
  // async asyncData({ $axios }) {
  //   const users = await $axios.$get("http://localhost:5000");

  //   return { users };
  // },
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
  middleware: ["auth-filter"],
});
</script>
