import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

// https://pinia.vuejs.org/getting-started.html
const usePostsStore = defineStore("posts", () => {
  const posts = ref([]);

  async function fetchPosts() {
    let response = await axios.get("/api/posts");
    response.data.forEach((post) => {
      post.createdAt = new Date(post.createdAt);
      post.dateString = post.createdAt.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
      });
      posts.value.push(post);
    });
  }

  return {
    posts,
    fetchPosts
  };
});

export default usePostsStore;
