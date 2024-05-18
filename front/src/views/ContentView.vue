<script setup>
import usePostsStore from "@/stores/postsStore";
import postCard from "@/components/postCard.vue";
import buttonOne from "@/components/buttons/buttonOne.vue";
import { onMounted } from "vue";

const postsStore = usePostsStore();
onMounted(() => {
  if (postsStore.posts.length < 1) {
    postsStore.fetchPosts();
    postsStore.getLatestPosts();
  }
});
</script>

<template>
  <section class="px-4">
    <h1 class="ml-10 font-roboto text-2xl font-thin">>> Featured Posts</h1>
    <div v-for="(post, itemIndex) in postsStore.posts" :key="itemIndex">
      <postCard :title="post.title" :created-at="post.createdAt" :content="post.content" />
    </div>
  </section>
</template>

<style lang="css" scoped></style>
