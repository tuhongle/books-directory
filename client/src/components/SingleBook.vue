<template>
  <section class="book py-5">
    <div class="container-fluid">
        <div class="row mb-3">
            <div class="col">
                <a href="/">
                    <button class="btn fs-3">
                        <i class="bi bi-chevron-double-left"></i>
                        BACK
                    </button>
                </a>
            </div>
        </div>
        <div class="row">
            <div class="card">
                <img :src="book.thumbnailUrl" class="card-img-top">
                <div class="card-body">
                    <h1 class="card-title">{{ book.title }}</h1>
                    <p class="bold my-4"><span class="small fw-normal">ISBN: </span>{{ book.isbn }} - <span class="small fw-normal">Page Count: </span>{{ book.pageCount }} - <span class="small fw-normal">Status: </span> {{ book.status }} - <span class="small fw-normal">Date: </span><span v-if="book.publishedDate">{{ book.publishedDate.$date.substring(0,10) }}</span></p>
                    <p class="lead lh-base fst-italic" v-if="book.longDescription">{{ book.longDescription }}</p>
                    <p class="lead lh-base fst-italic" v-else>{{ book.shortDescription }}</p>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue"

const props = defineProps(['id'])
const urlEndpoint = `/books/${props.id}`
const book = ref({})

const result = await fetch(urlEndpoint, {
    mode: "no-cors"
})
book.value = await result.json()


</script>