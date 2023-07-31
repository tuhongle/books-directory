<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="">
      <RouterLink :to="{ name: 'home'}"></RouterLink>
      <RouterLink :to="{ name: 'post'}"></RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

