<template>
  <div class="rounded border shadow my-2 p-2">
    <div class="flex flex-row justify-between">
      <h2 class="font-bold text-xl mb-2">{{ entry.title }}</h2>
      <div class="italic">{{ entry.path }}</div>
    </div>
    <div>{{ entry.description }}</div>
    <a :href="entry.url" target="_blank" class="text-vue hover:underline">{{
      entry.url
    }}</a>
  </div>
</template>

<script>
export default {
  props: {
    entry: {
      type: Object,
      required: true
    }
  }
};
</script>
