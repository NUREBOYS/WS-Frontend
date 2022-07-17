<template>
    <div class="v-profile-page">
        <v-profile
            v-if="token"
        />
    </div>
</template>

<script setup>
import {onMounted, ref} from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
import VProfile from '../components/profile/v-profile'

const store = useStore()
const router = useRouter()

const token = ref('')

onMounted(() => {
    store.dispatch('setUserToken', window.localStorage.getItem('userToken'))
    if(store.getters.getUserToken) {
        token.value = store.getters.getUserToken
    } else {
        router.push('/login')
    }
})

</script>

<style lang="scss" scoped>
.v-profile-page {
    display: flex;
    justify-content: center;
}
</style>