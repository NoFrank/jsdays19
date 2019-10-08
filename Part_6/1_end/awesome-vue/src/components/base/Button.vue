<template functional>
  <button
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    :style="[data.staticStyle, data.style]"
    :class="[data.staticClass, data.class]"
    @click="listeners.click()"
  >
    <slot></slot>
  </button>
</template>
