<script setup>
import { useRoute } from "vue-router";
import usePostsStore from "@/store";

const route = useRoute();
const postsStore = usePostsStore();

console.log(route.params.postId);
console.log(postsStore.posts);

let targetPost = postsStore.posts.find((arrayElement) => {
  return arrayElement.id == route.params.postId;
});
</script>

<template>
  <div class="size-2/3 p-10 pl-20">
    <h1 class="font-robotoMono text-3xl font-bold">{{ targetPost.title }}</h1>
    <p class="my-5 font-cabin">{{ targetPost.tags }}</p>
    <p class="font-lekton">{{ targetPost.content }}</p>
  </div>
</template>

<style lang="css" scoped></style>
