<script setup>
  import { useRoute } from "vue-router";
  import store from "@/store"

  const route = useRoute()
  const post = store.posts.find((arrayElement) => { return arrayElement.title == route.params.postTitle })

</script>

<template>
  <div class="post-wrapper p-10">
    <p class="">{{ post.id }}</p>
    <h1 class="text-3xl font-robotoMono font-bold">{{ post.title }}</h1>
    <br>
    <p class="font-cabin">{{ post.description }}</p>
    <br>
    <p class="font-lekton">{{ post.content }}</p>
  </div>


</template>

<style lang="css" scoped></style>
