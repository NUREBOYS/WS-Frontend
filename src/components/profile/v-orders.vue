<template>
    <div class="v-orders">
        <v-order-item
            v-for="(order, index) in orders"
            :key="index"
            :order="order"
        />
    </div>
</template>

<script setup>
import VOrderItem from './v-order-item'

const orders = [
    {
        orderNumber: 1245,
        watches: [
            'Nautilus 5726A',
            'Aquanaut 5968G',
            'Grand Complication 5470P'
        ],
        date: '13.05.2022',
        price: 23500,
        amount: 3,
        status: 'Pending'
    },
    {
        orderNumber: 1134,
        watches: [
            'Nautilus 5726A',
            'Grand Complication 5470P'
        ],
        date: '12.02.2022',
        price: 27000,
        amount: 2,
        status: 'Done'
    },
    {
        orderNumber: 954,
        watches: [
            'Grand Complication 5320G'
        ],
        date: '15.12.2021',
        price: 8700,
        amount: 1,
        status: 'Declined'
    }
]

</script>

<style lang="scss" scoped>
.v-orders {

}
</style>