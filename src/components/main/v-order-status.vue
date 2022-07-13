<template>
    <p
        class="v-order-status pending"
        v-if="props.status === 'pending'"
    >
        {{props.status}}
    </p>
    <p
        class="v-order-status done"
        v-else-if="props.status === 'approved'"
    >
        {{props.status}}
    </p>
    <p
        class="v-order-status declined"
        v-else
    >
        {{props.status}}
    </p>
</template>

<script setup>

// eslint-disable-next-line no-undef,no-unused-vars
const props = defineProps({
    status: {
        type: String,
        default: ''
    }
})

</script>

<style lang="scss" scoped>
.v-order-status {
    margin: 0;
    font-weight: 700;
    display: inline-block;
    border-radius: 5px;
    padding: .25rem;
}
.pending {
    background: #FFC805;
}
.done {
    background: #27AE60;
}
.declined {
    background: #E74C3C;
}
</style>