<template lang="pug">
.message-sender--wrapper.d-flex.align-items-center.flex-row.w-100.p-3
    input.form-control(type="text")
    button.btn.btn-primary
        | Send
        i.fa-solid.fa-paper-plane
</template>

<style lang="scss" scoped>
.message-sender--wrapper {
    $border-radius: 50rem;
    input {
        border-top-left-radius: $border-radius;
        border-bottom-left-radius: $border-radius;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
    button {
        border-top-right-radius: $border-radius;
        border-bottom-right-radius: $border-radius;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
}
</style>