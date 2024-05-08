<script setup>
import store from "@/store";
import { ref } from "vue";

// content view should display a list of post cards, where each card is single post

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

const props = defineProps({ test: String });
</script>

<template>
  <main>
    <!--list content here-->
    <div
      class="hoverFx m-1 cursor-pointer rounded-lg border-2 border-rose-500 bg-neutral-800 p-5"
      v-for="(post, itemIndex) in store.posts"
      :key="itemIndex"
      @click="$router.push(`/content/${post.id}`)"
    >
      <h1 class="mb-2 text-center font-robotoMono text-xl font-bold">{{ post.title }}</h1>
      <p class="text-center font-lekton">reading time: {{ getReadingTime(post.content) }} min</p>
      <p>{{ test }}</p>
    </div>
  </main>
</template>

<style lang="css" scoped></style>

<!--
  <main>
    <div
      class="module-wrap flex w-full flex-row flex-wrap content-center justify-center rounded-lg"
    >
      <div
        class="hoverFx m-1 w-full cursor-pointer rounded-lg border-2 border-rose-500 bg-neutral-800 p-5"
        v-for="(post, itemIndex) in store.posts"
        :key="itemIndex"
        @click="$router.push(`/content/${post.id}`)"
      >
        <h1 class="mb-2 text-center font-robotoMono text-xl font-bold">{{ post.title }}</h1>
        <p class="font-lekton">Average reading time: {{ getReadingTime(post.content) }} min</p>
      </div>
    </div>
  </main>

-->
