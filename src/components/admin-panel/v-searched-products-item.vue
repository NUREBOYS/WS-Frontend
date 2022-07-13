<template>
    <div
        class="v-searched-products-item"
        @click="() => {
            setSelectedId()
            selectProduct()
        }"
    >
        <p>Name: {{watch.name}}</p>
        <p>Manufacturer: {{watch.manufacturer}}</p>
        <p>Gender: {{watch.gender}}</p>
        <p>Material: {{watch.material}}</p>
        <p>Price: {{watch.price}}</p>
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
    }
})

// eslint-disable-next-line no-undef,no-unused-vars
const emit = defineEmits(['selectProduct'])

const setSelectedId = () => {
    store.dispatch('setSelectedProductId', props.watch._id)
}

const selectProduct = () => {
    emit('selectProduct', props.watch.name)
}

</script>

<style lang="scss" scoped>
.v-searched-products-item {
    border: 1px solid black;
    border-radius: 5px;
    margin: 1rem;
    padding: .5rem;
}
</style>