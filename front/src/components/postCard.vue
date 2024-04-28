<script setup>
import { useRoute } from "vue-router";
import store from "@/store";

const route = useRoute();
const post = store.posts.find((arrayElement) => {
  return arrayElement.id == route.params.postId;
});
</script>

<template>
  <div class="size-2/3 p-10 pl-20">
    <h1 class="font-robotoMono text-3xl font-bold">{{ post.title }}</h1>
    <p class="my-5 font-cabin">{{ post.description }}</p>
    <p class="font-lekton">{{ post.content }}</p>
  </div>
</template>

<style lang="css" scoped></style>
