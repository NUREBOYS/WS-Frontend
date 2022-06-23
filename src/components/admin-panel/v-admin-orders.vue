<template>
    <div class="v-admin-orders">
        <div class="v-admin-orders_wrapper">
            <div class="v-admin-orders_wrapper_content">
                <div class="v-admin-orders_wrapper_content_title">
                    <p>Catalog</p>
                </div>
                <div class="v-admin-orders_wrapper_content_filters">
                    <v-filter-orders />
                </div>
                <div class="v-admin-orders_wrapper_content_orders">
                    <v-admin-orders-item
                        v-for="(order, index) in orders"
                        :key="index"
                        :order="order"
                    />
                </div>
            </div>
        </div>
        <v-change-order-status
            v-if="isActive.name === 'change-order-status' && isActive.status"
        />
    </div>
</template>

<script setup>
import {computed} from 'vue'
import {useStore} from 'vuex'
import VFilterOrders from './v-filter-orders'
import VAdminOrdersItem from './v-admin-orders-item'
import VChangeOrderStatus from './v-change-order-status'

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
        status: 'Pending',
        name: 'Sanya',
        surname: 'Britva',
        address: 'Poltava, Tahtik, 62',
        gender: 'man',
        phoneNumber: '+380957657698',
        email: 'nttdy@zebra.com '
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
        status: 'Done',
        name: 'Sanya',
        surname: 'Britva',
        address: 'Poltava, Tahtik, 62',
        gender: 'man',
        phoneNumber: '+380957657698',
        email: 'nttdy@zebra.com '
    },
    {
        orderNumber: 954,
        watches: [
            'Grand Complication 5320G'
        ],
        date: '15.12.2021',
        price: 8700,
        amount: 1,
        status: 'Declined',
        name: 'Sanya',
        surname: 'Britva',
        address: 'Poltava, Tahtik, 62',
        gender: 'man',
        phoneNumber: '+380957657698',
        email: 'nttdy@zebra.com '
    }
]

const store = useStore()

let isActive = computed(() => store.getters.getModal)

</script>

<style lang="scss" scoped>
.v-admin-orders {
    margin: 2rem 0 2rem 0;
    width: 1200px;
    &_wrapper {

        &_content {

            &_title {
                margin: 0 0 2rem 0;
                p {
                    font-size: 2rem;
                    color: #363062;
                    font-weight: 500;
                    margin: 0;
                    padding: 0;
                    text-align: center;
                }
            }
            //&_catalog {
            //    display: flex;
            //    flex-wrap: wrap;
            //    justify-content: space-between;
            //
            //}
        }
    }
}
</style>