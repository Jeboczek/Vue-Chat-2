import { createApp } from "vue";
import { createPinia } from "pinia";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import "sweetalert2/dist/sweetalert2.min.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBv7DZXblFNT1LWF5ukKQ-AvdVH1__wgUw",
    authDomain: "vue-chat-c04db.firebaseapp.com",
    databaseURL: "https://vue-chat-c04db-default-rtdb.firebaseio.com",
    projectId: "vue-chat-c04db",
    storageBucket: "vue-chat-c04db.appspot.com",
    messagingSenderId: "197907026099",
    appId: "1:197907026099:web:65f2ff88abb9a58e2a60c6",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

import App from "./App.vue";
import router from "./router";
import { useUserStore } from "./stores/user";

(async () => {
    const app = createApp(App);

    app.use(createPinia());
    const { bindUser } = useUserStore();
    await bindUser();

    app.use(router);

    app.mount("#app");
})();
