import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ContentView from "@/views/ContentView.vue";
import AboutView from "@/views/AboutView.vue";
import PublishView from "@/views/PublishView.vue";
import PostView from "@/views/PostView.vue";
import TagView from "@/views/TagView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "homeRoute",
      component: HomeView
    },
    {
      path: "/about",
      name: "aboutRoute",
      component: AboutView
    },
    {
      path: "/content",
      name: "contentRoute",
      component: ContentView
    },
    {
      path: "/publish",
      name: "publishRoute",
      component: PublishView
    },
    {
      path: "/content/:postId",
      name: "postRoute",
      component: PostView
    },
    {
      path: "/content/:tag",
      name: "tagRoute",
      component: TagView
    }
  ]
});

export default router;
