<template functional>
  <transition name="fade">
    <div
      v-if="props.showing"
      class="fixed inset-0 w-full h-screen flex items-center justify-center"
    >
      <div class="absolute inset-0 bg-black opacity-25"></div>
      <div class="w-full max-w-2xl bg-white rounded shadow p-8 opacity-100 z-0">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
