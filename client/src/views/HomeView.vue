<template>
  <Suspense>
    <Home />
    <template #fallback>
      loading...
    </template>
  </Suspense>
</template>

<script setup>
import Home from "../components/Home.vue";
</script>
