<script setup>
function getReadingTime(content) {
  let words = content.split(" ");
  let count = words.length;
  let wordsMinute = 180;
  return Math.ceil(count / wordsMinute);
}
const props = defineProps({
  postId: String,
  title: String,
  createdAt: Date,
  dateString: String,
  content: String,
  tags: String
});
</script>

<template>
  <!-- refactor using slots -->
  <main>
    <div class="cursor-pointer" @click="$router.push(`/content/${postId}`)">
      <p class="text-left font-lekton">{{ dateString }}</p>
      <h1 class="text-md text-left font-robotoMono font-bold">{{ title }}</h1>
      <p>{{ tags }}</p>
      <p class="truncate">{{ content }}</p>
      <p class="text-left font-lekton">reading time: {{ getReadingTime(content) }} min</p>
    </div>
  </main>
</template>

<style lang="css" scoped></style>
