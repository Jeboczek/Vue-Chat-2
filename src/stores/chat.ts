import { defineStore } from "pinia";
import type ChatRoomInfo from "@/interfaces/chatRoomInfo";
import type Message from "@/interfaces/message";
import {
    getDatabase,
    onChildAdded,
    onChildChanged,
    onChildRemoved,
    ref,
    remove,
    push,
    update,
} from "firebase/database";
import { useUserStore } from "./user";

export const useChatStore = defineStore({
    id: "chat",
    state: (): {
        messages: Message[] | undefined;
        selectedRoom?: ChatRoomInfo;
    } => ({
        messages: [],
        selectedRoom: undefined,
    }),
    actions: {
        setSelectedRoom(selectedRoom: ChatRoomInfo) {
            this.selectedRoom = selectedRoom;
        },
        async deleteSelectedRoom() {
            const db = getDatabase();
            const selectedFBRoom = ref(db, `/room/${this.selectedRoom?.key}`);
            await remove(selectedFBRoom);
            this.selectedRoom = undefined;
        },
        updateLastMessage(lastMessage: string) {
            const { key: roomKey } = this.selectedRoom!;
            const db = getDatabase();
            const roomRef = ref(db, `/room/${roomKey}`);
            update(roomRef, { lastMessage });
        },
        sendMessage(message: string) {
            const userStore = useUserStore();
            const db = getDatabase();
            const { key: roomKey } = this.selectedRoom!;
            const messagesRef = ref(db, `/room/${roomKey}/message/`);
            push(messagesRef, {
                username: userStore.username,
                content: message,
                date: new Date(),
            });

            this.updateLastMessage(message);
        },
        messageExists(key: string): boolean {
            const keysInStore = this.messages?.map((message) => message.key);
            return !!keysInStore?.includes(key);
        },
        addMessage(message: Message) {
            if (!this.messageExists(message.key)) {
                this.messages?.push(message);
            }
        },
    },
    getters: {
        isMyRoom(): boolean {
            let userStore = useUserStore();
            return this.selectedRoom?.createdBy === userStore.user?.uid;
        },
    },
});

// Setup firebase realtime updates
export function attachFirebaseToChatStorage() {
    const chatStore = useChatStore();
    const db = getDatabase();
    const messagesRef = ref(db, `room/${chatStore.selectedRoom?.key}/message`);

    onChildAdded(messagesRef, (data) => {
        const key = data.key!;
        const { content, username, date } = data.val();
        chatStore.addMessage({
            key: key,
            username: username,
            content: content,
            date: date,
        });
    });

    onChildRemoved(messagesRef, (data) => {
        const { key } = data.val();
        chatStore.messages = chatStore.messages!.filter((e: Message) => {
            return e.key !== key;
        });
    });

    onChildChanged(messagesRef, (data) => {
        const { key, content, username, date } = data.val();
        chatStore.messages!.forEach((e: Message) => {
            if (e.key === key) {
                e.content = content;
                e.username = username;
                e.date = date;
            }
        });
    });
}
