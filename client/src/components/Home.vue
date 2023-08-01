<template>
    <main>
        <nav class="navbar navbar-expand-lg bg-light shadow py-3">
            <div class="container-fluid">
                <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSearch">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <a href="/" class="navbar-brand fw-bold">FIROCT BOOK</a>
                <div class="collapse navbar-collapse justify-content-end" id="navbarSearch">
                    <form action="" class="d-flex mt-3 mt-lg-0 px-3 w-100" role="search">
                    <div class="input-group">
                        <input type="text" class="form-control bg-transparent shadow-none" placeholder="Find your next book to read..." v-model="searchBook">
                        <button class="btn btn-warning text-light" type="submit">Search</button>
                    </div>
                    </form>
                    <div v-if="!isValidated" class="d-flex px-3 mt-3 mt-lg-0">
                        <button class="btn btn-primary px-5 me-3"><RouterLink :to="{name: 'signup'}" class="text-light text-decoration-none text-nowrap">Sign Up</RouterLink></button>
                        <button class="btn btn-success px-5 me-3"><RouterLink :to="{name: 'login'}" class="text-light text-decoration-none text-nowrap">Login</RouterLink></button>
                    </div>
                    <div v-if="isValidated" class="d-flex px-3 mt-3 mt-lg-0 align-items-center">
                        <p class="lead text-nowrap mb-0">Hi, <a href="#" class="">{{ accountEmail }}</a></p>
                    </div>
                </div>
            </div>
        </nav>
        <section class="books py-5" v-if="showBooks">
            <div class="container-fluid">
                <div class="row justify-content-end">
                    <div class="col-lg-2 col-md-4 col-8 col-sm-6">
                        <select name="" id="" class="form-select">
                            <option selected>Sort By...</option>
                            <option value="">Name: A -> Z</option>
                            <option value="">Name: Z -> A</option>
                            <option value="">Newest Public</option>
                        </select>
                    </div>
                </div>
                <div class="row row-cols-2 row-cols-md-3 row-cols-lg-5 mt-4">
                    <div class="col mb-4" v-for="book in books" :key="book._id">
                        <div class="card rounded rounded-3 shadow-sm overflow-hidden border-1 border-secondary h-100">
                            <RouterLink :to="{ name: 'SingleBook', params: { id : book._id }}" class="h-100">
                           
                                <img :src="book.thumbnailUrl" class="img-fluid w-100 h-100">
                            </RouterLink>
                            <div class="card-body position-absolute bg-dark opacity-75 bottom-0 text-light w-100">
                                <p class="fw-bold">{{ book.title }}</p>
                                <p class="mb-0">By <span class="small me-2" v-for="author in book.authors">{{ author }}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <RouterView @validated="validated" @hideBooks="hideBooks"></RouterView>
</template>

<script setup>
import { ref } from "vue";

const books = ref([]);
const searchBook = ref('');

const urlEndpoint = '/books'
const result = await fetch(urlEndpoint, {
  mode: "no-cors"
})
books.value = await result.json()

const isValidated = ref(false)
const accountEmail = ref('')
const showBooks = ref(true)

const hideBooks = () => {
    showBooks.value = false;
}

const validated = (data) => {
    isValidated.value = data[0];
    accountEmail.value = data[1];
    showBooks.value = true;
}

</script>