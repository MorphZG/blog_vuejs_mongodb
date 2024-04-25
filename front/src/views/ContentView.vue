<script setup>
  import store from "@/store";
</script>

<template>
  <main>
    <!--list content here-->
    <h1 class=" ml-10 font-roboto font-thin text-2xl">>> Featured Posts</h1>
    <div class="flex justify-center">
      <div class="m-2 max-w-lg cursor-pointer rounded-md border-2 border-rose-500 bg-neutral-800 p-3"
        v-for="(post, itemIndex) in store.posts" :key="itemIndex" @click="$router.push(`/content/${post.title}`)">
        <h1 class="font-robotoMono text-3xl font-bold">{{ post.title }}</h1>
        <p class="py-2 font-cabin">{{ post.description }}</p>
      </div>
    </div>
  </main>
</template>

<style lang="css" scoped></style>
