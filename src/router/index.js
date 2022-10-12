import { createRouter, createWebHistory } from "vue-router";
import Index from "../views/IndexView.vue";
import questionList from "@/views/questionList.vue";

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },

  {
    path: "/questionList",
    name: "question",
    component: questionList,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
