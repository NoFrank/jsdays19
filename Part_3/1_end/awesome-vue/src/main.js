import Vue from "vue";
import App from "./App.vue";
import "@/theme/main.scss";

Vue.config.productionTip = false;

import Button from "@/components/base/Button";
import Input from "@/components/base/Input";
import Select from "@/components/base/Select";

Vue.component("AvButton", Button);
Vue.component("AvInput", Input);
Vue.component("AvSelect", Select);

new Vue({
  render: h => h(App)
}).$mount("#app");
