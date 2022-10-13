import { createRouter, createWebHistory } from "vue-router";

import Index from "../views/IndexView.vue";
import questionList from "@/views/questionList.vue";
import RotiEvaluation from "@/views/RotiEvaluation.vue";
import CheckIn from "@/views/CheckIn.vue";
import HubView from "@/views/HubView.vue";
import LiveSessionView from "@/views/LiveSessionView.vue";
import LearningList from "@/views/LearningList.vue";

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/HubView",
    name: "HubView",
    component: HubView,
  },

  {
    path: "/LearningList",
    name: "LearningList",
    component: LearningList,
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

  {
    path: "/LiveSessionView",
    name: "LiveSession",
    component: LiveSessionView,
  },

  {
    path: "/Roti",
    name: "RotiEvalution",
    component: RotiEvaluation,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
