<template>
  <div :class="classes">
    <AvSelect
      :value="category"
      @input="$emit('inputCategory', $event ? Number($event) : null)"
      label="Kategorie"
      :options="currentCategories"
      classes="mr-2"
    >
    </AvSelect>
    <AvSelect
      :value="subCategory"
      @input="$emit('inputSubCategory', $event ? Number($event) : null)"
      label="Unterkategorie"
      :options="currentSubCategories"
      classes="mr-2"
      :disabled="!category"
    ></AvSelect>
  </div>
</template>

<script>
export default {
  props: {
    category: {
      type: Number
    },
    subCategory: {
      type: Number
    },
    classes: {
      type: String
    }
  },
  computed: {
    categories() {
      return this.$store.state.categories;
    },
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
    }
  }
};
</script>
