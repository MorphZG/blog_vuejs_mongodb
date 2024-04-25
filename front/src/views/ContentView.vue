<script setup>
import store from "@/store";
</script>

<template>
  <main>
    <h2>Content page</h2>
    <!--list all content here-->
    <div class="flex justify-center">
      <div
        class="m-2 max-w-lg cursor-pointer rounded-md bg-neutral-800 p-3"
        v-for="(post, itemIndex) in store.posts"
        :key="itemIndex"
        @click="$router.push(`/content/${post.title}`)"
      >
        <h1 class="font-robotoMono text-3xl font-bold">{{ post.title }}</h1>
        <p class="py-2 font-cabin">{{ post.description }}</p>
      </div>
    </div>
  </main>
</template>

<style lang="css" scoped></style>
