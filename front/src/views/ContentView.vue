<script setup>
import usePostsStore from "@/stores/postsStore";
import postCard from "@/components/postCard.vue";
import buttonOne from "@/components/buttons/buttonOne.vue";
import { onMounted } from "vue";

const postsStore = usePostsStore();
</script>

<template>
  <section class="px-4">
    <h1 class="ml-10 font-roboto text-2xl font-thin">>> Featured Posts</h1>
    <postCard />
  </section>
</template>

<style lang="css" scoped></style>
