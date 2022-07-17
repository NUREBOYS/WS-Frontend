<template>
    <div class="v-admin-orders-page">
        <v-admin-orders
            v-if="token"
        />
    </div>
</template>

<script setup>
import {onMounted, ref} from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
import VAdminOrders from '../components/admin-panel/v-admin-orders'

const store = useStore()
const router = useRouter()

const token = ref('')

onMounted( () => {
    store.dispatch('setUserToken', window.localStorage.getItem('userToken'))
    switch(window.localStorage.getItem('isAdmin')){
        case 'true':
            store.dispatch('setIsAdmin', true)
            break
        case 'false':
            store.dispatch('setIsAdmin', false)
            break
        default:
            store.dispatch('setIsAdmin', false)
            break
    }
    if(store.getters.getUserToken && store.getters.isAdmin) {
        token.value = store.getters.getUserToken
    } else {
        router.push('/login')
    }
})

</script>

<style lang="scss" scoped>
.v-admin-orders-page {
    display: flex;
    justify-content: center;
}
</style>