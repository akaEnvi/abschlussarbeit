import { createRouter, createWebHistory } from "vue-router";

import Index from "../views/IndexView.vue";
import questionList from "@/views/questionList.vue";

import RotiEvaluation from "@/views/RotiEvaluation.vue";
import CheckIn from "@/views/CheckIn.vue";

import AttendeeList from "@/views/AttendeesList.vue";

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/AttendeeList",
    name: "AttendeeList",
    component: AttendeeList,
  },

  {
    path: "/questionList",
    name: "question",
    component: questionList,
  },

  {
    path: "/CheckIn",
    name: "CheckIn",
    component: CheckIn,
  },
  { path: "/Roti", name: "RotiEvalution", component: RotiEvaluation },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
