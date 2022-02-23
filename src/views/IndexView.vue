<template lang="pug">
div(class="container-fluid")
    div(class="row")
        div(class="col-12 col-md-5 col-lg-3 border border-right vh-100")
            ChatRoomNav

</template>

<script lang="ts">
import { defineComponent } from "vue";

import ChatRoomNav from "@/components/ChatComponents/Nav/ChatRoomNav.vue";

export default defineComponent({
    components: {
        ChatRoomNav,
    },
});
</script>
