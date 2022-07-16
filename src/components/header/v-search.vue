<template>
    <div class="v-search">
        <div class="v-search_wrapper">
            <div class="v-search_wrapper_content">
                <input
                    type="text"
                    placeholder="Search for watches..."
                    @input="search($event.target.value)"
                    maxlength="50"
                    :disabled="!isCatalog"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import {computed} from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'

const store = useStore()
const router = useRouter()

let isCatalog = computed(() => router.currentRoute.value.name === 'catalog-page')

const search = searchValue => {
    // store.dispatch('setSearchStatus', true)
    store.dispatch('setSearch', searchValue)
    store.dispatch('getWatches', {})
}

</script>

<style lang="scss" scoped>
.v-search {
    display: flex;
    justify-content: center;
    flex-direction: column;
    &_wrapper {
        display: flex;
        justify-content: center;
        &_content {
            input {
                width: 400px;
                border: none;
                outline: none;
                border-bottom: 1px solid black;
                font-family: 'Montserrat', sans-serif;
                font-weight: 500;
                font-size: 1rem;
            }
        }
    }
}
</style>