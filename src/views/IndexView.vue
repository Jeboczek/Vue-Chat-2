<template lang="pug">
.container-fluid(v-resize="updateShowContent")
    .row
        .col-12.col-md-5.col-lg-3.border-end.vh-100.d-flex.flex-column
            ChatRoomNav
        .col-12.col-md-7.col-lg-9.d-flex.vh-100.flex-column.align-items-center.justify-content-center(
            v-if="showContent"
        )
            NotSelected(v-if="showContent")
</template>

<script lang="ts">
import { defineComponent } from "vue";

import isInResponsiveMode from "@/lib/isInResponsiveMode/isInResponsiveMode";

import ChatRoomNav from "@/components/ChatComponents/Nav/ChatRoomNav.vue";
import NotSelected from "@/components/ChatComponents/NotSelected.vue";

export default defineComponent({
    components: {
        ChatRoomNav,
        NotSelected,
    },
    data() {
        return {
            showContent: false,
        };
    },
    methods: {
        updateShowContent(): boolean {
            this.showContent = !isInResponsiveMode();
            return this.showContent;
        },
    },
    mounted() {
        this.updateShowContent();
    },
});
</script>
