<template>
    <div class="v-admin-orders-item">
        <div class="v-admin-orders-item_number-product-list">
            <div class="v-admin-orders-item_number-product-list_number">
                <p class="orders-item-text">Order number: {{props.order.orderNumber}}</p>
            </div>
            <div class="v-admin-orders-item_number-product-list_product-list">
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
        <div class="v-admin-orders-item_date">
            <p class="orders-item-text">Order date: {{props.order.date}}</p>
            <p class="orders-item-text" style="margin: 1rem 0 0 0;">First name: {{props.order.name}}</p>
            <p class="orders-item-text">Address: {{props.order.address}}</p>
        </div>
        <div class="v-admin-orders-item_phone-price">
            <p class="orders-item-text">Total price: {{props.order.price}}$</p>
            <p class="orders-item-text" style="margin: 1rem 0 0 0;">Second name: {{props.order.surname}}</p>
            <p class="orders-item-text">Gender: {{props.order.gender}}</p>
        </div>
        <div class="v-admin-orders-item_amount-status">
            <div class="v-admin-orders-item_amount-status_amount">
                <p class="orders-item-text">Total amount: {{props.order.amount}}</p>
                <p class="orders-item-text" style="margin: 1rem 0 0 0;">Phone number: {{props.order.phoneNumber}}</p>
                <p class="orders-item-text">Email: {{props.order.email}}</p>
            </div>
            <div class="v-admin-orders-item_amount-status_status">
                <p class="orders-item-text" style="margin: 1rem 0 0 0;">Order status: <v-order-status :status="props.order.status"/></p>
            </div>
            <div class="v-admin-orders-item_amount-status_change-buttons">
                <button style="margin: 0 .25rem 0 0;" @click="showChangeStatus">Change status</button>
                <button style="margin: 0 0 0 .25rem;">Delete</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import {useStore} from 'vuex'
import VOrderStatus from '../main/v-order-status'

const store = useStore()

// eslint-disable-next-line no-undef,no-unused-vars
const props = defineProps({
    order: {
        type: Object,
        default() {
            return {}
        }
    }
})

const showChangeStatus = () => {
    store.dispatch('changeModal', {name: 'change-order-status', status: true})
}

</script>

<style lang="scss" scoped>
.v-admin-orders-item {
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
        &_change-buttons {
            margin: 1rem 0 0 0;
            button {
                font-family: 'Montserrat', sans-serif;
                font-weight: 500;
                outline: none;
                border: 1px solid black;
                border-radius: 5px;
                background: white;
                width: 200px;
                height: 30px;
                &:hover {
                    background: #363062;
                    color: white;
                }
            }
        }
    }
}
</style>