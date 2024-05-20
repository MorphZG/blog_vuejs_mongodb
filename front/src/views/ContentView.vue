<script setup>
import usePostsStore from "@/stores/postsStore";
import postCard from "@/components/postCard.vue";
import { onMounted } from "vue";

const postsStore = usePostsStore();
onMounted(() => {
  postsStore.fetchPosts();
});
</script>

<template>
  <section class="px-4">
    <h1 class="ml-10 font-roboto text-2xl font-thin">>> Featured Posts</h1>
    <div class="flex flex-wrap justify-center">
      <div class="" v-for="post in postsStore.posts" :key="post._id">
        <postCard
          :post-id="post._id"
          :title="post.title"
          :date-string="post.dateString"
          :content="post.content"
        />
        {{ console.log(post) }}
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped></style>
