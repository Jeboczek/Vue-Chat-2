<template lang="pug">
h2(class="text-center mt-3 mb-4") Vue chat
input(type="text" v-model="searchText" class="w-100 border p-3 fs-5 rounded-pill text-muted" placeholder="Search...")
CreateChatRoomButton
hr(class="mx-4 mb-3")
div(class="chat-rooms-list")
    ChatRoom(:chatRoomInfo='{icon: "fab fa-vuejs", color: "green", roomName: "Vue chat", lastMessage: "abcd"}')
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ChatRoom from "./ChatRoom.vue";
import CreateChatRoomButton from "./CreateChatRoomButton.vue";

export default defineComponent({
    components: { ChatRoom, CreateChatRoomButton },
    data() {
        return {
            searchText: "",
        };
    },
});
</script>

<style lang="scss" scoped>
div.chat-rooms-list {
    overflow-y: scroll;
}
</style>
