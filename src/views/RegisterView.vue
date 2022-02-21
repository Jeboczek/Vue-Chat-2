<template lang="pug">
div(class="container-fluid")
    div(class="row")
        div(class="col-sm-12 col-md-8 col-lg-4  vh-100 justify-content-center align-items-center d-flex mx-auto")
            RegisterDialog
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RegisterDialog from "@/components/LoginAndRegister/RegisterDialog.vue";

export default defineComponent({
    name: "LoginView",
    components: { RegisterDialog },
});
</script>
