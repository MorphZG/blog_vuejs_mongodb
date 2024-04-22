<script setup>

</script>

<template>

  <form action="/content/:slug" method="post">
    <div class="post-container">
      <input class="title" type="text">
      <textarea class="content" name="content" id="content-area" cols="100" rows="10"></textarea>
    </div>
  </form>

</template>

<style lang="css" scoped>

  .post-container {
    margin: 50px;
    padding: 20px;
    display: flex;
    flex-direction: column;
  }

  .title {
    padding: 5px;
    margin: 10px;
  }

  .content {
    padding: 5px;
    margin: 10px;
  }

</style>
