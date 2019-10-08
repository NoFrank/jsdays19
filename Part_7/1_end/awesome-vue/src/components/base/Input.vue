<template functional>
  <div class="mb-4 w-full" :class="[data.staticClass, data.class]">
    <label v-if="props.label" :for="name" class="block font-bold mb-2">{{
      props.label
    }}</label>
    <input
      :type="props.type ? props.type : 'text'"
      :value="props.value"
      @input="listeners.input($event.target.value)"
      class="appearance-none border shadow rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline"
      :placeholder="props.placeholder"
    />
  </div>
</template>
