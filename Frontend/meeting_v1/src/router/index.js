import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import brief from "../views/brief.vue";
import student from "../views/student.vue";
import Process from "../views/process.vue";
import meeting from "../views/meeting.vue";
import nullPage from "../views/null.vue";
import pdfView from "../views/pdfView.vue";
import pdfVuer from "../views/pdfVuer.vue";
Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/meeting",
    name: "meeting",
    component: meeting,
    children: [
      {
        path: "/",
        component: nullPage,
      },
      {
        path: "nullpage",
        name: "nullPage",
        component: nullPage,
      },
      {
        path: "pdfView/:process_id",
        name: "pdfView",
        component: pdfView,
      },
      {
        path: "pdfVuer",
        name: "pdfVuer",
        component: pdfVuer,
      },
    ],
  },
  {
    path: "/process",
    name: "process",
    component: Process,
    children: [
      {
        path: "/",
        component: Process,
        redirect: "brief",
      },
      {
        path: "brief",
        name: "brief",
        component: brief,
      },
      {
        path: "student",
        name: "student",
        component: student,
      },
    ],
  },
  {
    path: "/brief",
    name: "brief",
    component: brief,
  },
  {
    path: "/student",
    name: "student",
    component: student,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
