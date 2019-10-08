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
      :categories="categories"
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
  props: {
    entry: {
      type: Object,
      required: true
    },
    updateMethod: {
      type: Function,
      required: true
    },
    categories: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      item: this.entry
    };
  },
  methods: {
    update() {
      this.updateMethod(this.item);
      this.$router.push("/");
    },
    cancel() {
      this.$router.push("/");
    }
  }
};
</script>
