<template lang="pug">
.container-fluid
    .row
        .col-12.col-md-5.col-lg-3.border-end.vh-100.d-flex.flex-column
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
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ChatRoomNav from "@/components/ChatComponents/Nav/ChatRoomNav.vue";
import ChatHeading from "@/components/ChatComponents/Chat/ChatHeading.vue";
import Message from "@/components/ChatComponents/Chat/Message.vue";
import Spinner from "@/components/Spinner.vue";
import type { Store } from "pinia";
import { useChatStore } from "@/stores/chat";

export default defineComponent({
    components: {
        ChatRoomNav,
        ChatHeading,
        Spinner,
        Message,
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

<style lang="scss" scoped>
.messages {
    height: 100%;
    overflow-y: scroll;
}
</style>
