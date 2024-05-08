<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav class="m-10 flex h-8 justify-center font-robotoMono">
      <RouterLink class="m-5" to="/">Home</RouterLink>
      <RouterLink class="m-5" to="/about">About</RouterLink>
      <RouterLink class="m-5" to="/content">Content</RouterLink>
      <RouterLink class="m-5" to="/publish">Publish</RouterLink>
    </nav>
  </header>

  <div>
    <RouterView />
  </div>
</template>

<style scoped></style>
