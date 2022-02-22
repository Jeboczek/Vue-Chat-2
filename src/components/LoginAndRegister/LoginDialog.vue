<template lang="pug">
div(class="w-100 bg-dark rounded-3 p-4 shadow")
                h1(class="mb-3 text-white") Log in
                form(@submit.prevent="login")
                    div(class="form-group")
                        label(for="email-form" class="text-white opacity-75") E-mail
                        input(class="form-control" id="email-form" v-model="email" required)
                        label(for="password-form" class="text-white opacity-75 mt-3") Password
                        input(class="form-control" id="password-form" type="password" v-model="password" required)
                        input(type="submit" class="btn btn-primary mt-3 mb-2" value="Login")
                router-link(to="/register" class="text-decoration-none") Create new account
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type UserCredentials from "@/interfaces/userCredentials";

export default defineComponent({
    name: "LoginDialog",
    emits: ["login"],
    data(): { email: string; password: string } {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        login() {
            const userCredentials: UserCredentials = {
                email: this.email,
                password: this.password,
            };
            this.$emit("login", userCredentials);
        },
    },
});
</script>
