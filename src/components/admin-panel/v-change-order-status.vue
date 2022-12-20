<template>
    <div class="v-change-order-status">
        <v-admin-modal>
            <div class="v-change-order-status_title">
                <p>Change status</p>
            </div>
            <div class="v-change-order-status_inputs_edit-buttons">
                <button style="background: #27AE60" @click="approve">Done</button>
                <button style="background: #E74C3C" @click="reject">Decline</button>
            </div>
        </v-admin-modal>
    </div>
</template>

<script setup>
import {ref, onMounted, computed} from 'vue'
import {useStore} from 'vuex'
import VAdminModal from '../main/v-admin-modal'

const store = useStore()

const orderId = ref('')
let currentOrder = computed(() => store.getters.getOrderById)

const approve = () => {
    if(currentOrder.value.status === 'rejected') {
        alert('Status already rejected')
        store.dispatch('changeModal', {name: 'change-order-status', status: false})
        return
    }
    store.dispatch('approveOrder', { orderId: orderId.value, status: 'accepted'})
    store.dispatch('clearOrderId')
    store.dispatch('changeModal', {name: 'change-order-status', status: false})
}

const reject = () => {
    store.dispatch('rejectOrder', { orderId: orderId.value, status: 'rejected'})
    store.dispatch('clearOrderId')
    store.dispatch('changeModal', {name: 'change-order-status', status: false})
}

onMounted(() => {
    orderId.value = store.getters.getOrderId
})

</script>

<style lang="scss" scoped>
.v-change-order-status {
    &_title {
        p {
            font-size: 2rem;
            color: #363062;
            font-weight: 500;
            margin: 0;
            padding: 0;
            text-align: center;
        }
    }
    &_inputs {
        margin: 1rem 0 0 0;
        &_edit-buttons {
            display: flex;
            justify-content: space-around;
            margin: 1rem 0 0 0;
            button {
                width: 200px;
                height: 30px;
                font-weight: 500;
                font-size: 1.25rem;
                font-family: 'Montserrat', sans-serif;
                display: inline-block;
                outline: none;
                border: 2px solid #363062;
                border-radius: 5px;
                background: white;
                color: #363062;
                &:hover {
                    background: #363062;
                    color: white;
                }
            }
        }
    }
}
</style>