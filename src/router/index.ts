import { createRouter, createWebHistory } from "vue-router";
import beforeEach from "./beforeEachFunction";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import IndexView from "../views/IndexView.vue";
import RoomSelectedView from "../views/RoomSelectedView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "index",
            component: IndexView,
            meta: {
                requiresAuth: true,
            },
        },
        {
            path: "/login",
            name: "login",
            component: LoginView,
            meta: {
                onlyIfNotLoggedIn: true,
            },
        },
        {
            path: "/register",
            name: "register",
            component: RegisterView,
            meta: {
                onlyIfNotLoggedIn: true,
            },
        },
        {
            path: "/chat/:id",
            name: "Chat",
            component: RoomSelectedView,
            props: true,
            meta: {
                requiresAuth: true,
            },
        },
    ],
});

router.beforeEach(beforeEach);

export default router;
