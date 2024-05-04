<script setup>
import axios from "axios";
import { ref } from "vue";
// send post request to /api/newPost

const title = ref("");
const content = ref("");

async function postData(event) {
  try {
    let response = await axios.post("http://localhost:3030/api/newpost", {
      title: title.value,
      content: content.value
    });
    event.target.reset();
  } catch (err) {
    console.error(err);
  }
}
</script>

<template>
  <form class="flex flex-col justify-center" @submit.prevent="postData" method="post">
    <input
      class="h-8 rounded text-slate-900 shadow-2xl"
      v-model="title"
      type="text"
      name="title"
      id="title-input"
      size="60"
      placeholder="title"
    />
    <br />
    <textarea
      class="rounded text-slate-900 shadow-2xl"
      v-model="content"
      name="content"
      id="content-input"
      cols="60"
      rows="10"
      placeholder="content"
    ></textarea>
    <button
      class="rounded bg-neutral-800 font-cabin text-white hover:bg-neutral-700"
      @submit.prevent="postData"
      type="submit"
    >
      Publish
    </button>
  </form>
</template>

<style lang="css" scoped></style>
