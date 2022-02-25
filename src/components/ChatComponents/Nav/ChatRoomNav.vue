<template lang="pug">
h2.text-center.mt-3.mb-4 Vue chat
input.w-100.border.px-4.py-2.fs-5.rounded-pill.text-muted(
    type="text",
    v-model="searchText",
    placeholder="Search..."
)
CreateChatRoomButton
hr.mx-4.mb-3
.chat-rooms-list
    ChatRoom(
        v-for="chatRoomInfo in getRooms",
        :chatRoomInfo="chatRoomInfo",
        :id="chatRoomInfo.key"
    )
LogoutButton
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ChatRoom from "./ChatRoom.vue";
import CreateChatRoomButton from "./CreateChatRoomButton.vue";
import LogoutButton from "./LogoutButton.vue";
import { useChatRoomStore } from "@/stores/chatRoom";
import type ChatRoomInfo from "@/interfaces/chatRoomInfo";

export default defineComponent({
    components: { ChatRoom, CreateChatRoomButton, LogoutButton },
    data() {
        return {
            searchText: "",
            chatRoomStore: useChatRoomStore(),
        };
    },
    computed: {
        getRooms(): ChatRoomInfo[] {
            return this.$data.chatRoomStore.getRooms.filter((e: ChatRoomInfo) =>
                e.roomName
                    .toLowerCase()
                    .includes(this.$data.searchText.toLowerCase())
            );
        },
    },
});
</script>

<style lang="scss" scoped>
div.chat-rooms-list {
    overflow-y: scroll;
}
</style>
