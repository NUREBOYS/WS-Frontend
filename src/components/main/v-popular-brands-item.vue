<template>
    <div
        class="v-popular-brands-item"
        @click="goToBrand"
    >
        <div class="v-popular-brands-item_content">
            <p>{{props.brand.manufacturer}}</p>
        </div>
    </div>
</template>

<script setup>
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'

const store = useStore()
const router = useRouter()

// eslint-disable-next-line no-undef,no-unused-vars
const props = defineProps({
    brand: {
        type: Object,
        default() {
            return {}
        }
    }
})

const goToBrand = () => {
    store.dispatch('getWatches', {manufacturer: props.brand.manufacturer})
    router.push('/catalog')
}

</script>

<style lang="scss" scoped>
.v-popular-brands-item {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 200px;
    height: 200px;
    border: 1px solid black;
    border-radius: 5px;
    padding: .5rem;
    margin: 1rem;
    &:hover {
        outline: 2px solid #363062;
    }
    &_content {
        p {
            margin: 0;
            padding: 0;
            font-weight: 500;
            font-size: 3rem;
            text-align: center;
            color: #363062
        }
    }
}
</style>