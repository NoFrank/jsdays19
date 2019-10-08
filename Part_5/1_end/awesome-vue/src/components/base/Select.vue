<template functional>
  <div class="mb-4 w-full" :class="props.classes">
    <label v-if="props.label" :for="name" class="block font-bold mb-2">{{
      props.label
    }}</label>
    <div class="inline-block relative w-full">
      <select
        :id="props.name"
        :value="props.value"
        class="appearance-none border shadow rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline bg-white disabled:opacity-75"
        @input="listeners.input($event.target.selectedOptions[0].value)"
        :disabled="props.disabled ? props.disabled == true : false"
      >
        <option :value="null">- Auswählen -</option>
        <option
          v-for="option of props.options"
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
