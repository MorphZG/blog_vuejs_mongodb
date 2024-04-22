<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/content">Content</RouterLink>
        <RouterLink to="/publish">Publish</RouterLink>
      </nav>
    </div>
    <h2>Zoran Topic</h2>
  </header>

  <RouterView />

</template>

<style scoped></style>
