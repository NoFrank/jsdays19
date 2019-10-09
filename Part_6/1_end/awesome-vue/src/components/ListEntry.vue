<template>
  <div class="rounded border shadow my-2 p-2">
    <div class="flex flex-row justify-between">
      <h2 class="font-bold text-xl mb-2">{{ entry.title }}</h2>
      <div class="italic">{{ entry.path | pathToString }}</div>
    </div>
    <div>{{ entry.description }}</div>
    <a :href="entry.url" target="_blank" class="text-vue hover:underline">{{
      entry.url
    }}</a>
    <div class="mt-4">
      <AvButton @click="showDetail">Details</AvButton>
      <AvButton class="ml-2" @click="$emit('editItem', entry.id)"
        >Bearbeiten</AvButton
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    entry: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showModal: false
    };
  },
  filters: {
    pathToString: function(value) {
      return value.join(" / ");
    }
  },
  methods: {
    showDetail() {
      this.$router.push({
        name: "entry",
        params: { id: this.entry.id, entry: this.entry }
      });
    }
  }
};
</script>
