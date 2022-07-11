<template>
    <div class="v-edit-product">
        <div class="v-edit-product_wrapper">
            <div class="v-edit-product_wrapper_content">
                <div
                    class="v-edit-product_wrapper_content_close-button"
                    @click="closeModal"
                >
                    <p>X</p>
                </div>
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script setup>
import {useStore} from 'vuex'

const store = useStore()

const closeModal = () => {
    store.dispatch('changeModal', {name: '', status: false})
}

</script>

<style lang="scss" scoped>
.v-edit-product {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .7);
    position: fixed;
    left: 0;
    top: 0;
    &_wrapper {
        display: flex;
        justify-content: center;
        &_content {
            width: 1200px;
            background: white;
            border: 1px solid black;
            border-radius: 5px;
            margin: 2rem 0 0 0;
            padding: 2rem 0 2rem 0;
            position: relative;
            &_close-button {
                position: absolute;
                right: 0;
                top: 0;
                padding: .5rem;
                p {
                    margin: 0;
                    padding: 0;
                    font-weight: 500;
                    font-size: 1.25rem;
                    transition: .3s all ease;
                    cursor: pointer;
                    &:hover {
                        transform: rotate(90deg);
                    }
                }
            }
        }
    }
}
</style>