<template lang="pug">
div(class="container-fluid")
    div(class="row")
        div(class="col-sm-12 col-md-8 col-lg-4  vh-100 justify-content-center align-items-center d-flex mx-auto")
            RegisterDialog(@createUser="createUser")
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RegisterDialog from "@/components/LoginAndRegister/RegisterDialog.vue";
import { useUserStore } from "@/stores/user";
import type UserRegisterCredentials from "@/interfaces/userRegisterCredentials";
import Swal from "sweetalert2";

export default defineComponent({
    name: "LoginView",
    components: { RegisterDialog },
    methods: {
        async createUser(userCredentials: UserRegisterCredentials) {
            let userStore = useUserStore();
            try {
                await userStore.createUser(
                    userCredentials.email,
                    userCredentials.password
                );
                const Toast = Swal.mixin({
                    toast: true,
                    position: "bottom-end",
                    timer: 3000,
                    timerProgressBar: true,
                });
                Toast.fire({
                    icon: "success",
                    title: "Created new user.",
                });
            } catch (e) {
                console.log(e);
                Swal.fire(
                    "Firebase throwed error.",
                    "Firebase throwed error.",
                    "error"
                );
            }
        },
    },
});
</script>
