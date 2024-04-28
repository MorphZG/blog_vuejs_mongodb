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
  <form class="" @submit.prevent="postData" method="post">
    <input
      class="m-5 block h-10 rounded border-2 text-slate-900 shadow-2xl"
      v-model="title"
      type="text"
      name="title"
      id="title-input"
      size="60"
      placeholder="title"
    />
    <textarea
      class="m-5 block rounded border-2 text-slate-900 shadow-2xl"
      v-model="content"
      name="content"
      id="content-input"
      cols="60"
      rows="10"
      placeholder="content"
    ></textarea>
    <button
      class="m-5 block rounded bg-neutral-800 px-2 py-1 font-cabin text-white hover:bg-neutral-700"
      @submit.prevent="postData"
      type="submit"
    >
      Submit
    </button>
  </form>
</template>

<style lang="css" scoped></style>
