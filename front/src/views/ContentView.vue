<script setup>
import usePostsStore from "@/stores/postStore";
import postCard from "@/components/postCard.vue";
import buttonOne from "@/components/buttons/buttonOne.vue";

const postsStore = usePostsStore();
</script>

<template>
  <section>
    <h1 class="ml-10 font-roboto text-2xl font-thin">>> Featured Posts</h1>
    <div class="flex items-center justify-center">
      <postCard class="flex" />
    </div>
  </section>
  <div class="flex justify-center">
    <buttonOne
      text="Show More"
      @click="postsStore.fetchPosts"
      class="transition duration-300 ease-in-out hover:bg-green-800"
    />
  </div>
</template>

<style lang="css" scoped></style>
