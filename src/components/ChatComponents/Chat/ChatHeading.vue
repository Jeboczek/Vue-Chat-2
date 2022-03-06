<template lang="pug">
.chat-heading.text-align-left.w-100.py-3.px-2.d-flex.justify-content-between.border-bottom(
    v-if="isRoomSelected",
    v-resize="updateShowBackButton"
)
    .chat-heading__left-wrapper.d-flex.align-items-center
        BackButton.me-1(@click="onBackClick", v-if="showBackButton")
        ChatIcon(:chatRoomInfo="chatStore.getSelectedRoom", :size="2.5")
        h5.m-0.ms-3 {{ chatStore.getSelectedRoom.roomName }}
    .chat-heading__right-wrapper
        button.btn.btn-danger.me-1(
            v-if="chatStore.isMyRoom",
            @click="deleteRoom"
        )
            i.fa-solid.fa-trash-can.pe-2
            | Delete
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useChatStore } from "@/stores/chat";
import ChatIcon from "@/components/ChatIcon.vue";
import BackButton from "@/components/BackButton.vue";
import Toast from "@/lib/swal-mixins/swal-toast";
import isInResponsiveMode from "@/lib/isInResponsiveMode/isInResponsiveMode";

export default defineComponent({
    components: { ChatIcon, BackButton },
    data(): {
        chatStore: ReturnType<typeof useChatStore>;
        showBackButton: boolean;
    } {
        const chatStore = useChatStore();
        return {
            chatStore,
            showBackButton: false,
        };
    },
    computed: {
        isRoomSelected() {
            const selectedRoom = this.$data.chatStore.getSelectedRoom;
            return selectedRoom !== undefined;
        },
    },
    methods: {
        async deleteRoom() {
            this.$router.replace("/");
            try {
                await this.$data.chatStore.deleteSelectedRoom();
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
            this.$data.showBackButton = isInResponsiveMode();
            return this.$data.showBackButton;
        },
    },
    mounted() {
        this.updateShowBackButton();
    },
});
</script>
