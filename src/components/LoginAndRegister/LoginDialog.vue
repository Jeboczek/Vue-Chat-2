<template lang="pug">
.w-100.bg-dark.rounded-3.p-4.shadow
    h1.mb-3.text-white Log in
    form(@submit.prevent="login")
        .form-group
            label.text-white.opacity-75(for="email-form") E-mail
            input#email-form.form-control(v-model="email", required)
            label.text-white.opacity-75.mt-3(for="password-form") Password
            input#password-form.form-control(
                type="password",
                v-model="password",
                required
            )
            input.btn.btn-primary.mt-3.mb-2(type="submit", value="Login")
    router-link.text-decoration-none(to="/register") Create new account
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
