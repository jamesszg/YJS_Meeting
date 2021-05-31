import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
  // {
  //   path: "/index",
  //   name: "Index",
  //   component: () =>
  //     import ("../views/Index.vue"),
  // },
  {
    path: "/poll",
    name: "Poll",
    component: () =>
      import ("../views/Poll.vue"),
  },
  {
    path: "/meeting",
    name: "Meeting",
    component: () =>
      import ("../views/Meeting.vue"),
  },
  {
    path: "/info",
    name: "Info",
    component: () =>
      import ("../views/Info.vue"),
  },
  {
    path: "/row",
    name: "Row",
    component: () =>
      import ("../views/Row.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
