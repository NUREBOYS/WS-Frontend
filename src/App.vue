<template>
    <div class="app">
        <v-header />
        <router-view />
        <v-footer />
    </div>
</template>

<script setup>
import {onMounted} from 'vue'
import {useStore} from 'vuex'
import VHeader from './components/header/v-header'
import VFooter from './components/footer/v-footer'

const store = useStore()

onMounted(() => {
    store.dispatch('setUserToken', window.localStorage.getItem('userToken'))
})

</script>

<style>
.app {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
</style>
