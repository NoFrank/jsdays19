<template>
  <div class="mb-4 w-full" :class="classes">
    <label v-if="label" :for="name" class="block font-bold mb-2">{{
      label
    }}</label>
    <div class="inline-block relative w-full">
      <select
        :id="name"
        :value="value"
        class="appearance-none border shadow rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline bg-white"
        @input="$emit('input', $event.target.selectedOptions[0].value)"
      >
        <option :value="null">- Auswählen -</option>
        <option
          v-for="option of options"
          :key="option.key"
          :value="option.key"
          >{{ option.value }}</option
        >
      </select>
      <div
        class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
      >
        <svg
          class="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
          />
        </svg>
      </div>
    </div>
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
    value: {
      required: true
    },
    options: {
      type: Array,
      required: true
    },
    classes: {
      type: String
    }
  }
};
</script>
