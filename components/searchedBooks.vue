<template>
  <div class="container">
    <li v-for="(book, index) in booksData" :key="index">
      <a>{{ book.volumeInfo.title }}</a>
    </li>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      bookName: String,
      props: ["booksData"]
    };
  }
});
</script>
