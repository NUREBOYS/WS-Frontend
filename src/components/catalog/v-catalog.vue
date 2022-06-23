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
                    <v-catalog-item
                        v-for="(watch, index) in watches"
                        :key="index"
                        :watch="watch"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {computed} from 'vue'
import {useStore} from 'vuex'
import VCatalogItem from './v-catalog-item'
import VCatalogFilter from './v-catalog-filter'

const store = useStore()

const watches = computed(() => store.getters.getWatches)

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

            }
        }
    }
}
</style>