<template>
    <div class="v-cart-item">
        <div class="v-cart-item_wrapper">
            <div class="v-cart-item_wrapper_content">
                <div class="v-cart-item_wrapper_content_image">
                    <img src="../../assets/watch1.png" alt="watch-logo">
                </div>
                <div class="v-cart-item_wrapper_content_title">
                    <p>{{props.watch.manufacturer}}</p>
                </div>
                <div class="v-cart-item_wrapper_content_title">
                    <p>{{props.watch.name}}</p>
                </div>
                <div class="v-cart-item_wrapper_content_title">
                    <p>Material: {{props.watch.material}}</p>
                </div>
                <div class="v-cart-item_wrapper_content_price">
                    <p>{{props.watch.price}}$</p>
                </div>
                <div class="v-cart-item_wrapper_content_delete-button">
                    <button @click="deleteFromCart">Delete</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {useStore} from 'vuex'

const store = useStore()

// eslint-disable-next-line no-undef,no-unused-vars
const props = defineProps({
    watch: {
        type: Object,
        default() {
            return {}
        }
    },
    index: {
        type: Number,
        default: null
    }
})

const deleteFromCart = () => {
    store.dispatch('deleteFromCart', props.index)
}

</script>

<style lang="scss" scoped>
.v-cart-item {
    border-bottom: 1px solid black;
    margin: 2rem 0 0 0;
    padding: 0 3.75rem 0 3.75rem;
    &_wrapper {

        &_content {
            display: flex;
            justify-content: space-between;
            &_image {

            }
            &_title {
                display: flex;
                justify-content: center;
                flex-direction: column;
                p {
                    display: inline-block;
                    font-weight: 500;
                    font-size: 1.25rem
                }
            }
            &_price {
                display: flex;
                justify-content: center;
                flex-direction: column;
                p {
                    display: inline-block;
                    font-weight: 500;
                    font-size: 1.25rem
                }
            }
            &_delete-button {
                display: flex;
                justify-content: center;
                flex-direction: column;
                button {
                    width: 100px;
                    height: 25px;
                    font-weight: 500;
                    font-size: 1rem;
                    font-family: 'Montserrat', sans-serif;
                    display: inline-block;
                    outline: none;
                    border: 1px solid black;
                    border-radius: 5px;
                    background: white;
                    &:hover {
                        background: #363062;
                        color: white
                    }
                }
            }
        }
    }
}
</style>