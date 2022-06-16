<template>
    <div class="v-cart">
        <div class="v-cart_wrapper">
            <div class="v-cart_wrapper_content">
                <div class="v-cart_wrapper_content_title">
                    <p>Cart</p>
                </div>
                <div class="v-cart_wrapper_content_cart">
                    <v-cart-item
                        v-for="(watch, index) in watchesInCart"
                        :key="index"
                        :watch="watch"
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
import VCartItem from './v-cart-item'
import VConfirmForm from './v-confirm-form'

const watchesInCart = [
    {
        image: 'cart-watch.png',
        title: 'Grand Complication 5372G',
        price: 100000
    },
    {
        image: 'cart-watch.png',
        title: 'Grand Complication 5372G',
        price: 100000
    },
    {
        image: 'cart-watch.png',
        title: 'Grand Complication 5372G',
        price: 100000
    }
]

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
            }
        }
    }
}
</style>