<script setup>
import usePostsStore from "@/stores/postsStore";
import { onMounted } from "vue";

function getReadingTime(content) {
  let words = content.split(" ");
  let count = words.length;
  let wordsMinute = 180;
  return Math.ceil(count / wordsMinute);
}
const postsStore = usePostsStore();
const props = defineProps({
  title: String,
  createdAt: String, // convert to Date
  content: String
});
</script>

<template>
  <main>
    <!--list content here-->
    <div
      class="border-gradient border-gradient-purple hoverFx m-1 cursor-pointer bg-neutral-800 p-5"
      @click="$router.push(`/content/${post._id}`)"
    >
      <h1 class="mb-2 text-center font-robotoMono text-xl font-bold">{{ title }}</h1>
      <p class="text-center font-lekton">date: {{ createdAt }}</p>
      <p class="text-center font-lekton">reading time: {{ getReadingTime(content) }} min</p>
    </div>
  </main>
</template>

<style lang="css" scoped></style>
