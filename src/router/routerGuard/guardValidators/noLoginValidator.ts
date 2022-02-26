import type { RouteLocationNormalized } from "vue-router";
import GuardValidator from "../guardValidator";
import { useUserStore } from "@/stores/user";

export default class NoLoginValidator extends GuardValidator {
    validate(to: RouteLocationNormalized): boolean {
        let userStore = useUserStore();
        return !userStore.loggedIn;
    }
}
