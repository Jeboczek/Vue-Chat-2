<template lang="pug">
li.d-flex.align-items-center(:class="isMyMessage ? '--my-message' : ''")
    .message__avatar(
        :style="{ backgroundColor: userColor.color, color: userColor.textColor }",
        v-if="!isMyMessage"
    )
        span.message__avatar__letter {{ message.username[0] }}
    .text-white.px-4.py-2.rounded-pill.my-2.message__content.d-flex.flex-column(
        :style="{ backgroundColor: chatColor }"
    )
        | {{ message.content }}
        span.text-white.opacity-50.message__username {{ message.username }}
</template>

<script lang="ts">
import type Message from "@/interfaces/message";
import AvatarColor from "@/lib/avatarColor/avatarColor";
import { useChatStore } from "@/stores/chat";
import { useUserStore } from "@/stores/user";
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        message: {
            type: Object as () => Message,
            required: true,
        },
    },
    data(): { avatarColorInstance: AvatarColor } {
        return { avatarColorInstance: new AvatarColor({}) };
    },
    computed: {
        userColor() {
            return this.avatarColorInstance.getColorForUsername(
                this.message.username
            );
        },
        chatColor() {
            const chatStore = useChatStore();
            return chatStore.selectedRoom?.color;
        },
        isMyMessage() {
            const userStore = useUserStore();
            return this.message.username === userStore.username;
        },
    },
});
</script>

<style lang="scss" scoped>
li {
    list-style-type: none;

    &.--my-message {
        .message {
            &__content {
                margin-left: auto !important;
                background-color: #0d6efd !important;
            }
            &__username {
                display: none;
            }
        }
    }

    .message {
        &__content {
            margin-right: 0.5rem;
            margin-left: 0.5rem;
            width: fit-content;
        }
        &__username {
            font-size: 0.6rem;
        }
        &__avatar {
            border-radius: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            $avatar-size: 2.5rem;
            width: $avatar-size;
            height: $avatar-size;

            &__letter {
                font-weight: 500;
            }
        }
    }
}
</style>