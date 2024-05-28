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
  tags: Array
});
</script>

<template>
  <!-- refactor using slots -->
  <main>
    <div class="ml-10 flex cursor-pointer border" @click="$router.push(`/content/${postId}`)">
      <img src="https://placehold.co/200x150" alt="placeholder image" />

      <div class="ml-5">
        <p class="text-left font-lekton">{{ dateString }}</p>
        <h1 class="text-md text-left font-robotoMono font-bold">{{ title }}</h1>

        <span v-for="(tag, index) in tags" :key="index">{{ tag }}</span>
        <p class="truncate text-wrap text-left">{{ content }}</p>
        <p class="text-left font-lekton">reading time: {{ getReadingTime(content) }} min</p>
      </div>
    </div>
    <a @click="$router.push(`/content/${postId}`)">Read more...</a>
  </main>
</template>

<style lang="css" scoped></style>
