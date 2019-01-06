import VueRouter from "vue-router";

import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";

const routes = [
  { path: "/login", component: LoginForm, alias: "/" },
  { path: "/registration", component: RegistrationForm }
];

export default new VueRouter({
  routes // `routes: routes` の短縮表記
});
