<template>
  <div>
    <section class="m-4">
      <div class="flex flex-row">
        <CategorySelect
          :category="category"
          :subCategory="subCategory"
          @inputCategory="category = $event"
          @inputSubCategory="subCategory = $event"
          classes="flex flex-row flex-2"
        ></CategorySelect>
        <AvInput class="flex-1" v-model="filterText" label="Filter"></AvInput>
      </div>
      <AvButton @click="editItem()">Neuer Eintrag</AvButton>
    </section>
    <main class="m-4">
      <h2 class="text-vue text-2xl font-bold">Einträge</h2>
      <ListEntry
        v-for="entry in filteredEntries"
        :key="entry.id"
        :entry="entry"
        @editItem="editItem"
      >
      </ListEntry>
    </main>
  </div>
</template>

<script>
import ListEntry from "@/components/ListEntry";
import CategorySelect from "@/components/CategorySelect";
import { lifecycleMixin } from "@/shared/logMixin.js";

export default {
  name: "Home",
  components: {
    ListEntry,
    CategorySelect
  },
  mixins: [lifecycleMixin],
  data() {
    return {
      category: null,
      subCategory: null,
      filterText: null
    };
  },
  computed: {
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
    },
    entries() {
      return this.$store.state.entries;
    }
  },
  watch: {
    category(newValue, oldValue) {
      if (newValue !== oldValue) this.subCategory = null;
    }
  },
  methods: {
    editItem(entryId) {
      this.$store.dispatch("editEntry", entryId);
    }
  }
};
</script>
