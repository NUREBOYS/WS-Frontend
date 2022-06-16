<template>
    <div class="v-home-page">
        <v-slider
            :slides="slides"
        />
    </div>
</template>

<script setup>
import VSlider from '../components/main/v-slider'

const slides = [
    'For-him-banner.png',
    'For-her-banner.png',
    'Unisex-banner.png'
]


</script>

<style lang="scss" scoped>
.v-home-page {

}
</style>