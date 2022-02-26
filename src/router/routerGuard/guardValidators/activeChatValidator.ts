import { useChatStore } from "@/stores/chat";
import { useChatRoomStore } from "@/stores/chatRoom";
import GuardValidator from "../guardValidator";
import type { RouteLocationNormalized } from "vue-router";
import { attachFirebaseToChatStorage } from "@/stores/chat";

export default class ActiveChatValidator extends GuardValidator {
    validate(to: RouteLocationNormalized): boolean {
        let chatRoomsStore = useChatRoomStore();
        let chatStore = useChatStore();

        if (to.name == "chat") {
            let chatId = to.params.id.toString();
            let chatRoom = chatRoomsStore.getChatRoomById(chatId);

            if (chatRoom) {
                chatStore.setSelectedRoom(chatRoom);
                chatStore.messages = [];
                attachFirebaseToChatStorage();
                return true;
            }
            return false;
        } else {
            chatStore.selectedRoom = undefined;
            chatStore.messages = undefined;
            return true;
        }
    }
}
