<template>
  <Suspense>
    <SingleBook :id="id" />
    <template #fallback>
        Loading...
    </template>
  </Suspense>
</template>

<script setup>
import SingleBook from '../components/SingleBook.vue';

const props = defineProps(['id'])
</script>