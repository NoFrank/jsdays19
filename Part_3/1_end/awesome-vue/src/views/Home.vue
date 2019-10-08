<template>
  <div>
    <header
      class="border-b border-color-gray-500 p-4 flex flex-row items-center"
    >
      <img src="../assets/logo.png" class="align-center h-8 mr-4" />
      <h1 class="text-vue text-3xl">Awesome Vue.js</h1>
    </header>
    <section class="m-4">
      <div class="flex flex-row">
        <AvSelect
          v-model="category"
          label="Kategorie"
          :options="currentCategories"
          classes="mr-2"
        >
        </AvSelect>
        <AvSelect
          v-model="subCategory"
          label="Unterkategorie"
          :options="currentSubCategories"
          classes="mr-2"
          :disabled="!category"
        ></AvSelect>
        <AvInput v-model="filterText" label="Filter"></AvInput>
      </div>
      <AvButton>Neuer Eintrag</AvButton>
      {{ subCategory }}
    </section>
    <main class="m-4">
      <h2 class="text-vue text-2xl font-bold">Einträge</h2>
      <ListEntry
        v-for="entry in filteredEntries"
        :key="entry.id"
        :entry="entry"
      >
      </ListEntry>
    </main>
  </div>
</template>

<script>
import ListEntry from "@/components/ListEntry";

export default {
  name: "Home",
  components: {
    ListEntry
  },
  props: {
    entries: {
      type: Array,
      required: true
    },
    categories: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      category: null,
      subCategory: null,
      filterText: null
    };
  },
  computed: {
    currentCategories() {
      if (this.categories) {
        return this.categories.map(c => {
          return { key: c.id, value: c.title };
        });
      } else {
        return [];
      }
    },
    currentSubCategories() {
      if (this.category) {
        let cat = this.categories.find(cat => cat.id == this.category);
        return cat.subCategories.map(c => {
          return { key: c.id, value: c.title };
        });
      } else {
        return [];
      }
    },
    filteredEntries() {
      if (!this.entries) return [];
      let entries = this.entries;

      if (this.filterText) {
        entries = entries.filter(
          entry =>
            entry.title.toUpperCase().indexOf(this.filterText.toUpperCase()) >
              -1 ||
            entry.description
              .toUpperCase()
              .indexOf(this.filterText.toUpperCase()) > -1
        );
      }

      if (this.category) {
        entries = entries.filter(entry => entry.category == this.category);
      }

      if (this.subCategory) {
        entries = entries.filter(
          entry => entry.subCategory == this.subCategory
        );
      }

      return entries;
    }
  },
  watch: {
    category(newValue, oldValue) {
      if (newValue !== oldValue) this.subCategory = null;
    }
  },
  methods: {
    clicked() {
      alert("clicked");
    }
  }
};
</script>
