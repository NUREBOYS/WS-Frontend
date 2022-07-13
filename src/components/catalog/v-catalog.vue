<template>
    <div class="v-catalog">
        <div class="v-catalog_wrapper">
            <div class="v-catalog_wrapper_content">
                <div class="v-catalog_wrapper_content_title">
                    <p>Catalog</p>
                </div>
                <div class="v-catalog_wrapper_content_filters">
                    <v-catalog-filter />
                </div>
                <div class="v-catalog_wrapper_content_catalog">
                    <p class="v-catalog_wrapper_content_catalog_product-not-found" v-if="watches.length === 0">Products not found :(</p>
                    <v-catalog-item
                        v-for="watch in watches"
                        :key="watch._id"
                        :watch="watch"
                    />
                </div>
                <v-catalog-pagination
                    :totalPages="totalPages"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import {computed, onMounted} from 'vue'
import {useStore} from 'vuex'
import VCatalogItem from './v-catalog-item'
import VCatalogFilter from './v-catalog-filter'
import VCatalogPagination from './v-catalog-pagination'

const store = useStore()

const watches = computed(() => store.getters.getWatches)
const totalPages = computed(() => store.getters.getTotalPages)

onMounted(() => {
    if(watches.value.length === 0) {
        store.dispatch('getWatches', {})
    }
})

</script>

<style lang="scss" scoped>
.v-catalog {
    margin: 2rem 0 2rem 0;
    width: 1200px;
    &_wrapper {

        &_content {

            &_title {
                margin: 0 0 2rem 0;
                p {
                    font-size: 2rem;
                    color: #363062;
                    font-weight: 500;
                    margin: 0;
                    padding: 0;
                    text-align: center;
                }
            }
            &_catalog {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                &_product-not-found {
                    width: 100%;
                    text-align: center;
                    font-size: 2.5rem;
                }
            }
        }
    }
}
</style>