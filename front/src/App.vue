<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav class="m-10 font-robotoMono">
        <RouterLink class="m-5" to="/">Home</RouterLink>
        <RouterLink class="m-5" to="/about">About</RouterLink>
        <RouterLink class="m-5" to="/content">Content</RouterLink>
        <RouterLink class="m-5" to="/publish">Publish</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
