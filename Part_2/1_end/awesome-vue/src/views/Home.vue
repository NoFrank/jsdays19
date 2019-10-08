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
          :options="categories"
          classes="mr-2"
        >
        </AvSelect>
        <AvSelect
          v-model="subCategory"
          label="Unterkategorie"
          :options="subCategories"
          classes="mr-2"
        ></AvSelect>
        <AvInput v-model="filterText" label="Filter"></AvInput>
      </div>
      <AvButton>Neuer Eintrag</AvButton>
      <div>Kategorie: {{ category }}</div>
      <div>Unterkategorie: {{ subCategory }}</div>
      <div>Filter: {{ filterText }}</div>
    </section>
    <main class="m-4">
      <h2 class="text-vue text-2xl font-bold">Einträge</h2>
      <div v-for="entry in entries" :key="entry.id">
        <div class="font-bold">
          {{ entry.title }}
        </div>
        <div class="mb-2">
          {{ entry.description }}
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      category: null,
      subCategory: null,
      filterText: null,
      categories: [
        { key: 0, value: "Plugins" },
        { key: 1, value: "Ressourcen" }
      ],
      subCategories: [
        { key: 0, value: "State-Management" },
        { key: 1, value: "Router" }
      ]
    };
  },
  props: {
    entries: {
      type: Array,
      required: true
    }
  },
  methods: {
    clicked() {
      alert("clicked");
    }
  }
};
</script>
