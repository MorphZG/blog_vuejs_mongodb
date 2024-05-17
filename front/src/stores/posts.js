import { defineStore } from "pinia";
import { uid } from "uid";
import { ref } from "vue";

// https://pinia.vuejs.org/getting-started.html
const usePostsStore = defineStore("posts", () => {
  const posts = ref([
    {
      id: uid(),
      title: "Who am i? For real",
      date: Date(),
      content: "",
      tags: ["life", "career"],
      categories: ["life", "career"]
    },
    {
      id: uid(),
      title: "Who am i? For real",
      date: Date(),
      content: "",
      tags: ["life", "career"],
      categories: ["life", "career"]
    }
  ]);
  return { posts };
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

*/
