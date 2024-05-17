import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

// https://pinia.vuejs.org/getting-started.html
const usePostsStore = defineStore("posts", () => {
  const posts = ref([]);

  async function fetchPosts() {
    const response = await axios.get("/api/posts");
    response.data.forEach((post) => {
      posts.value.push(post);
    });
  }
  return {
    posts,
    fetchPosts
  };
});

export default usePostsStore;

/*

// fetch post from db

import { useRoute } from "vue-router";

const route = useRoute();
const targetID = route.params.postId

async function getPost() {
let foundPost = await db.findOne({id: targetID})
}




      id: uid(),
      title: "Who am i? For real",
      date: Date(),
      content: "",
      tags: ["life", "career"],
      categories: ["life", "career"]
*/
