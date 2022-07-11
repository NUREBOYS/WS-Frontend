<template>
    <div class="v-delete-product">
        <v-admin-modal>
            <div class="v-delete-product_title">
                <p>Delete product</p>
            </div>
            <div class="v-delete-product_inputs">
                <div class="v-delete-product_inputs_find-name">
                    <div class="">
                        <p>Enter product name</p>
                        <input type="text">
                    </div>
                </div>
            </div>
            <div class="v-delete-product_inputs_delete-button">
                <button>Delete product</button>
            </div>
        </v-admin-modal>
    </div>
</template>

<script setup>
import VAdminModal from '../main/v-admin-modal'

</script>

<style lang="scss" scoped>
.v-delete-product {
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
    &_inputs {
        margin: 1rem 0 0 0;
        &_find-name {
            display: flex;
            justify-content: center;
            p {
                margin: 0;
                padding: 0;
                font-weight: 500;
                text-align: center;
            }
            input {
                font-family: 'Montserrat', sans-serif;
                font-size: 1.5rem;
                width: 250px;
                height: 30px;
            }
        }
        &_delete-button {
            display: flex;
            justify-content: center;
            margin: 1rem 0 0 0;
            button {
                width: 600px;
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
</style>