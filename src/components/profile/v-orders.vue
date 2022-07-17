<template>
    <div class="v-orders">
        <v-order-item
            v-for="order in props.orders"
            :key="order._id"
            :order="order"
        />
    </div>
</template>

<script setup>
import VOrderItem from './v-order-item'

// eslint-disable-next-line no-undef,no-unused-vars
const props = defineProps({
    orders: {
        type: Array,
        default() {
            return []
        }
    }
})

</script>

<style lang="scss" scoped>
.v-orders {

}
</style>