<template lang="pug">
.w-100.bg-dark.rounded-3.p-4.shadow
    h1.mb-3.text-white Register
    form(@submit.prevent="createUser")
        .form-group
            label.text-white.opacity-75(for="email-form") E-mail
            input#email-form.form-control(
                type="email",
                v-model="email",
                required
            )
            label.text-white.opacity-75.mt-3(for="password-form") Password
            input#password-form.form-control(
                type="password",
                v-model="password",
                required
            )
            label.text-white.opacity-75.mt-3(for="repeatedPassword-form") Repeat password
            input#repeatedPassword-form.form-control(
                type="password",
                v-model="repeatedPassword",
                required
            )
            input.btn.btn-primary.mt-3.mb-2(type="submit", value="Register")
    router-link.text-decoration-none(to="/login") Login to exist account
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type UserCredentials from "@/interfaces/userCredentials";
import Swal from "sweetalert2";

export default defineComponent({
    name: "RegisterDialog",
    emits: ["createUser"],
    data(): {
        email: string;
        password: string;
        repeatedPassword: string;
    } {
        return {
            email: "",
            password: "",
            repeatedPassword: "",
        };
    },
    methods: {
        createUser() {
            if (this.password !== this.repeatedPassword) {
                Swal.fire(
                    "Form values are invalid",
                    "Passwords are not the same",
                    "error"
                );
            } else {
                const userCredentials: UserCredentials = {
                    email: this.email,
                    password: this.password,
                };
                this.$emit("createUser", userCredentials);
            }
        },
    },
});
</script>
