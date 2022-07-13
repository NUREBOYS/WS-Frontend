<template>
    <div class="v-slider">
        <div class="v-slider_wrapper">
            <Carousel :autoplay="10000" :wrap-around="true">
                <Slide v-for="(slide, index) in props.slides" :key="index">
                    <img :src="require(`../../assets/${slide}`)" alt="slide-item">
                </Slide>

<!--                <template #addons>-->
<!--                    <Pagination />-->
<!--                </template>-->
            </Carousel>
        </div>
    </div>
</template>

<script setup>
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

// eslint-disable-next-line no-undef,no-unused-vars
const props = defineProps({
    slides: {
        type: Array,
        default() {
            return []
        }
    }
})

</script>

<style lang="scss" scoped>
.v-slider {
    margin: 2rem 0 0 0;
    &_item {
        width: 1680px;
        height: 550px;
    }
}
</style>