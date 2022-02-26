import type GuardValidator from "./guardValidator";

export default interface PageOptions {
    guardValidators: GuardValidator[];
}

export function isPageOptions(object: any): object is PageOptions {
    return "guardValidators" in object;
}
