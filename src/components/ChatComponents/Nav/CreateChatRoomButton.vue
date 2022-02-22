<template lang="pug">
button(class="btn btn-primary w-100 fs-4 rounded-pill my-3" @click="onClick")
    span(class="me-2") Create new
    i(class="fa-solid fa-plus")
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    emits: ["click"],
    methods: {
        onClick() {
            this.$emit("click");
        },
    },
});
</script>
