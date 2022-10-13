import { createRouter, createWebHistory } from "vue-router";

import Index from "@/views/IndexView.vue";
import CheckInView from "@/views/CheckInView.vue";
import CheckOutView from "@/views/CheckOutView.vue";
import LiveSessionView from "@/views/LiveSessionView.vue";
import LearningListView from "@/views/LearningListView.vue";
import QuestionListView from "@/views/QuestionListView.vue";
import HubView from "@/views/HubView.vue";

import RotiEvaluation from "@/views/RotiEvaluation.vue";
import AttendeesList from "@/views/AttendeesList.vue";
import CheckIn from "@/views/CheckIn.vue";

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
    path: "/attendees-list",
    name: "attendees-list",
    component: AttendeesList,
  },

  {
    path: "/attendees-list",
    name: "attendees-list",
    component: AttendeesList,
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
