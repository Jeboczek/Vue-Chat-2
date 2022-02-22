import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import IndexView from "../views/IndexView.vue";
import { useUserStore } from "@/stores/user";

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
    ],
});

router.beforeEach((to, from, next) => {
    let userStore = useUserStore();
    if (to.meta.requiresAuth) {
        if (!userStore.loggedIn) {
            next({
                path: "/login",
            });
        }
    }
    if (to.meta.onlyIfNotLoggedIn) {
        if (userStore.loggedIn) {
            next({
                path: "/",
            });
        }
    }
    next();
});

export default router;
