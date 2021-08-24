import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/artifact/:id",
    component: () => import("../views/artifact/single.vue")
  },
  {
    path: "/artifact",
    component: () => import("../views/artifact/list.vue")
  },
  {
    path: "/hero/:id",
    component: () => import("../views/hero/single.vue")
  },
  {
    path: "/hero",
    component: () => import("../views/hero/list.vue")
  },
  {
    path: "/",
    component: () => import("../views/index.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes
});

export default router;
