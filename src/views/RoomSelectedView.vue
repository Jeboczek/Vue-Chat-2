<template lang="pug">
.container-fluid
    .row
        .col-12.col-md-5.col-lg-3.border-end.vh-100.d-flex.flex-column
            ChatRoomNav
        .col-12.col-md-7.col-lg-9.d-flex.vh-100.flex-column.align-items-center.px-0
            ChatHeading
            Spinner(v-if="loading")
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ChatRoomNav from "@/components/ChatComponents/Nav/ChatRoomNav.vue";
import ChatHeading from "@/components/ChatComponents/Chat/ChatHeading.vue";
import Spinner from "@/components/Spinner.vue";
import type { Store } from "pinia";
import { useChatStore } from "@/stores/chat";

export default defineComponent({
    components: {
        ChatRoomNav,
        ChatHeading,
        Spinner,
    },
    props: {
        id: {
            type: String,
            required: true,
        },
    },
    data(): {
        chatStore: Store;
    } {
        let chatStore = useChatStore();
        return {
            chatStore: chatStore,
        };
    },
    computed: {
        loading() {
            return this.chatStore.messages === undefined;
        },
    },
});
</script>
