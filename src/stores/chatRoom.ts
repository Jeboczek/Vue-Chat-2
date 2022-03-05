import { defineStore } from "pinia";
import type ChatRoomInfo from "@/interfaces/chatRoomInfo";
import {
    getDatabase,
    ref,
    onChildAdded,
    onChildChanged,
    onChildRemoved,
    push,
} from "firebase/database";
import { useUserStore } from "./user";

export const useChatRoomStore = defineStore({
    id: "chatRooms",
    state: (): { rooms: ChatRoomInfo[]; animated: boolean } => {
        return { rooms: [], animated: false };
    },
    getters: {
        getRooms(): ChatRoomInfo[] {
            return this.rooms;
        },
    },
    actions: {
        async addRoom(cr: ChatRoomInfo) {
            let userStore = useUserStore();
            let db = getDatabase();
            let query = await ref(db, "room/");
            const { roomName, color, icon } = cr;
            push(query, {
                name: roomName,
                color: color,
                icon: icon,
                createdBy: userStore.user?.uid,
            });
        },
        getChatRoomById(id: string): ChatRoomInfo {
            return this.rooms.filter((e: ChatRoomInfo) => {
                return e.key === id;
            })[0];
        },
    },
});

// Setup firebase realtime updates
export function attachFirebaseToChatRoomStorage() {
    const db = getDatabase();
    const roomRef = ref(db, "room");

    const chatRoomStore = useChatRoomStore();

    onChildAdded(roomRef, (data) => {
        const key = data.key;
        const { icon, name, color, lastMessage, createdBy } = data.val();
        const newRoomToAdd: ChatRoomInfo = {
            key: key!,
            icon: icon,
            roomName: name,
            color: color,
            lastMessage: lastMessage ? lastMessage : "",
            createdBy: createdBy,
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
        const { icon, name, color, lastMessage, createdBy } = data.val();
        changedRoom.icon = icon;
        changedRoom.roomName = name;
        changedRoom.color = color;
        changedRoom.lastMessage = lastMessage;
        changedRoom.createdBy = createdBy;
    });
}
