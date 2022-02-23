<template lang="pug">
button(class="btn btn-primary w-100 btn-lg rounded-pill my-3" @click="onClick")
    span(class="me-2") Create new
    i(class="fa-solid fa-plus")
</template>

<script lang="ts">
import swalBootstrapButtons from "@/lib/swal-mixins/swal-bootstrap-buttons";
import { defineComponent } from "vue";
export default defineComponent({
    methods: {
        onClick() {
            swalBootstrapButtons.fire({
                title: "Create new room",
                confirmButtonText: "Create",
                html: `
                <div class="form-group">
                    <label for="room-name">Room name</label>
                    <input type="text" id="room-name" class="form-control"/>
                </div>
                <div class="form-group mt-3">
                    <label for="icon">Select icon</label>
                    <select class="form-control" class="icon">
                        <option selected value="fa-vuejs">Vue</option>
                        <option value="fa-php">Php</option>
                        <option value="fa-js">JavaScript</option>
                        <option value="fa-linux">Linux</option>
                        <option value="fa-python">Python</option>
                    </select>
                </div>
                <div class="form-group mt-3">
                    <label for="color">Select color</label>
                    <select class="form-control" id="color">
                        <option selected value="blue">Blue</option>
                        <option value="violet">Violet</option>
                        <option value="green">Green</option>
                        <option value="black">Black</option>
                    </select>
                </div>
                `,
            });
        },
    },
});
</script>
