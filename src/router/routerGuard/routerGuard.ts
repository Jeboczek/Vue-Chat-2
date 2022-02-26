import type { NavigationGuardNext, RouteLocationNormalized } from "vue-router";
import type GuardValidator from "./guardValidator";
import type PageOptions from "./pageOptions";
import { isPageOptions } from "./pageOptions";

export default class RouterGuard {
    public handleRouting(
        to: RouteLocationNormalized,
        from: RouteLocationNormalized,
        next: NavigationGuardNext
    ) {
        let pageMeta = to.meta.pageOptions;
        if (isPageOptions(pageMeta)) {
            let pageOptions: PageOptions = pageMeta;
            for (const validator of pageOptions.guardValidators) {
                let validationStatus = this.handleValidator(
                    to,
                    validator,
                    next
                );
                if (!validationStatus) return;
            }
            next();
        }
    }

    private handleValidator(
        to: RouteLocationNormalized,
        validator: GuardValidator,
        next: NavigationGuardNext
    ): boolean {
        let validatorResponse = validator.validate(to);
        if (!validatorResponse) next({ path: validator.redirectIfNotValid });
        return validatorResponse;
    }
}
