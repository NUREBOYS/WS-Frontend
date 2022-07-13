<template>
    <div class="v-catalog-pagination">
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
import VCatalogPaginationItem from './v-catalog-pagination-item'

const store = useStore()

let currentPage = computed(() => store.getters.getPage)

// eslint-disable-next-line no-undef,no-unused-vars
const props = defineProps({
    totalPages: {
        type: Number,
        default: 0
    }
})

</script>

<style lang="scss" scoped>
.v-catalog-pagination {
    max-width: 1200px;
    display: flex;
    justify-content: center;
    margin: 3rem 0 0 0;
}
</style>