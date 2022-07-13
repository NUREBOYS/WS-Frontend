<template>
    <div class="v-catalog-item">
        <div class="v-catalog-item_wrapper">
            <div class="v-catalog-item_wrapper_content">
                <div class="v-catalog-item_wrapper_content_image">
                    <img src="../../assets/watch1.png" alt="watch-logo">
                </div>
                <div class="v-catalog-item_wrapper_content_details">
                    <div class="v-catalog-item_wrapper_content_details_title">
                        <p>{{props.watch.manufacturer}}</p>
                    </div>
                    <div class="v-catalog-item_wrapper_content_details_title">
                        <p>{{props.watch.name}}</p>
                    </div>
                    <div class="v-catalog-item_wrapper_content_details_title">
                        <p>Material: {{props.watch.material}}</p>
                    </div>
                    <div class="v-catalog-item_wrapper_content_details_price">
                        <p>{{props.watch.price}}$</p>
                    </div>
                    <div class="v-catalog-item_wrapper_content_details_buy-button">
                        <button @click="addToCart" :disabled="isAddedToCart">{{ isAddedToCart ? 'Already in cart': 'Add to cart' }}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'
import {useStore} from 'vuex'

let isAddedToCart = ref(false)

const store = useStore()

// eslint-disable-next-line no-undef,no-unused-vars
const props = defineProps({
    watch: {
        type: Object,
        default() {
            return {}
        }
    }
})

const addToCart = () => {
    store.dispatch('addToCart', props.watch)
    isAddedToCart.value = true
}

onMounted(() => {
    const watchesInCart = store.getters.getCart
    watchesInCart.forEach(watch => {
        if(props.watch._id === watch._id) {
            isAddedToCart.value = true
        }
    })
})

</script>

<style lang="scss" scoped>
.v-catalog-item {
    box-shadow: 0 4px 20px rgba(0, 0, 0, .1);
    border-radius: 5px;
    width: 250px;
    margin: 1rem 0 0 0;
    transition: all .05s ease-in;
    padding: 1.5rem 1rem 1.5rem 1rem;
    &:hover {
        box-shadow: 0 4px 20px rgba(0, 0, 0, .3);
    }
    &_wrapper {

        &_content {
            &_image {
                display: flex;
                justify-content: center;
            }
            &_details {
                padding: 0 1rem 0 1rem;
                &_title {
                    margin: 20px 0 0 0;
                    p {
                        margin: 0;
                        padding: 0;
                        font-weight: 500;
                        font-size: .875rem;
                    }
                }
                &_price {
                    margin: 20px 0 0 0;
                    p {
                        margin: 0;
                        padding: 0;
                        font-weight: 800;
                        font-size: .875rem;
                    }
                }
                &_buy-button {
                    margin: 20px 0 0 0;
                    display: flex;
                    justify-content: center;
                    button {
                        font-family: 'Montserrat', sans-serif;
                        font-weight: 500;
                        outline: none;
                        border: 1px solid black;
                        border-radius: 5px;
                        background: white;
                        width: 100%;
                        height: 30px;
                        &:hover {
                            background: #363062;
                            color: white;
                        }
                    }
                }
            }
        }
    }
}
</style>