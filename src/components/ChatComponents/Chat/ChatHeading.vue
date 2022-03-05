<template lang="pug">
.chat-heading.text-align-left.w-100.py-3.px-2.d-flex.justify-content-between.border-bottom(
    v-if="chatStore.selectedRoom !== undefined",
    v-resize="updateShowBackButton"
)
    .chat-heading__left-wrapper.d-flex.align-items-center
        BackButton.me-1(@click="onBackClick", v-if="showBackButton")
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
import BackButton from "@/components/BackButton.vue";
import type { Store } from "pinia";
import Toast from "@/lib/swal-mixins/swal-toast";
import isInResponsiveMode from "@/lib/isInResponsiveMode/isInResponsiveMode";

export default defineComponent({
    components: { ChatIcon, BackButton },
    data(): { chatStore: Store; showBackButton: boolean } {
        return {
            chatStore: useChatStore(),
            showBackButton: false,
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
        onBackClick() {
            this.$router.push("/");
        },
        updateShowBackButton(): boolean {
            this.showBackButton = isInResponsiveMode();
            return this.showBackButton;
        },
    },
    mounted() {
        this.updateShowBackButton();
    },
});
</script>
