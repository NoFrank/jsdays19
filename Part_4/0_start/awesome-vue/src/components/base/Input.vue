<template>
  <div class="mb-4 w-full" :class="classes">
    <label v-if="label" :for="name" class="block font-bold mb-2">{{
      label
    }}</label>
    <input
      :type="type"
      :id="name"
      :value="value"
      class="appearance-none border shadow rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ""
    },
    name: {
      type: String
    },
    type: {
      type: String,
      default: "text"
    },
    placeholder: {
      type: String,
      default: ""
    },
    value: {
      required: true
    },
    classes: {
      type: String
    }
  }
};
</script>
