<template lang="pug">
.chat-heading.text-align-left.w-100.p-3.d-flex.justify-content-between.border-bottom(
    v-if="chatStore.selectedRoom !== undefined"
)
    .chat-heading__left-wrapper.d-flex.align-items-center
        ChatIcon(:chatRoomInfo="chatStore.selectedRoom", :size="2.5")
        h5.m-0.ms-3 {{ chatStore.selectedRoom.roomName }}
    .chat-heading__right-wrapper
        button.btn.btn-danger(v-if="chatStore.isMyRoom", @click="deleteRoom")
            i.fa-solid.fa-trash-can.pe-2
            | Delete
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useChatStore } from "@/stores/chat";
import ChatIcon from "@/components/ChatIcon.vue";
import type { Store } from "pinia";
import Toast from "@/lib/swal-mixins/swal-toast";

export default defineComponent({
    components: { ChatIcon },
    data(): { chatStore: Store } {
        return {
            chatStore: useChatStore(),
        };
    },
    methods: {
        async deleteRoom() {
            this.$router.replace("/");
            try {
                await this.chatStore.deleteSelectedRoom();
            } catch (error) {
                Toast.fire({
                    title: "Error occured while deleting room.",
                    icon: "error",
                });
            }
            Toast.fire({
                title: "Room deleted.",
                icon: "success",
            });
        },
    },
});
</script>
