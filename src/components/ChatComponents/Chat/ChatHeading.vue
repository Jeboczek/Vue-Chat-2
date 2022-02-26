<template lang="pug">
.chat-heading.text-align-left.w-100.p-3.d-flex.align-items-center.border-bottom
    ChatIcon(:chatRoomInfo="chatStore.selectedRoom", :size="2.5")
    h5.m-0.ms-3 {{ chatStore.selectedRoom.roomName }}
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useChatStore } from "@/stores/chat";
import ChatIcon from "@/components/ChatIcon.vue";
import type { Store } from "pinia";

export default defineComponent({
    components: { ChatIcon },
    data(): { chatStore: Store } {
        return {
            chatStore: useChatStore(),
        };
    },
});
</script>
