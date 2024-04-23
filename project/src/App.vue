<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

  <header>
    <div class="wrapper">
      <h1 class="text-3xl font-bold underline">Welcome!</h1>
      <nav class="">
        <RouterLink class="px-2" to="/">Home</RouterLink>
        <RouterLink class="px-2" to="/about">About</RouterLink>
        <RouterLink class="px-2" to="/content">Content</RouterLink>
        <RouterLink class="px-2" to="/publish">Publish</RouterLink>
      </nav>
    </div>

    <a href="/">
      <h2 class="font-cabin text-center text-6xl">Zoran Topic</h2>
    </a>
  </header>

  <RouterView />

</template>

<style scoped></style>
