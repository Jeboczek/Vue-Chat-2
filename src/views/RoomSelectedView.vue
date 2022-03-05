<template lang="pug">
.container-fluid(v-resize="updateShowNav")
    .row
        .col-12.col-md-5.col-lg-3.border-end.vh-100.d-flex.flex-column(
            v-if="showNav"
        )
            ChatRoomNav
        .col-12.col-md-7.col-lg-9.d-flex.vh-100.flex-column.align-items-center.px-0
            ChatHeading
            Spinner(v-if="loading")
            .messages.w-100
                ul.messages__list.px-3
                    Message(
                        v-for="message in chatStore.messages",
                        :key="message.key",
                        :message="message"
                    )
                span.messages__bottom
            MessageSender.message-sender
</template>

<script lang="ts">
import { defineComponent } from "vue";

import isInResponsiveMode from "@/lib/isInResponsiveMode/isInResponsiveMode";

import ChatRoomNav from "@/components/ChatComponents/Nav/ChatRoomNav.vue";
import ChatHeading from "@/components/ChatComponents/Chat/ChatHeading.vue";
import Message from "@/components/ChatComponents/Chat/Message.vue";
import MessageSender from "@/components/ChatComponents/Chat/MessageSender.vue";
import Spinner from "@/components/Spinner.vue";
import type { Store } from "pinia";
import { useChatStore } from "@/stores/chat";

export default defineComponent({
    components: {
        ChatRoomNav,
        ChatHeading,
        Spinner,
        Message,
        MessageSender,
    },
    props: {
        id: {
            type: String,
            required: true,
        },
    },
    methods: {
        updateShowNav(): boolean {
            this.showNav = !isInResponsiveMode();
            return this.showNav;
        },
        scrollToBottom() {
            const messages = document.querySelector("span.messages__bottom")!;
            messages.scrollIntoView({ behavior: "smooth" });
        },
    },
    data(): {
        chatStore: Store;
        showNav: boolean;
    } {
        let chatStore = useChatStore();
        return {
            chatStore: chatStore,
            showNav: false,
        };
    },
    computed: {
        loading() {
            return this.chatStore.messages === undefined;
        },
    },
    updated() {
        this.scrollToBottom();
    },
    mounted() {
        this.updateShowNav();
    },
});
</script>

<style lang="scss" scoped>
.messages {
    height: 100%;
    overflow-y: scroll;
}
</style>
