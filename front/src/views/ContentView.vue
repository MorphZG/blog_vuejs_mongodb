<script setup>
import usePostsStore from "@/stores/postsStore";
import postCard from "@/components/postCard.vue";
import postList from "@/components/postList.vue";
import { onMounted } from "vue";

const postsStore = usePostsStore();
onMounted(() => {
  if (postsStore.posts.length == 0) {
    postsStore.fetchPosts();
  }
});
</script>

<template>
  <section class="">
    <h1 class="mb-5 ml-10 font-roboto text-2xl font-thin">>> Featured Posts</h1>
    <div class="grid grid-cols-3 justify-center gap-3 px-4">
      <div class="" v-for="post in postsStore.posts" :key="post._id">
        <postCard
          :post-id="post._id"
          :title="post.title"
          :date-string="post.dateString"
          :content="post.content"
        />
      </div>
    </div>
  </section>
  <!-- implement sorting -->
  <!-- newest first / oldest first -->
  <section class="my-10">
    <h1 class="mb-5 ml-10 font-roboto text-2xl font-thin">>> Latest posts</h1>
    <div class="grid grid-cols-1 justify-start gap-10">
      <div class="" v-for="post in postsStore.posts" :key="post._id">
        <postList
          :post-id="post._id"
          :title="post.title"
          :date-string="post.dateString"
          :content="post.content"
        />
      </div>
    </div>
  </section>
</template>

<style lang="css" scoped></style>
