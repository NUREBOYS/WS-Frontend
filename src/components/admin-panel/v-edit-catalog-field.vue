<template>
    <div class="v-edit-catalog-field">
        <div class="v-edit-catalog-field_title">
            <p>Edit catalog</p>
        </div>
        <div class="v-edit-catalog-field_nav-buttons">
            <button @click="showAddProduct">Add products</button>
            <button @click="showEditProduct">Edit products</button>
            <button @click="showDeleteProduct">Delete products</button>
        </div>
    </div>
</template>

<script setup>
import {useStore} from 'vuex'

const store = useStore()

const showEditProduct = () => {
    store.dispatch('changeModal', {name: 'edit-product', status: true})
}

const showAddProduct = () => {
    store.dispatch('changeModal', {name: 'add-product', status: true})
}

const showDeleteProduct = () => {
    store.dispatch('changeModal', {name: 'delete-product', status: true})
}

</script>

<style lang="scss" scoped>
.v-edit-catalog-field {
    border: 1px solid black;
    border-radius: 5px;
    padding: 1rem 3rem 4rem 3rem;
    margin: 2rem 0 0 0;
    &_title {
        p {
            font-weight: 500;
            font-size: 1.5rem;
            margin: 0;
            padding: 0;
            text-align: center;
        }
    }
    &_nav-buttons {
        display: flex;
        justify-content: space-around;
        margin: 1rem 0 0 0;
        button {
            width: 150px;
            height: 30px;
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
</style>