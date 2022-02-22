<template lang="pug">
div(class="w-100 bg-dark rounded-3 p-4 shadow")
                h1(class="mb-3 text-white") Register
                form(@submit.prevent="createUser")
                    div(class="form-group")
                        label(for="email-form" class="text-white opacity-75") E-mail
                        input(class="form-control" type="email" id="email-form" v-model="email" required)
                        label(for="password-form" class="text-white opacity-75 mt-3") Password
                        input(class="form-control" type="password" id="password-form" v-model="password" required)
                        label(for="repeatedPassword-form" class="text-white opacity-75 mt-3") Repeat password
                        input(class="form-control" type="password" id="repeatedPassword-form" v-model="repeatedPassword" required)
                        input(type="submit" class="btn btn-primary mt-3 mb-2" value="Register")
                router-link(to="/login" class="text-decoration-none") Login to exist account
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
