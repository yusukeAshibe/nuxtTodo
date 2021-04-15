<template>
  <v-col cols="12">
    <v-text-field placeholder="検索" outlined v-model="bookName"></v-text-field>
    <v-col>
      <v-btn outlined color="error" class="widthButton" @click="search">
        <span class="del">この名前で検索する</span>
      </v-btn>
    </v-col>
    <div v-if="booksData">
      <div class="books">
        <v-list v-for="(book, index) in booksData" :key="index">
          <a>・{{ book.volumeInfo.title }}</a>
        </v-list>
      </div>
    </div>
  </v-col>
</template>

<script lang="ts">
import Vue from "vue";
import searchedBooks from "./searchedBooks.vue";
export default Vue.extend({
  components: { searchedBooks },
  data() {
    return {
      bookName: "",
      booksData: []
    };
  },
  methods: {
    search() {
      console.log(this.bookName);
      this.$axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=search" + this.bookName
        )
        .then(response => {
          this.booksData = response.data.items;
          console.log("検索結果", this.booksData);
        });
    }
  }
});
</script>
<style>
.books {
  column-count: 2;
}
</style>
