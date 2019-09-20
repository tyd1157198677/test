import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import base from "./router/base";
import test from "./router/test";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/Login",
      name: "Login",
      component:Login 
    },
    {
      path: "/",
      name: "Home",
      component:Home, 
      children:[
          ...base,
          ...test 
      ]
    }
  ]
});
