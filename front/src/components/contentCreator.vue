<script setup>
import axios from "axios";
import { ref } from "vue";
// send post request to /api/newPost

const title = ref(null);
const content = ref("# Hello world!");
const tags = ref([]);

async function postData(event) {
  let tagList = tags.value.split(" ");

  try {
    let response = await axios.post("http://localhost:3030/api/posts", {
      title: title.value,
      author: "Zoran Topic",
      content: content.value,
      tags: tagList
    });
    event.target.reset();
  } catch (err) {
    console.error(err);
  }
}

function resetForm(event) {
  title.value = null;
  content.value = null;
  tags.value = null;
}
</script>

<template>
  <div class="flex justify-center">
    <form class="flex w-2/4 flex-col items-center" @submit.prevent="postData" method="post">
      <input
        class="mb-4 h-8 w-full rounded bg-neutral-800 p-2 shadow-2xl"
        v-model="title"
        type="text"
        name="title"
        id="title-input"
        placeholder="Title"
        required
      />
      <textarea
        class="mb-4 w-full rounded bg-neutral-800 p-2 shadow-2xl"
        v-model="content"
        name="content"
        id="content-input"
        rows="10"
        placeholder="Content"
        required
      ></textarea>
      <input
        class="mb-4 h-8 w-full rounded bg-neutral-800 p-2 shadow-2xl focus:border-0"
        v-model="tags"
        type="text"
        name="tags"
        id="tags-input"
        placeholder="Tags split with space"
      />
      <div class="flex-row justify-center">
        <button
          class="mx-2 rounded bg-neutral-800 px-16 py-1 font-cabin text-sm transition duration-300 ease-in-out hover:bg-green-800"
          type="submit"
        >
          Submit
        </button>
        <button
          class="mx-2 rounded bg-neutral-800 px-16 py-1 font-cabin text-sm transition duration-300 ease-in-out hover:bg-red-800"
          type="button"
          @click="resetForm"
        >
          Cancel
        </button>
      </div>
    </form>
  </div>
</template>

<style lang="css" scoped></style>
