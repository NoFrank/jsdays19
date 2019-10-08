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
      <AvButton @click="showModal = true">Details</AvButton>
      <AvButton class="ml-2" @click="$emit('editItem', entry.id)"
        >Bearbeiten</AvButton
      >
    </div>

    <AvModal :showing="showModal">
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
      <AvButton class="mt-4" @click="showModal = false">Schließen</AvButton>
    </AvModal>
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
  }
};
</script>
