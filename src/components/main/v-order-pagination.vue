<template>
    <div class="v-order-pagination">
        <v-catalog-pagination-item
            v-for="(page, index) in totalPages"
            :key="index"
            :page="page"
            :currentPage="currentPage"
        />
    </div>
</template>

<script setup>
import {computed} from 'vue'
import {useStore} from 'vuex'
import VCatalogPaginationItem from './v-order-pagination-item'

const store = useStore()

let currentPage = computed(() => store.getters.getOrderPage)

// eslint-disable-next-line no-undef,no-unused-vars
const props = defineProps({
    totalPages: {
        type: Number,
        default: 0
    }
})

</script>

<style lang="scss" scoped>
.v-order-pagination {
    max-width: 1200px;
    display: flex;
    justify-content: center;
    margin: 3rem 0 0 0;
}
</style>