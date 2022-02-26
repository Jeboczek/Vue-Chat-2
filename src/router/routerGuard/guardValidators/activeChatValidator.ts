import { useChatStore } from "@/stores/chat";
import { useChatRoomStore } from "@/stores/chatRoom";
import GuardValidator from "../guardValidator";
import type { RouteLocationNormalized } from "vue-router";

export default class ActiveChatValidator extends GuardValidator {
    validate(to: RouteLocationNormalized): boolean {
        let chatRoomsStore = useChatRoomStore();
        let chatStore = useChatStore();

        let chatId = to.params.id.toString();
        let chatRoom = chatRoomsStore.getChatRoomById(chatId);

        if (chatRoom) {
            chatStore.setSelectedRoom(chatRoom);
            return true;
        }
        return false;
    }
}
