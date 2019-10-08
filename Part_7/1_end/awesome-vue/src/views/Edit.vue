<template>
  <div class="m-4">
    <h2 class="text-vue text-2xl font-bold">Eintrag bearbeiten</h2>
    <AvInput label="Titel" name="titel" v-model="item.title"></AvInput>
    <AvInput
      label="Beschreibung"
      name="description"
      v-model="item.description"
    ></AvInput>
    <AvInput label="Url" name="url" v-model="item.url"></AvInput>
    <CategorySelect
      :category="item.category"
      :subCategory="item.subCategory"
      @inputCategory="item.category = $event"
      @inputSubCategory="item.subCategory = $event"
    ></CategorySelect>
    <AvButton @click="cancel">Abbrechen</AvButton>
    <AvButton class="ml-2" @click="update">Speichern</AvButton>
  </div>
</template>

<script>
import CategorySelect from "@/components/CategorySelect";

export default {
  components: {
    CategorySelect
  },
  data() {
    return {
      item: {}
    };
  },
  computed: {
    editEntry() {
      return this.$store.state.editEntry;
    }
  },
  created() {
    this.item = Object.assign({}, this.editEntry);
  },
  methods: {
    update() {
      this.$store.dispatch("saveEntry", this.item);
    },
    cancel() {
      this.$store.dispatch("cancelEdit");
    }
  }
};
</script>
