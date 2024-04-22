<script setup>
  import { useRoute } from "vue-router";
  import store from "@/store"

  const route = useRoute()
  const post = store.posts.find((title) => { title == $route.params })
</script>

<template>
  <div class="post-wrapper">
    <p>{{ $route.params }}</p>
    <p>{{ post }}</p>
  </div>

</template>

<style lang="css" scoped></style>
