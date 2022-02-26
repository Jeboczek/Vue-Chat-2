import type { RouteLocationNormalized } from "vue-router";
import GuardValidator from "../guardValidator";
import { useUserStore } from "@/stores/user";

export default class LoginValidator extends GuardValidator {
    redirectIfNotValid: string = "/login";
    validate(to: RouteLocationNormalized): boolean {
        let userStore = useUserStore();
        return userStore.loggedIn;
    }
}
