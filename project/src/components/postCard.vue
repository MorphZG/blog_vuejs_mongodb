<script setup>
  import { useRoute } from "vue-router";
  import store from "@/store"

  const route = useRoute()
  const post = store.posts.find((arrayElement) => { return arrayElement.title == route.params.postTitle })

</script>

<template>
  <div class="post-wrapper border-2 cursor-pointer">
    <p class="">{{ post }}</p>
  </div>


</template>

<style lang="css" scoped></style>
