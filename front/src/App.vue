<script setup>
import { RouterLink, RouterView } from "vue-router";
import buttonLarge from "./components/buttons/buttonLarge.vue";
</script>

<template>
  <header>
    <nav class="m-10 flex h-8 justify-center font-robotoMono">
      <RouterLink class="m-1" :to="{ name: 'homeRoute' }"
        ><buttonLarge class="hover:bg-neutral-700" text="Home"></buttonLarge
      ></RouterLink>
      <RouterLink class="m-1" :to="{ name: 'aboutRoute' }"
        ><buttonLarge class="hover:bg-neutral-700" text="About"></buttonLarge
      ></RouterLink>
      <RouterLink class="m-1" :to="{ name: 'contentRoute' }"
        ><buttonLarge class="hover:bg-neutral-700" text="Content"></buttonLarge
      ></RouterLink>
      <RouterLink class="m-1" :to="{ name: 'publishRoute' }"
        ><buttonLarge class="hover:bg-neutral-700" text="Publish"></buttonLarge
      ></RouterLink>
    </nav>
  </header>

  <section>
    <RouterView />
  </section>
</template>

<style scoped></style>
