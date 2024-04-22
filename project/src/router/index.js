import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ContentView from "@/views/ContentView.vue";
import AboutView from "@/views/AboutView.vue";
import PublishView from "@/views/PublishView.vue";
import postCard from "@/components/postCard.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/about",
      name: "about",
      component: AboutView
    },
    {
      path: "/content",
      name: "content",
      component: ContentView
    },
    {
      path: "/publish",
      name: "publish",
      component: PublishView
    },
    {
      path: "/content/:postTitle",
      name: "post",
      component: postCard
    }
  ]
});

export default router;
