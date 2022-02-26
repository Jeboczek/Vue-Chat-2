import { createRouter, createWebHistory } from "vue-router";

// Pages
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import IndexView from "../views/IndexView.vue";
import RoomSelectedView from "../views/RoomSelectedView.vue";

// Validators
import LoginValidator from "./routerGuard/guardValidators/loginValidator";
import ActiveChatValidator from "./routerGuard/guardValidators/activeChatValidator";
import NoLoginValidator from "./routerGuard/guardValidators/noLoginValidator";
import RouterGuard from "./routerGuard/routerGuard";

const routerGuard = new RouterGuard();

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "index",
            component: IndexView,
            meta: {
                pageOptions: {
                    guardValidators: [
                        new LoginValidator(),
                        new ActiveChatValidator(),
                    ],
                },
            },
        },
        {
            path: "/login",
            name: "login",
            component: LoginView,
            meta: {
                pageOptions: {
                    guardValidators: [new NoLoginValidator()],
                },
            },
        },
        {
            path: "/register",
            name: "register",
            component: RegisterView,
            meta: {
                pageOptions: {
                    guardValidators: [new NoLoginValidator()],
                },
            },
        },
        {
            path: "/chat/:id",
            name: "chat",
            component: RoomSelectedView,
            props: true,
            meta: {
                pageOptions: {
                    guardValidators: [
                        new LoginValidator(),
                        new ActiveChatValidator(),
                    ],
                },
            },
        },
    ],
});

router.beforeEach((to, from, next) => {
    routerGuard.handleRouting(to, from, next);
});

export default router;
