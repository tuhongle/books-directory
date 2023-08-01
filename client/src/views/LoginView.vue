<template>
    <main>
        <section class="d-flex justify-content-center align-items-center px-md-5 px-2 vw-100 vh-100 bg-secondary-subtle">
            <div class="login pages-wrapper text-start bg-white shadow-sm p-4 p-md-5">
                <div class="brand-logo mb-3">
                    <img src="../assets/logo-tu.png" alt="" class="img-fluid" width="200">
                </div>
                <div class="greetings">
                    <p class="lead mb-2">Hello! let's get started</p>
                    <p>Sign in to continue.</p>
                </div>
                <div class="form-wrapper">
                    <form @submit.prevent="onSubmit">
                        <div class="form-group mb-3">
                            <input class="form-control shadow-none ps-4 py-3 rounded-0" type="text" v-model="username" placeholder="Username" @keydown="showMessage = false">
                        </div>
                        <div class="form-group mb-3">
                            <input class="form-control shadow-none ps-4 py-3 rounded-0" type="password" v-model="password" placeholder="Password" @keydown="showMessage = false">
                        </div>
                        <p class="small text-danger" v-if="showMessage">{{ message }}</p>
                        <button class="signin btn btn-primary btn-block px-5 py-3 btn-lg" type="submit">SIGN IN</button>
                        <div class="d-flex align-items-center justify-content-between my-3">
                            <div class="form-check ps-4">
                                <label class="form-check-label text-muted">
                                    <input type="checkbox" class="form-check-input">
                                    Keep me signed in
                                </label>
                            </div>
                            <a href="#" class="text-dark">Forgot password?</a>
                        </div>
                        <button class="facebook btn btn-primary btn-block py-3 px-4 mb-4">
                            <i class="ti-facebook"></i>
                            Connect using facebook
                        </button>
                        <p class="text-center lead">
                            Don't have an account?
                            <RouterLink :to="{name: 'signup'}">Create</RouterLink>
                        </p>
                    </form>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"

const username = ref('')
const password = ref('')
const message = ref('')
const showMessage = ref(false)

const emit = defineEmits(['validated', 'hideBooks'])
const router = useRouter();

emit('hideBooks')

const onSubmit = async () => {
    const data = await fetch('/accounts/login', {
        method: "POST",
        body: JSON.stringify({
            username: username.value,
            password: password.value
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    const result = await data.json()
    if (result.success) {
        emit('validated', [true, result.mail])
        router.push({name: 'home'})
    } else {
        showMessage.value = true
        message.value = result.msg
    }
}
</script>
