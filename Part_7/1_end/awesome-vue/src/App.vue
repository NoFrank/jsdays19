<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import { calcPath, getData } from "./shared/dataService";

export default {
  name: "app",
  components: {
    Header
  },
  async created() {
    let categories = await getData("categories");
    this.$store.commit("updateCategories", categories);
    let entries = await getData("entries").then(entries => {
      entries = entries.map(entry => {
        entry = calcPath(entry, categories);
        return entry;
      });
      return entries;
    });
    this.$store.commit("updateEntries", entries);
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
