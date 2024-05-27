<script setup>
defineProps({
  text: { type: String, required: true }
});
</script>

<template>
  <button class="mx-2 rounded bg-neutral-800 px-16 py-1 font-cabin text-sm text-white">
    {{ text }}
  </button>
</template>

<style lang="css" scoped></style>
