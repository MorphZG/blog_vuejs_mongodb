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
    <div
      class="border-gradient border-gradient-red hoverFx ml-10 cursor-pointer bg-neutral-800 p-5"
      @click="$router.push(`/content/${postId}`)"
    >
      <h1 class="truncate text-center font-robotoMono text-xl font-bold">{{ title }}</h1>
      <img src="https://placehold.co/400x100" alt="placeholder image" />
      <p class="text-center font-lekton">reading time: {{ getReadingTime(content) }} min</p>
    </div>
  </main>
</template>

<style lang="css" scoped></style>
