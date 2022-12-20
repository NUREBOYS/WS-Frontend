<template>
    <div class="v-add-product">
        <v-admin-modal>
            <div class="v-add-product_title">
                <p>Adding product</p>
            </div>
            <div class="v-add-product_inputs_name-price">
                <div class="">
                    <p>Product name</p>
                    <input type="text" v-model="product.name">
                </div>
                <div class="">
                    <p>Price</p>
                    <input type="text" v-model.number="product.price">
                </div>
            </div>
            <div class="v-add-product_inputs_name-price">
                <div class="">
                    <p>Manufacturer</p>
                    <input type="text" v-model="product.manufacturer">
                </div>
                <div class="">
                    <p>Gender</p>
                    <select v-model="product.gender">
                        <option>unisex</option>
                        <option>female</option>
                        <option>male</option>
                    </select>
                </div>
            </div>
            <div class="v-add-product_inputs_photo">
                <div class="">
                    <p>Material</p>
                    <select v-model="product.material">
                        <option>roseGold</option>
                        <option>gold</option>
                        <option>stainlessSteel </option>
                    </select>
                </div>
            </div>
            <div class="v-add-product_inputs_photo">
                <div class="">
                    <p>Photo URL</p>
                    <input type="text" v-model="product.image">
                </div>
            </div>
            <div class="v-add-product_inputs_photo">
                <div class="">
                    <p>Amount</p>
                    <input type="text" v-model.number="product.amount">
                </div>
            </div>
            <div class="v-add-product_inputs_add-button">
                <button @click="addNewProduct">Add new product</button>
            </div>
        </v-admin-modal>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import {useStore} from 'vuex'
import VAdminModal from '../main/v-admin-modal'

const store = useStore()

const product = ref({
    name: '',
    manufacturer: '',
    price: 0,
    image: '',
    gender: '',
    material: '',
    amount: 0,
})

const addNewProduct = () => {
    store.dispatch('addWatch', product.value)

    for(let field in product.value) {
        if(typeof product.value[field] === 'number' ) {
            product.value[field] = 0
        } else {
            product.value[field] = ''
        }

    }

    alert('Product was added')

    store.dispatch('changeModal', {name: '', status: false})
}

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