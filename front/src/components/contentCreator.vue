<script setup>
import axios from "axios";
import { ref } from "vue";
// send post request to /api/newPost

const title = ref("");
const content = ref("# Hello world!");
const tags = ref([]);

async function postData(event) {
  try {
    let response = await axios.post("http://localhost:3030/api/newpost", {
      title: title.value,
      author: "Zoran Topic",
      content: content.value,
      tags: tags.value
    });
    event.target.reset();
  } catch (err) {
    console.error(err);
  }
}
</script>

<template>
  <div class="flex justify-center">
    <form class="flex w-2/4 flex-col items-center" @submit.prevent="postData" method="post">
      <input
        class="mb-4 h-8 w-full rounded p-2 text-slate-900 shadow-2xl"
        v-model="title"
        type="text"
        name="title"
        id="title-input"
        placeholder="Title"
        required
      />
      <textarea
        class="mb-4 w-full rounded p-2 text-slate-900 shadow-2xl"
        v-model="content"
        name="content"
        id="content-input"
        rows="10"
        placeholder="Content"
        required
      ></textarea>
      <input
        class="mb-4 h-8 w-full rounded p-2 text-slate-900 shadow-2xl"
        v-model="tags"
        type="text"
        name="tags"
        id="tags-input"
        placeholder="Tags"
      />
      <div class="flex-row justify-center">
        <button
          class="mx-2 rounded bg-neutral-800 px-16 py-1 font-cabin text-sm text-white transition duration-300 ease-in-out hover:bg-green-800"
          type="submit"
        >
          Publish
        </button>
        <button
          class="mx-2 rounded bg-neutral-800 px-16 py-1 font-cabin text-sm text-white transition duration-300 ease-in-out hover:bg-red-800"
          type="submit"
        >
          Cancel
        </button>
      </div>
    </form>
  </div>
</template>

<style lang="css" scoped></style>
