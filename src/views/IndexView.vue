<template lang="pug">
h1 {{userStore.loggedIn}}
h1 {{userStore.email}}

</template>

<script lang="ts">
import { useUserStore } from "@/stores/user";
import { defineComponent } from "vue";

export default defineComponent({
    data() {
        return {
            userStore: useUserStore(),
        };
    },
});
</script>

<style></style>
