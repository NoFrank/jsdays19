<template>
  <div id="app">
    <Home :entries="entries" :categories="categories"></Home>
  </div>
</template>

<script>
import Home from "./views/Home.vue";
import { getData } from "./shared/dataService";

export default {
  name: "app",
  data() {
    return {
      entries: [],
      categories: []
    };
  },
  async created() {
    this.categories = await getData("categories");
    this.entries = await getData("entries").then(entries => {
      entries = entries.map(entry => {
        entry = this.calcPath(entry);
        return entry;
      });
      return entries;
    });
  },
  components: {
    Home
  },
  methods: {
    calcPath(entry) {
      entry.path = [];
      let category = this.categories.find(cat => cat.id == entry.category);
      entry.path.push(category.title);
      if (entry.subCategory) {
        let subCat = category.subCategories.find(
          cat => cat.id == entry.subCategory
        );
        entry.path.push(subCat.title);
      }
      return entry;
    }
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
