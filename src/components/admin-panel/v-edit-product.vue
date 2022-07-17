<template>
    <div class="v-edit-product">
        <v-admin-modal>
            <div class="v-edit-product_title">
                <p>Edit product</p>
            </div>
            <div class="v-edit-product_inputs">
                <div class="v-edit-product_inputs_find-name">
                    <div class="">
                        <p>Enter product name</p>
                        <input type="text" @input="search($event.target.value)" maxlength="50">
                    </div>
                </div>
            </div>
            <div class="">
                <v-searched-products
                    :watches="watches"
                />
            </div>
            <div class="v-edit-product_inputs_name-price">
                <div class="">
                    <p>New product name</p>
                    <input type="text" v-model="newProduct.name">
                </div>
                <div class="">
                    <p>Price</p>
                    <input type="text" v-model.number="newProduct.price">
                </div>
            </div>
            <div class="v-edit-product_inputs_name-price">
                <div class="">
                    <p>Manufacturer</p>
                    <input type="text" v-model="newProduct.manufacturer">
                </div>
                <div class="">
                    <p>Gender</p>
                    <select v-model="newProduct.gender">
                        <option>na</option>
                        <option>female</option>
                        <option>male</option>
                    </select>
                </div>
            </div>
            <div class="v-edit-product_inputs_photo">
                <div class="">
                    <p>Material</p>
                    <select v-model="newProduct.material">
                        <option>roseGold</option>
                        <option>gold</option>
                        <option>stainlessSteel </option>
                    </select>
                </div>
            </div>
            <div class="v-edit-product_inputs_photo">
                <div class="">
                    <p>Photo URL</p>
                    <input type="text" v-model="newProduct.imageUrl">
                </div>
            </div>
            <div class="v-edit-product_inputs_edit-button">
                <button @click="saveChanges">Save changes</button>
            </div>
        </v-admin-modal>
    </div>
</template>

<script setup>
import {ref, computed} from 'vue'
import {useStore} from 'vuex'
import VAdminModal from '../main/v-admin-modal'
import VSearchedProducts from './v-searched-products'

const store = useStore()

const watches = computed(() => store.getters.getWatches)

const newProduct = ref({
    name: '',
    manufacturer: '',
    price: 0,
    imageUrl: '',
    gender: '',
    material: ''
})

const generatePayload = product => {
    const productValues = {}
    for(let item in product) {
        if(product[item]) {
            productValues[item] = product[item]
        }
    }
    return productValues
}


const search = searchValue => {
    store.dispatch('setSearch', searchValue)
    store.dispatch('getWatches', {})
}

const saveChanges = () => {
    const selectedProductId = store.getters.getSelectedProductId
    store.dispatch('editWatch', {selectedProductId, watch: generatePayload(newProduct.value)})
    alert('Product was changed')
    store.dispatch('changeModal', {name: 'edit-product', status: false})
}

</script>

<style lang="scss" scoped>
.v-edit-product {
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
        &_edit-button {
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