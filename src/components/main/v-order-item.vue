<template>
    <div class="v-orders-item">
        <div class="v-orders-item_number-product-list">
            <div class="v-orders-item_number-product-list_number">
                <p class="orders-item-text">Order number: {{props.order.orderNumber}}</p>
            </div>
            <div class="v-orders-item_number-product-list_product-list">
                <p class="orders-item-text">Products name:</p>
                <p
                    class="orders-item-text"
                    v-for="(watch, index) in props.order.watches"
                    :key="index"
                >
                    - {{watch}}
                </p>
            </div>
        </div>
        <div class="v-orders-item_date">
            <p class="orders-item-text">Order date: {{props.order.date}}</p>
        </div>
        <div class="v-orders-item_phone-price">
            <p class="orders-item-text">Total price: {{props.order.price}}$</p>
        </div>
        <div class="v-orders-item_amount-status">
            <div class="v-orders-item_amount-status_amount">
                <p class="orders-item-text">Total amount: {{props.order.amount}}</p>
            </div>
            <div class="v-orders-item_amount-status_status">
                <p class="orders-item-text">Order status: <v-order-status :status="props.order.status"/></p>
            </div>
        </div>
    </div>
</template>

<script setup>
import VOrderStatus from './v-order-status'

// eslint-disable-next-line no-undef,no-unused-vars
const props = defineProps({
    order: {
        type: Object,
        default() {
            return {}
        }
    }
})

</script>

<style lang="scss" scoped>
.v-orders-item {
    margin: 1rem 0 0 0;
    border: 1px solid black;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    .orders-item-text {
        margin: 0;
        padding: 0;
        font-weight: 500;
    }
    &_number-product-list {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        &_product-list {
            margin: 1rem 0 0 0;
        }
    }
    &_amount-status {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }
}
</style>