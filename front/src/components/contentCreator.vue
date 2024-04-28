<script setup>
import axios from "axios";
import { ref } from "vue";
// send post request to /api/newPost

const title = ref("");
const content = ref("");

async function postData() {
  try {
    let response = await axios.post("http://localhost:3030/api/newpost", {
      title: title.value,
      content: content.value
    });
    console.log(response);
  } catch (err) {
    console.error(err);
  }
}
</script>

<template>
  {{ title }}
  {{ content }}
  <form class="" @submit.prevent="postData" method="post">
    <input
      class="m-5 block h-10 border-2 text-slate-900 shadow-2xl"
      v-model="title"
      type="text"
      name="title"
      id="title-input"
      placeholder="title"
    />
    <textarea
      class="m-5 block border-2 text-slate-900 shadow-2xl"
      v-model="content"
      name="content"
      id="content-input"
      placeholder="content"
    ></textarea>
    <button class="size- mx-10 bg-red-900" @submit.prevent="postData" type="submit">Submit</button>
  </form>
</template>

<style lang="css" scoped></style>
