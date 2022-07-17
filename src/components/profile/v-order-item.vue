<template>
    <div class="v-orders-item">
        <div class="v-orders-item_number-product-list">
            <div class="v-orders-item_number-product-list_number">
                <p class="orders-item-text">Order number: {{props.order._id}}</p>
            </div>
            <div class="v-orders-item_number-product-list_product-list">
                <p class="orders-item-text">Products name:</p>
                <p
                    class="orders-item-text"
                    v-for="(watch, index) in props.order.items"
                    :key="index"
                >
                    - {{watch.manufacturer}} - {{watch.name}}
                </p>
            </div>
        </div>
        <div class="v-orders-item_date">
            <p class="orders-item-text">Order date: {{props.order.createdAt}}</p>
        </div>
        <div class="v-orders-item_phone-price">
            <p class="orders-item-text">Total price: {{props.order.totalPrice}}$</p>
        </div>
        <div class="v-orders-item_amount-status">
            <div class="v-orders-item_amount-status_amount">
                <p class="orders-item-text">Total amount: {{props.order.items.length}}</p>
            </div>
            <div class="v-orders-item_amount-status_status">
                <p class="orders-item-text">Order status: <v-order-status :status="props.order.status"/></p>
            </div>
        </div>
    </div>
</template>

<script setup>
import VOrderStatus from '../main/v-order-status'

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
    border-radius: 5px;
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