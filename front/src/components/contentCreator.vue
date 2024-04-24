<script setup>

</script>

<template>

  <form class="place-content-center" action="/content/:slug" method="post">
    <input class="block h-10 m-5 border-2 shadow-2xl " type="text" placeholder="title">
    <textarea class="block m-5 border-2 shadow-2xl" name="content-area" id="content-area"
      placeholder="content"></textarea>
  </form>

</template>

<style lang="css" scoped></style>
