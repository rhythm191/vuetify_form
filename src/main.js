import Vue from "vue";
import "./plugins/vuetify";
import "./plugins/vue-router";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
