<template>
    <div class="v-admin-orders">
        <div class="v-admin-orders_wrapper">
            <div class="v-admin-orders_wrapper_content">
                <div class="v-admin-orders_wrapper_content_title">
                    <p>Orders</p>
                </div>
                <div class="v-admin-orders_wrapper_content_filters">
                    <v-filter-orders />
                </div>
                <div class="v-admin-orders_wrapper_content_orders">
                    <p v-if="orders.length === 0">Order list is empty =^_^=</p>
                    <v-admin-orders-item
                        v-for="order in orders"
                        :key="order._id"
                        :order="order"
                    />
                </div>
                <v-order-pagination
                    :totalPages="totalPages"
                />
            </div>
        </div>
        <v-change-order-status
            v-if="isActive.name === 'change-order-status' && isActive.status"
        />
    </div>
</template>

<script setup>
import {computed, onMounted} from 'vue'
import {useStore} from 'vuex'
import VFilterOrders from './v-filter-orders'
import VAdminOrdersItem from './v-admin-orders-item'
import VChangeOrderStatus from './v-change-order-status'
import VOrderPagination from '../main/v-order-pagination'

const store = useStore()

const orders = computed(() => store.getters.getOrders)
let isActive = computed(() => store.getters.getModal)
let totalPages = computed(() => store.getters.getOrderTotalPages)

onMounted(() => {
    store.dispatch('getOrders')
})

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
            &_orders {
                p {
                    font-size: 1.25rem;
                    font-weight: 500;
                    margin: 1rem 0 0 0;
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