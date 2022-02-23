<template lang="pug">
div(:class="['chat-room', 'd-flex', 'flex-row', 'align-items-center', 'gap-3', 'p-2', 'rounded-pill', 'animate__animated', 'animate__slideInLeft', active ? 'active' : '']")
    div(class="rounded rounded-circle chat-icon d-flex align-items-center justify-content-center text-white fs-2" :style='{backgroundColor: chatRoomInfo.color}')
        i(:class="chatRoomInfo.icon")
    div(class="d-flex flex-column")
        p(class="h4 mb-1") {{chatRoomInfo.roomName}}
        p(class="text-muted mb-0") {{chatRoomInfo.lastMessage}} 
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type ChatRoomInfo from "@/interfaces/chatRoomInfo";

export default defineComponent({
    props: {
        chatRoomInfo: {
            type: Object as () => ChatRoomInfo,
            required: true,
        },
        active: {
            type: Boolean,
            required: false,
            default: false,
        },
    },
});
</script>

<style lang="scss" scoped>
$circle-size: 3.7rem;
div.chat-icon {
    height: $circle-size;
    width: $circle-size;
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
