import createPersistedState from "vuex-persistedstate";

export default ({ store }) => {
  createPersistedState({
    paths: ["user", "todo"] // localStorageに保存したいstoreを入れる
  })(store);
};
