<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">Hello, {{ $accessor.user.name }}</h1>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import Logo from "~/components/Logo.vue";
export default Vue.extend({
  components: {
    Logo
  },
  created() {
    const id = this.$accessor.user.id;
    const name = this.$accessor.user.name;
    const token = this.$accessor.user.token;
    const pic = this.$accessor.user.pic;
  },
  middleware: ["auth-filter"]
});
</script>
