<template lang="pug">
p(class="color-primary text-decoration-underline mt-auto text-center" @click="logOut") Logout
</template>

<script lang="ts">
import { useUserStore } from "@/stores/user";
import { defineComponent } from "vue";

export default defineComponent({
    methods: {
        async logOut() {
            let userStorage = useUserStore();
            await userStorage.signOut();
            this.$router.push("/login");
        },
    },
});
</script>

<style lang="scss" scoped>
p {
    cursor: pointer;
}
</style>
