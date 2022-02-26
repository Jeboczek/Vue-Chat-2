<template lang="pug">
.container-fluid
    .row
        .col-12.col-md-5.col-lg-3.border.border-right.vh-100.d-flex.flex-column
            ChatRoomNav
        .col-12.col-md-7.col-lg-9.d-flex.vh-100.flex-column.align-items-center.justify-content-center
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ChatRoomNav from "@/components/ChatComponents/Nav/ChatRoomNav.vue";
import type ChatRoomInfo from "@/interfaces/chatRoomInfo";
import { useChatRoomStore } from "@/stores/chatRoom";
import type { Store } from "pinia";
import { useChatStore } from "@/stores/chat";

export default defineComponent({
    components: {
        ChatRoomNav,
    },
    props: {
        id: {
            type: String,
            required: true,
        },
    },
    data(): {
        chatRoom: ChatRoomInfo;
        chatStore: Store;
    } {
        let chatRoomStore = useChatRoomStore();
        let chatStore = useChatStore();
        return {
            chatStore: chatStore,
            chatRoom: chatRoomStore.getChatRoomById(this.id),
        };
    },
});
</script>
