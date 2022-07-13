<template>
    <div class="v-order-pagination-item">
        <div class="v-order-pagination-item_wrapper">
            <div
                class="v-order-pagination-item_wrapper_content"
                :class="{active: pageIsActive}"
                @click="setPage"
            >
                <div class="v-order-pagination-item_wrapper_content_value">
                    <p>{{props.page}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {computed} from 'vue'
import {useStore} from 'vuex'

const store = useStore()
let pageIsActive = computed(() => props.currentPage === props.page)

// eslint-disable-next-line no-undef,no-unused-vars
const props = defineProps({
    page: {
        type: Number,
        default: 0
    },
    currentPage: {
        type: Number,
        default: 1
    }
})

const setPage = () => {
    store.dispatch('setOrderPage', props.page)
    store.dispatch('getOrders', '')
}

</script>

<style lang="scss" scoped>
.v-order-pagination-item {
    margin: 0 .25rem 0 .25rem;
    cursor: pointer;
    &_wrapper {

        .active {
            background: #363062;
            color: white
        }

        &_content {
            display: flex;
            justify-content: center;
            height: 2rem;
            width: 2.5rem;
            border: 1px solid black;
            border-radius: 5px;

            &_value {
                display: flex;
                justify-content: center;
                flex-direction: column;
                p {
                    margin: 0;
                    padding: 0;

                }
            }
        }
    }
}
</style>