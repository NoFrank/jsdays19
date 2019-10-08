export let lifecycleMixin = {
  beforeCreate: function() {
    console.log("beforeCreate: " + this.$options.name);
  },
  created: function() {
    console.log("created: " + this.$options.name);
  },
  beforeMount: function() {
    console.log("beforeMount: " + this.$options.name);
  },
  mounted: function() {
    console.log("mounted: " + this.$options.name);
  },
  beforeUpdate: function() {
    console.log("beforeUpdate: " + this.$options.name);
  },
  updated: function() {
    console.log("updated: " + this.$options.name);
  },
  beforeDestroy: function() {
    console.log("beforeDestroy: " + this.$options.name);
  },
  destroyed: function() {
    console.log("destroyed: " + this.$options.name);
  }
};
