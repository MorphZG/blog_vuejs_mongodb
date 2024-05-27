<script setup>
import { RouterLink, RouterView } from "vue-router";
import buttonLarge from "./components/buttons/buttonLarge.vue";
</script>

<template>
  <header>
    <nav class="m-10 flex h-8 justify-center font-robotoMono">
      <RouterLink class="m-1" to="/"
        ><buttonLarge class="hover:bg-neutral-700" text="Home"></buttonLarge
      ></RouterLink>
      <RouterLink class="m-1" to="/about"
        ><buttonLarge class="hover:bg-neutral-700" text="About"></buttonLarge
      ></RouterLink>
      <RouterLink class="m-1" to="/content"
        ><buttonLarge class="hover:bg-neutral-700" text="Content"></buttonLarge
      ></RouterLink>
      <RouterLink class="m-1" to="/publish"
        ><buttonLarge class="hover:bg-neutral-700" text="Publish"></buttonLarge
      ></RouterLink>
    </nav>
  </header>

  <div>
    <RouterView />
  </div>
</template>

<style scoped></style>
