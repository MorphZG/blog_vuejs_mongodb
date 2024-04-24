<script setup>
  import store from "@/store"


</script>

<template>
  <main>

    <h2>Content page</h2>
    <!--list all content here-->
    <div class="flex justify-center">
      <div class="max-w-lg rounded-md p-3 m-1 cursor-pointer bg-neutral-800" v-for="post, itemIndex in store.posts"
        :key="itemIndex" @click="$router.push(`/content/${post.title}`)">
        <h1 class="text-3xl font-robotoMono font-bold">{{ post.title }}</h1>
        <p class="font-cabin py-2">{{ post.description }}</p>
      </div>
    </div>
  </main>
</template>

<style lang="css" scoped></style>