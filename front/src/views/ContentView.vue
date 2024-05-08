<script setup>
import postCard from "@/components/postCard.vue";
import { ref } from "vue";
</script>

<template>
  <h1 class="ml-10 font-roboto text-2xl font-thin">>> Featured Posts</h1>
  <div class="flex items-center justify-center">
    <postCard class="flex" />
  </div>
</template>

<style lang="css" scoped></style>
