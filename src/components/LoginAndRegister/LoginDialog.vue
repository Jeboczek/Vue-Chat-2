<template lang="pug">
div(class="w-100 bg-dark rounded-3 p-4 shadow")
                h1(class="mb-3 text-white") Log in
                form
                    div(class="form-group")
                        label(for="username-form" class="text-white opacity-75") E-mail
                        input(class="form-control" id="username-form")
                        label(for="username-form" class="text-white opacity-75 mt-3") Password
                        input(class="form-control" id="username-form" type="password")
                        input(type="submit" class="btn btn-primary mt-3 mb-2" value="Login")
                router-link(to="/register" class="text-decoration-none") Create new account
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "LoginDialog",
});
</script>
