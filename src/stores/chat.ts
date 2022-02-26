import { defineStore } from "pinia";
import type ChatRoomInfo from "@/interfaces/chatRoomInfo";
import type Message from "@/interfaces/message";
import {
    getDatabase,
    onChildAdded,
    onChildChanged,
    onChildRemoved,
    ref,
} from "firebase/database";

export const useChatStore = defineStore({
    id: "chat",
    state: (): { messages: Message[]; selectedRoom?: ChatRoomInfo } => ({
        messages: [],
        selectedRoom: undefined,
    }),
    actions: {
        setSelectedRoom(selectedRoom: ChatRoomInfo) {
            this.selectedRoom = selectedRoom;
        },
    },
});
