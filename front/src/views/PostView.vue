<script setup>
import MarkdownIt from "markdown-it";
import usePostsStore from "@/stores/postsStore";
import { useRoute } from "vue-router";

const route = useRoute();
const postsStore = usePostsStore();
const markdown = new MarkdownIt(); // render markdown

console.log(`post ID: ${route.params.postId}`);

let targetPost = postsStore.posts.find((arrayElement) => {
  return arrayElement._id == route.params.postId;
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
