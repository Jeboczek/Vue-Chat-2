<template lang="pug">
div(class="container-fluid")
    div(class="row")
        div(class="col-12 col-md-5 col-lg-3 border border-right vh-100 d-flex flex-column")
            ChatRoomNav
        div(class="col-12 col-md-7 col-lg-9 d-flex vh-100 flex-column align-items-center justify-content-center")
            NotSelected
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ChatRoomNav from "@/components/ChatComponents/Nav/ChatRoomNav.vue";
import NotSelected from "@/components/ChatComponents/NotSelected.vue";

export default defineComponent({
    components: {
        ChatRoomNav,
        NotSelected,
    },
});
</script>
