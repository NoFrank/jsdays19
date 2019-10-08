<template>
  <div id="app">
    <Home :entries="entries"></Home>
  </div>
</template>

<script>
import Home from "./views/Home.vue";

export default {
  name: "app",
  data() {
    return {
      entries: [
        {
          id: 1,
          title: "Erster Eintrag",
          description: "Beschreibung Eintrag 1"
        },
        {
          id: 2,
          title: "Zweiter Eintrag",
          description: "Beschreibung Eintrag 2"
        }
      ]
    };
  },
  components: {
    Home
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
