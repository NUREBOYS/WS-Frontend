<template>
    <div class="v-searched-products">
        <p>You are select: {{selectedProductName || 'Nothing :)'}}</p>
        <div class="v-searched-products_content">
            <v-searched-products-item
                v-for="watch in props.watches"
                :key="watch._id"
                :watch="watch"
                @selectProduct="selectProduct"
            />
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import VSearchedProductsItem from './v-searched-products-item'

const selectedProductName = ref('')

// eslint-disable-next-line no-undef,no-unused-vars
const props = defineProps({
    watches: {
        type: Array,
        default() {
            return []
        }
    }
})

const selectProduct = selectedProductNameValue => {
    selectedProductName.value = selectedProductNameValue
}

</script>

<style lang="scss" scoped>
.v-searched-products {
    p {
        text-align: center;
    }
    &_content {
        display: flex;
        justify-content: center;
    }
}
</style>