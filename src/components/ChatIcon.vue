<template lang="pug">
.rounded.rounded-circle.chat-icon.d-flex.align-items-center.justify-content-center.text-white.fs-2(
    :style="{ backgroundColor: chatRoomInfo.color, width: circleSize, height: circleSize }"
)
    i(:class="chatRoomInfo.icon", :style="{ fontSize: iconSize }")
        .d-flex.flex-column
</template>

<script lang="ts">
import type ChatRoomInfo from "@/interfaces/chatRoomInfo";
import { defineComponent } from "vue";

export default defineComponent({
    props: {
        size: {
            type: Number,
            required: true,
        },
        chatRoomInfo: {
            type: Object as () => ChatRoomInfo,
            required: true,
        },
    },
    computed: {
        circleSize(): string {
            return this.size + "rem";
        },
        iconSize(): string {
            return this.size / 1.5 + "rem";
        },
    },
});
</script>


