import { defineStore } from "pinia";
import type ChatRoomInfo from "@/interfaces/chatRoomInfo";
import {
    getDatabase,
    ref,
    onChildAdded,
    onChildChanged,
    onChildRemoved,
} from "firebase/database";

export const useChatRoomStore = defineStore({
    id: "chatRoom",
    state: (): { rooms: ChatRoomInfo[] } => {
        return { rooms: [] };
    },
    getters: {
        getRooms(): ChatRoomInfo[] {
            return this.rooms;
        },
    },
});

// Setup firebase realtime updates
export function attachFirebaseToChatRoomStorage() {
    const db = getDatabase();
    const roomRef = ref(db, "room");

    const chatRoomStore = useChatRoomStore();

    onChildAdded(roomRef, (data) => {
        const dataVal = data.val();
        const newRoomToAdd: ChatRoomInfo = {
            key: data.key!,
            icon: dataVal.icon,
            roomName: dataVal.name,
            color: dataVal.color,
            lastMessage: dataVal.lastMessage ? dataVal.lastMessage : "",
        };
        chatRoomStore.rooms.push(newRoomToAdd);
    });

    onChildRemoved(roomRef, (data) => {
        chatRoomStore.rooms = chatRoomStore.rooms.filter((e: ChatRoomInfo) => {
            return e.key !== data.key;
        });
    });

    onChildChanged(roomRef, (data) => {
        const changedRoom = chatRoomStore.rooms.filter((e: ChatRoomInfo) => {
            return e.key === data.key;
        })[0];
        const { icon, name, color, lastMessage } = data.val();
        changedRoom.icon = icon;
        changedRoom.roomName = name;
        changedRoom.color = color;
        changedRoom.lastMessage = lastMessage;
    });
}
