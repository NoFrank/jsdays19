import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import { getCategories, getEntries } from "./shared/dataService";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      beforeEnter: async (to, from, next) => {
        let categories = await getCategories();
        let entries = await getEntries();
        to.params.categories = categories;
        to.params.entries = entries;
        next();
      },
      props: true
    },
    {
      path: "/edit",
      name: "edit",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "edit" */ "./views/Edit.vue"),
      beforeEnter: async (to, from, next) => {
        let categories = await getCategories();
        to.params.categories = categories;
        next();
      },
      props: true
    },
    {
      path: "/entry/:id",
      name: "entry",
      component: () => import(/* webpackChunkName: "edit" */ "./views/Entry.vue"),
      props: true
    }
  ]
});
