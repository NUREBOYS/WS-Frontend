<template>
    <div class="app">
        <v-header />
        <router-view />
        <v-footer />
    </div>
</template>

<script setup>
import VHeader from './components/header/v-header'
import VFooter from './components/footer/v-footer'

</script>

<style>
.app {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}
</style>
