<template>
    <div class="v-add-product">
        <v-admin-modal>
            <div class="v-add-product_title">
                <p>Adding product</p>
            </div>
            <div class="v-add-product_inputs_name-price">
                <div class="">
                    <p>Product name</p>
                    <input type="text">
                </div>
                <div class="">
                    <p>Price</p>
                    <input type="text">
                </div>
            </div>
            <div class="v-add-product_inputs_photo">
                <div class="">
                    <p>Photo URL</p>
                    <input type="text">
                </div>
            </div>
            <div class="v-add-product_inputs_add-button">
                <button>Add new product</button>
            </div>
        </v-admin-modal>
    </div>
</template>

<script setup>
import VAdminModal from '../main/v-admin-modal'

</script>

<style lang="scss" scoped>
.v-add-product {
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
        &_name-price {
            display: flex;
            justify-content: space-evenly;
            margin: 1rem 0 0 0;
            p {
                margin: 0;
                padding: 0;
                font-weight: 500;
            }
            input {
                font-family: 'Montserrat', sans-serif;
                font-size: 1.5rem;
                width: 250px;
                height: 30px;
            }
        }
        &_photo {
            display: flex;
            justify-content: center;
            margin: 1rem 0 0 0;
            p {
                margin: 0;
                padding: 0;
                font-weight: 500;
            }
            input {
                font-family: 'Montserrat', sans-serif;
                font-size: 1.5rem;
                width: 600px;
                height: 30px;
            }
        }
        &_add-button {
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