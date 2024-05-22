<script setup>
import { RouterLink, RouterView } from "vue-router";
import buttonOne from "./components/buttons/buttonOne.vue";
</script>

<template>
  <header>
    <nav class="m-10 flex h-8 justify-center font-robotoMono">
      <RouterLink class="m-1" to="/"
        ><buttonOne class="hover:bg-neutral-700" text="Home"></buttonOne
      ></RouterLink>
      <RouterLink class="m-1" to="/about"
        ><buttonOne class="hover:bg-neutral-700" text="About"></buttonOne
      ></RouterLink>
      <RouterLink class="m-1" to="/content"
        ><buttonOne class="hover:bg-neutral-700" text="Content"></buttonOne
      ></RouterLink>
      <RouterLink class="m-1" to="/publish"
        ><buttonOne class="hover:bg-neutral-700" text="Publish"></buttonOne
      ></RouterLink>
    </nav>
  </header>

  <div>
    <RouterView />
  </div>
</template>

<style scoped></style>
