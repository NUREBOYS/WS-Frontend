<template>
    <div class="v-confirm-details">
        <div class="v-confirm-details_wrapper">
            <div class="v-confirm-details_wrapper_content">
                <div class="v-confirm-details_wrapper_content_text">
                    <div class="v-confirm-details_wrapper_content_text_total-price">
                        <p>Total price: <span class="price">{{ totalPrice }}$</span></p>
                    </div>
                    <div class="v-confirm-details_wrapper_content_text_total-amount">
                        <p>Total amount: <span class="amount">{{ totalAmount }}</span></p>
                    </div>
                </div>
                <div class="v-confirm-details_wrapper_content_confirm-button">
                    <button>Confirm</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {computed} from 'vue'
import {useStore} from 'vuex'

const store = useStore()
const totalPrice = computed(() => {
    const watches = store.getters.getCart
    return watches.reduce((sum, watch) => sum + watch.price, 0)
})
const totalAmount = computed(() => {
    const watches = store.getters.getCart
    return watches.length
})



</script>

<style lang="scss" scoped>
.v-confirm-details {
    height: 100%;
    &_wrapper {
        height: 100%;
        &_content {
            height: 100%;
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            &_text {
                margin: 1rem 0 0 0;
                &_total-price {
                    p {
                        margin: 0;
                        padding: 0;
                        font-weight: 500;
                        font-size: 1rem;
                    }
                    .price {
                        font-weight: 800;
                        color: #363062;
                    }
                }
                &_total-amount {
                    margin: 2rem 0 0 0;
                    p {
                        margin: 0;
                        padding: 0;
                        font-weight: 500;
                        font-size: 1rem;
                    }
                    .amount {
                        font-weight: 800;
                        color: #363062;
                    }
                }
            }
            &_confirm-button {
                button {
                    width: 300px;
                    height: 40px;
                    font-weight: 500;
                    font-size: 1.25rem;
                    font-family: 'Montserrat', sans-serif;
                    display: inline-block;
                    outline: none;
                    border: 2px solid #363062;
                    border-radius: 5px;
                    background: white;
                    color: #363062;
                    &:hover {
                        background: #363062;
                        color: white;
                    }
                }
            }
        }
    }
}
</style>