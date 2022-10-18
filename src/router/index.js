import { createRouter, createWebHistory } from "vue-router";
import Index from "../views/IndexView.vue";
import CheckInView from "@/views/CheckInView.vue";
import CheckOutView from "@/views/CheckOutView.vue";
import HubView from "@/views/HubView.vue";
import LiveSessionView from "@/views/LiveSessionView.vue";
import LearningListView from "@/views/LearningListView.vue";
import QuestionListView from "@/views/QuestionListView.vue";
import ExportView from "@/views/ExportView.vue";

const routes = [
  {
    path: "/",
    name: "IndexView",
    component: Index,
  },
  {
    path: "/HubView",
    name: "HubView",
    component: HubView,
  },

  {
    path: "/CheckInView",
    name: "CheckIn",
    component: CheckInView,
  },
  {
    path: "/CheckOutView",
    name: "CheckOut",
    component: CheckOutView,
  },
  {
    path: "/LiveSessionView",
    name: "LiveSession",
    component: LiveSessionView,
  },
  {
    path: "/LearningListView",
    name: "LearningList",
    component: LearningListView,
  },
  {
    path: "/QuestionListView",
    name: "QuestionListView",
    component: QuestionListView,
  },
  {
    path: "/HubView",
    name: "HubView",
    component: HubView,
  },
  {
    path: "/ExportView",
    name: "ExportView",
    component: ExportView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
