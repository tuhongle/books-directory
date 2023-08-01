<template>
    <main>
        <section class="d-flex justify-content-center align-items-center px-md-5 px-2 vw-100 vh-100 bg-secondary-subtle">
            <div class="register pages-wrapper text-start bg-white shadow-sm p-4 p-md-5">
                <div class="brand-logo mb-3">
                    <img src="../assets/logo-tu.png" alt="" class="img-fluid" width="200">
                </div>
                <div class="greetings">
                    <p class="lead mb-2">New here?</p>
                    <p>Signing up is easy. It only takes a few steps</p>
                </div>
                <div class="form-wrapper">
                    <form action="/accounts/sign-up" method="POST" ref="form" @submit.prevent="onSubmit">
                        <div class="form-group mb-3">
                            <input class="form-control shadow-none ps-4 py-2 rounded-0" name="username" type="text" placeholder="Username">
                        </div>
                        <div class="form-group mb-3">
                            <input class="form-control shadow-none ps-4 py-2 rounded-0" name="email" type="email" placeholder="Email">
                        </div>
                        <div class="form-group mb-3">
                            <input class="form-control shadow-none ps-4 py-2 rounded-0" name="country" type="text" placeholder="Country">
                        </div>
                        <div class="form-group mb-3">
                            <input class="form-control shadow-none ps-4 py-2 rounded-0" name="password" type="password" placeholder="Password">
                        </div>
                        <div class="d-flex align-items-center justify-content-between my-3">
                            <div class="form-check ps-4">
                                <label class="form-check-label text-muted">
                                    <input type="checkbox" class="form-check-input" required>
                                    I agree to all Terms & Conditions
                                </label>
                            </div>
                        </div>
                        <button class="signup btn btn-primary btn-block px-4 py-2 mb-4" type="submit">SIGN UP</button>
                        <p class="small text-success" v-if="success">Congratulation! You have registered a new account!</p>
                        <p class="text-center lead">
                            Already have an account?
                            <RouterLink :to="{ name: 'login' }">Login</RouterLink>
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

const emit = defineEmits(['hideBooks'])
const success = ref(false)
const router = useRouter()
const form = ref(null)

emit('hideBooks')

const onSubmit = () => {
    success.value = true
    setTimeout(() => {
        form.value.submit()
    }, 1000)
}
</script>
