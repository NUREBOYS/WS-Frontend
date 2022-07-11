<template>
    <div class="v-cart">
        <div class="v-cart_wrapper">
            <div class="v-cart_wrapper_content">
                <div class="v-cart_wrapper_content_title">
                    <p>Cart</p>
                </div>
                <div class="v-cart_wrapper_content_cart">
                    <p v-if="watchesFromCart.length === 0">Your cart is empty =^_^=</p>
                    <v-cart-item
                        v-for="(watch, index) in watchesFromCart"
                        :key="index"
                        :watch="watch"
                        :index="index"
                    />
                </div>
                <div class="v-cart_wrapper_content_confirm">
                    <v-confirm-form />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {computed} from 'vue'
import {useStore} from 'vuex'
import VCartItem from './v-cart-item'
import VConfirmForm from './v-confirm-form'

const store = useStore()

const watchesFromCart = computed(() => store.getters.getCart)

</script>

<style lang="scss" scoped>
.v-cart {
    margin: 2rem 0 2rem 0;
    width: 1200px;
    &_wrapper {

        &_content {

            &_title {
                p {
                    font-size: 2rem;
                    color: #363062;
                    font-weight: 500;
                    margin: 0;
                    padding: 0;
                    text-align: center;
                }
            }
            &_cart {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                p {
                    font-size: 1.25rem;
                    font-weight: 500;
                    margin: 1rem 0 0 0;
                    padding: 0;
                    text-align: center;
                }
            }
        }
    }
}
</style>