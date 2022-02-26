import { defineStore } from "pinia";
import type ChatRoomInfo from "@/interfaces/chatRoomInfo";
import type Message from "@/interfaces/message";

export const useChatStore = defineStore({
    id: "ChatStore",
    state: (): { messages: Message[]; selectedRoom?: ChatRoomInfo } => {
        return { messages: [], selectedRoom: undefined };
    },
    actions: {},
});
