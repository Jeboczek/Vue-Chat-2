<template lang="pug">
.message-sender__wrapper.w-100
    form.d-flex.align-items-center.flex-row.w-100.p-3(@submit.prevent="onSend")
        input.form-control(
            type="text",
            v-model="messageContent",
            placeholder="Type your message here..."
        )
        button.btn.btn-primary
            | Send
            i.fa-regular.fa-paper-plane
</template>

<script lang="ts">
import { useChatStore } from "@/stores/chat";
import type { Store } from "pinia";
import { defineComponent } from "vue";

export default defineComponent({
    data(): {
        messageContent: string;
        chatStore: Store;
    } {
        return {
            messageContent: "",
            chatStore: useChatStore(),
        };
    },
    methods: {
        onSend() {
            if (this.messageContent) {
                this.chatStore.sendMessage(this.messageContent);
                this.messageContent = "";
            }
        },
    },
});
</script>


<style lang="scss" scoped>
.message-sender__wrapper {
    $border-radius: 50rem;
    form {
        input {
            border-top-left-radius: $border-radius;
            border-bottom-left-radius: $border-radius;
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
        }
        button {
            border-top-right-radius: $border-radius;
            border-bottom-right-radius: $border-radius;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
    }
}
</style>