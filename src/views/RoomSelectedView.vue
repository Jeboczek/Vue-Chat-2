<template lang="pug">
.container-fluid
    .row
        .col-12.col-md-5.col-lg-3.border.border-right.vh-100.d-flex.flex-column
            ChatRoomNav(:selectedRoom="chatRoom")
        .col-12.col-md-7.col-lg-9.d-flex.vh-100.flex-column.align-items-center.justify-content-center
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ChatRoomNav from "@/components/ChatComponents/Nav/ChatRoomNav.vue";
import type ChatRoomInfo from "@/interfaces/chatRoomInfo";
import { useChatRoomStore } from "@/stores/chatRoom";

export default defineComponent({
    components: {
        ChatRoomNav,
    },
    props: {
        chatRoomId: {
            type: String,
            required: true,
        },
    },
    data(): {
        chatRoom: ChatRoomInfo;
    } {
        let chatRoomStore = useChatRoomStore();
        return {
            chatRoom: chatRoomStore.getChatRoomById(this.chatRoomId),
        };
    },
});
</script>
