import { defineStore } from "pinia";
import {
    signInWithEmailAndPassword,
    signOut,
    getAuth,
    createUserWithEmailAndPassword,
} from "firebase/auth";
import type { User, Auth } from "firebase/auth";

// TODO: Set here Firebase types.
interface UserState {
    auth: Auth;
    user: User | null;
}

export const useUserStore = defineStore({
    id: "user",
    state: (): UserState => ({
        auth: getAuth(),
        user: getAuth().currentUser,
    }),
    actions: {
        async loginWithCredentials(email: string, password: string) {
            if (this.user === null) {
                try {
                    let userAuth = await signInWithEmailAndPassword(
                        this.auth,
                        email,
                        password
                    );
                    this.user = userAuth.user;
                    this.auth.updateCurrentUser(this.user);
                } catch (e) {
                    throw e;
                }
            }
        },
        async signOut() {
            if (this.user !== null) {
                try {
                    await signOut(this.auth);
                    this.user = null;
                } catch (e) {
                    throw e;
                }
            }
        },
        async createUser(email: string, password: string) {
            if (this.user === null) {
                try {
                    let userCredentials = await createUserWithEmailAndPassword(
                        this.auth,
                        email,
                        password
                    );
                    this.user = userCredentials.user;
                } catch (e) {
                    throw e;
                }
            }
        },
    },
    getters: {
        loggedIn(): boolean {
            return this.user !== null;
        },
        email(): string {
            console.log(this.user);
            return this.user?.email ? this.user.email : "";
        },
    },
});
