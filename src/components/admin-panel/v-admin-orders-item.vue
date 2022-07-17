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
                    v-for="(watch, index) in props.order.items"
                    :key="index"
                >
                    - {{watch.manufacturer}} - {{watch.name}}
                </p>
            </div>
        </div>
        <div class="v-admin-orders-item_date">
            <p class="orders-item-text">Order date: {{props.order.createdAt}}</p>
            <p class="orders-item-text" style="margin: 1rem 0 0 0;">First name: {{props.order.initiatorData.firstName}}</p>
            <p class="orders-item-text">Country: {{props.order.deliveryDetails.country}}</p>
            <p class="orders-item-text">City: {{props.order.deliveryDetails.city}}</p>
            <p class="orders-item-text">Street: {{props.order.deliveryDetails.street}}</p>
        </div>
        <div class="v-admin-orders-item_phone-price">
            <p class="orders-item-text">Total price: {{props.order.totalPrice}}$</p>
            <p class="orders-item-text" style="margin: 1rem 0 0 0;">Second name: {{props.order.initiatorData.secondName}}</p>
            <p class="orders-item-text">Gender: {{props.order.gender}}</p>
        </div>
        <div class="v-admin-orders-item_amount-status">
            <div class="v-admin-orders-item_amount-status_amount">
                <p class="orders-item-text">Total amount: {{props.order.items.length}}</p>
                <p class="orders-item-text" style="margin: 1rem 0 0 0;">Phone number: {{props.order.initiatorData.phoneNumber}}</p>
                <p class="orders-item-text">Email: {{props.order.initiatorData.email}}</p>
            </div>
            <div class="v-admin-orders-item_amount-status_status">
                <p class="orders-item-text" style="margin: 1rem 0 0 0;">
                    Order status: <v-order-status :status="props.order.status"/>
                </p>
            </div>
            <div class="v-admin-orders-item_amount-status_change-buttons">
                <button style="margin: 0 .25rem 0 0;" @click="showChangeStatus">Change status</button>
                <button style="margin: 0 0 0 .25rem;" @click="deleteOrder">Delete</button>
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
    store.dispatch('setOrderId', props.order._id)
    store.dispatch('getOrderById', props.order._id)
}

const deleteOrder = () => {
    store.dispatch('deleteOrder', props.order._id)
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
        justify-content: flex-start;
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