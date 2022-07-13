<template>
    <div class="v-home-page">
        <v-slider
            :slides="slides"
        />
        <div class="v-home-page_title">
            <p>Popular brands</p>
        </div>
        <div class="v-home-page_popular-brands">
            <v-popular-brands />
        </div>
    </div>
</template>

<script setup>
import VSlider from '../components/main/v-slider'
import VPopularBrands from '../components/main/v-popular-brands'

const slides = [
    'For-him-banner.png',
    'For-her-banner.png',
    'Unisex-banner.png'
]


</script>

<style lang="scss" scoped>
.v-home-page {

    &_title {
        margin: 0 0 2rem 0;
        p {
            font-size: 2rem;
            color: #363062;
            font-weight: 500;
            padding: 0;
            text-align: center;
        }
    }
    &_popular-brands {

    }
}
</style>