<script setup>
  import store from "@/store"
</script>

<template>
  <main>

    <h2>Content page</h2>
    <!--list all content here-->
    <div class="max-w-xl border-2 cursor-pointer" v-for="post, itemIndex in store.posts" :key="itemIndex"
      @click="$router.push(`/content/${post.title}`)">
      <h3 class="">{{ post.title }}</h3>
      <p class="">{{ post.description }}</p>
    </div>

  </main>
</template>

<style lang="css" scoped></style>

<!--https://www.youtube.com/watch?v=0NB9lgFcOT4-->
<!--29:02-->