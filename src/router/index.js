import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import about from "@/views/AboutView.vue";
import AttendeesList from "@/views/AttendeesList.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: about,
  },
  {
    path: "/AttendeesList",
    name: "AttendeesList",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AttendeesList,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
