import { useUserStore } from "@/stores/user";
import { useChatStore } from "@/stores/chat";
import { useChatRoomStore } from "@/stores/chatRoom";
import type { NavigationGuardNext, RouteLocationNormalized } from "vue-router";

export default function beforeEach(
    from: RouteLocationNormalized,
    to: RouteLocationNormalized,
    next: NavigationGuardNext
) {
    // Check authorization
    let userStore = useUserStore();
    if (from.meta.requiresAuth) {
        if (!userStore.loggedIn) {
            next({
                path: "/login",
            });
            return;
        }
    }
    if (from.meta.onlyIfNotLoggedIn) {
        if (userStore.loggedIn) {
            next({
                path: "/",
            });
            return;
        }
    }
    // Check chat changes
    if (from.name == "Chat") {
        let chatId = from.params.id;
        let chatStore = useChatStore();
        let chatRoomsStore = useChatRoomStore();
        let chatRoom = chatRoomsStore.getChatRoomById(chatId);
        if (chatRoom) {
            chatStore.setSelectedRoom(chatRoom);
            next();
            return;
        } else {
            next({
                path: "/",
            });
            return;
        }
    }
    next();
}
