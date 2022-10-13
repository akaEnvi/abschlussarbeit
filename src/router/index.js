import { createRouter, createWebHistory } from "vue-router";

import Index from "@/views/IndexView.vue";
import CheckInView from "@/views/CheckInView.vue";
import CheckOutView from "@/views/CheckOutView.vue";
import LiveSessionView from "@/views/LiveSessionView.vue";
import LearningListView from "@/views/LearningListView.vue";
import QuestionListView from "@/views/QuestionListView.vue";
import HubView from "@/views/HubView.vue";

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
    name: "QuestionList",
    component: QuestionListView,
  },
  {
    path: "/HubView",
    name: "HubView",
    component: HubView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
