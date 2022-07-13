<template>
    <div class="v-popular-brands">
        <v-popular-brands-item
            v-for="(brand, index) in popularBrands"
            :key="index"
            :brand="brand"
        />
    </div>
</template>

<script setup>
import {computed, onMounted} from 'vue'
import {useStore} from 'vuex'
import VPopularBrandsItem from './v-popular-brands-item'

const store = useStore()

const popularBrands = computed(() => store.getters.getPopularBrands)

onMounted(() => {
    store.dispatch('getPopularBrands')
})

</script>

<style lang="scss" scoped>
.v-popular-brands {
    display: flex;
    justify-content: center;
}
</style>