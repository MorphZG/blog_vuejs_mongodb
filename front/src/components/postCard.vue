<script setup>
import usePostsStore from "@/stores/postStore";
import { ref } from "vue";

function getWordCount(string) {
  let words = string.split(" ");
  let count = words.length;
  return count;
}

function getReadingTime(content) {
  let words = getWordCount(content);
  let wordsMinute = 180;
  return Math.ceil(words / wordsMinute);
}

const postsStore = usePostsStore();
</script>

<template>
  <main>
    <!--list content here-->
    <div
      class="border-gradient border-gradient-purple hoverFx m-1 cursor-pointer bg-neutral-800 p-5"
      v-for="(post, itemIndex) in postsStore.posts"
      :key="itemIndex"
      @click="$router.push(`/content/${post.id}`)"
    >
      <h1 class="mb-2 text-center font-robotoMono text-xl font-bold">{{ post.title }}</h1>
      <p class="text-center font-lekton">reading time: {{ getReadingTime(post.content) }} min</p>
    </div>
  </main>
</template>

<style lang="css" scoped></style>
