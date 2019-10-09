<template>
  <div class="m-4">
    <h2 class="text-2xl">{{ entry.title }}</h2>
    <hr class="mb-4" />
    <div class="font-bold">Beschreibung</div>
    <div class="mb-2">{{ entry.description }}</div>
    <div class="font-bold">URL</div>
    <div class="mb-2">{{ entry.url }}</div>
    <div class="font-bold">Kategorie</div>
    <div class="mb-2">{{ entry.path[0] }}</div>
    <div class="font-bold">Unterkategorie</div>
    <div>{{ entry.path.length > 1 ? entry.path[1] : "-" }}</div>
    <AvButton class="mt-4" @click="back">Zurück</AvButton>
  </div>
</template>

<script>
export default {
  props: {
    entry: {
      type: Object,
      required: false
    }
  },
  methods: {
    back() {
      this.$router.back();
    }
  }
};
</script>
