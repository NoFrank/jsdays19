<template>
  <div id="app">
    <Header></Header>
    <Home
      v-if="currentPage == 'home'"
      :entries="entries"
      :categories="categories"
      @editItem="editItem"
    ></Home>
    <Edit
      v-if="currentPage == 'edit'"
      :entry="editEntry"
      :categories="categories"
      :updateMethod="updateMethod"
      @cancel="cancel"
    ></Edit>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Home from "./views/Home.vue";
import Edit from "./views/Edit.vue";
import { getData, setData } from "./shared/dataService";

export default {
  name: "app",
  components: {
    Home,
    Header,
    Edit
  },
  data() {
    return {
      entries: [],
      categories: [],
      currentPage: "home",
      editEntry: null,
      updateMethod: null
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
    },
    editItem(entryId) {
      let entry;
      let entryIndex;
      if (entryId) {
        entryIndex = this.entries.findIndex(e => e.id == entryId);
        entry = this.entries[entryIndex];
      } else {
        entryIndex = this.entries.length;
        entry = {
          id: this.entries.length + 1000,
          category: null,
          subCategory: null,
          title: null,
          url: null,
          description: null
        };
      }
      this.updateMethod = item => {
        item = this.calcPath(item);
        this.entries.splice(entryIndex, 1, item);
        setData("entries", this.entries);
        this.currentPage = "home";
        this.editEntry = null;
        this.updateMethod = null;
      };
      this.editEntry = entry;
      this.currentPage = "edit";
    },
    cancel() {
      this.currentPage = "home";
      this.editEntry = null;
      this.updateMethod = null;
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
