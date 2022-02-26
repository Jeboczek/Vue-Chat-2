<template lang="pug">
router-link.text-decoration-none.text-black(:to="`/chat/${chatRoomInfo.key}`")
    div(
        :class="['chat-room', 'd-flex', 'flex-row', 'align-items-center', 'gap-3', 'p-2', 'rounded-pill', 'animate__animated', 'animate__slideInLeft', isThisChatRoomActive ? 'active' : '']"
    )
        .rounded.rounded-circle.chat-icon.d-flex.align-items-center.justify-content-center.text-white.fs-2(
            :style="{ backgroundColor: chatRoomInfo.color }"
        )
            i(:class="chatRoomInfo.icon")
        .d-flex.flex-column
            p.h5.mb-1 {{ chatRoomInfo.roomName }}
            p.text-muted.mb-0 {{ chatRoomInfo.lastMessage }}
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useChatStore } from "@/stores/chat";
import type ChatRoomInfo from "@/interfaces/chatRoomInfo";

export default defineComponent({
    props: {
        chatRoomInfo: {
            type: Object as () => ChatRoomInfo,
            required: true,
        },
    },
    computed: {
        isThisChatRoomActive() {
            let chatStore = useChatStore();
            return chatStore.selectedRoom?.key === this.chatRoomInfo.key;
        },
    },
});
</script>

<style lang="scss" scoped>
$circle-size: 3rem;
div.chat-icon {
    height: $circle-size;
    width: $circle-size;

    i {
        font-size: calc($circle-size / 1.5);
    }
}

div.chat-room {
    transition: 0.25s background-color;
    &:hover {
        background-color: transparentize($color: gray, $amount: 0.9);
        cursor: pointer;
        user-select: none;
    }

    &.active {
        background-color: transparentize($color: #0d6efd, $amount: 0.3);
    }
}
</style>
