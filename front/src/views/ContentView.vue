<script setup>
import store from "@/store";

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
</script>

<template>
  <main>
    <!--list content here-->
    <h1 class="ml-10 font-roboto text-2xl font-thin">>> Featured Posts</h1>
    <div class="flex">
      <div
        class="m-2 max-w-lg cursor-pointer border-2 border-rose-500 bg-neutral-800 p-5"
        v-for="(post, itemIndex) in store.posts"
        :key="itemIndex"
        @click="$router.push(`/content/${post.id}`)"
      >
        <h1 class="mb-2 text-center font-robotoMono text-xl font-bold">{{ post.title }}</h1>
        <p class="font-lekton">Average reading time: {{ getReadingTime(post.content) }} min</p>
      </div>
    </div>
  </main>
</template>

<style lang="css" scoped></style>
