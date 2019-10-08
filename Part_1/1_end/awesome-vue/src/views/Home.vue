<template>
  <div>
    <header
      class="border-b border-color-gray-500 p-4 flex flex-row items-center"
    >
      <img src="../assets/logo.png" class="align-center h-8 mr-4" />
      <h1 class="text-vue text-3xl">Awesome Vue.js</h1>
    </header>
    <section></section>
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
  props: {
    entries: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
