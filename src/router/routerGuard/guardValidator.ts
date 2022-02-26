import type { RouteLocationNormalized } from "vue-router";

export default abstract class GuardValidator {
    redirectIfNotValid: string = "/";
    abstract validate(to: RouteLocationNormalized): boolean;
}
