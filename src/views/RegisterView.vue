<template lang="pug">
.container-fluid
    .row
        .col-sm-12.col-md-8.col-lg-4.vh-100.justify-content-center.align-items-center.d-flex.mx-auto
            RegisterDialog(@createUser="createUser")
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RegisterDialog from "@/components/LoginAndRegister/RegisterDialog.vue";
import { useUserStore } from "@/stores/user";
import type UserCredentials from "@/interfaces/userCredentials";
import Swal from "sweetalert2";
import Toast from "@/lib/swal-mixins/swal-toast";

export default defineComponent({
    name: "LoginView",
    components: { RegisterDialog },
    methods: {
        async createUser(userCredentials: UserCredentials) {
            let userStore = useUserStore();
            try {
                await userStore.createUser(
                    userCredentials.email,
                    userCredentials.password
                );

                Toast.fire({
                    icon: "success",
                    title: "Created new user.",
                });

                this.$router.push("/");
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
