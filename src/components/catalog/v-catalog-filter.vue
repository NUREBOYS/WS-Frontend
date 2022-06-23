<template>
    <div class="v-catalog-filter">
        <div class="v-catalog-filter_content">
            <button
                @click="setFilter('ladies')"
                :style="[filterIsActive.ladies ? 'background: #363062; color: white;' : '']"
            >
                Ladies
            </button>
            <button
                @click="setFilter('men')"
                :style="[filterIsActive.men ? 'background: #363062; color: white;' : '']"
            >
                Men
            </button>
            <button
                @click="setFilter('rose-gold')"
                :style="[filterIsActive['rose-gold'] ? 'background: #363062; color: white;' : '']"
            >
                Rose Gold
            </button>
            <button
                @click="setFilter('gold')"
                :style="[filterIsActive.gold ? 'background: #363062; color: white;' : '']"
            >
                Gold
            </button>
            <button
                @click="setFilter('stainless-steel')"
                :style="[filterIsActive['stainless-steel'] ? 'background: #363062; color: white;' : '']"
            >
                Stainless steel
            </button>
            <button
                @click="setFilter('nautilus')"
                :style="[filterIsActive.nautilus ? 'background: #363062; color: white;' : '']"
            >
                Nautilus
            </button>
            <button
                @click="setFilter('aquanaut')"
                :style="[filterIsActive.aquanaut ? 'background: #363062; color: white;' : '']"
            >
                Aquanaut
            </button>
            <button
                @click="setFilter('grand-complication')"
                :style="[filterIsActive['grand-complication'] ? 'background: #363062; color: white;' : '']"
            >
                Grand Complication
            </button>
            <button
                @click="setFilter('price-up')"
                :style="[filterIsActive['price-up'] ? 'background: #363062; color: white;' : '']"
            >
                Price up
            </button>
            <button
                @click="setFilter('price-down')"
                :style="[filterIsActive['price-down'] ? 'background: #363062; color: white;' : '']"
            >
                Price down
            </button>
        </div>
        <div class="v-catalog-filter_title">
            <p>{{ selectedFilter }}</p>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'

let selectedFilter = ref('All watches')
let currentFilter = ref('')
const filterIsActive = ref({
    ladies: false,
    men: false,
    'rose-gold': false,
    gold: false,
    'stainless-steel': false,
    nautilus: false,
    aquanaut: false,
    'grand-complication': false,
    'price-up': false,
    'price-down': false
})
const filterValues = {
    ladies: 'Ladies',
    men: 'Men',
    'rose-gold': 'Rose gold',
    gold: 'Gold',
    'stainless-steel': 'Stainless steel',
    nautilus: 'Nautilus',
    aquanaut: 'Aquanaut',
    'grand-complication': 'Grand Complication',
    'price-up': 'Price up',
    'price-down': 'Price down'
}

const setFilter = newFilterParam => {
    if(currentFilter.value !== newFilterParam && currentFilter.value) {
        filterIsActive.value[currentFilter.value] = false
    }

    if(filterIsActive.value[newFilterParam]) {
        selectedFilter.value = 'All watches'
        filterIsActive.value[newFilterParam] = false
    } else {
        selectedFilter.value = filterValues[newFilterParam]
        filterIsActive.value[newFilterParam] = true
    }
    currentFilter.value = newFilterParam

}

</script>

<style lang="scss" scoped>
.v-catalog-filter {
    &_content {
        border: 1px solid black;
        border-radius: 5px;
        padding: .75rem 2rem .75rem 2rem;
        display: flex;
        justify-content: space-between;
        button {
            outline: none;
            border: 1px solid black;
            border-radius: 5px;
            background: white;
            font-family: 'Montserrat', sans-serif;
            font-weight: 500;
            &:hover {
                background: #363062;
                color: white
            }
        }
    }
    &_title {
        margin: 2rem 0 0 0;
        p {
            font-size: 2rem;
            color: #363062;
            font-weight: 500;
            text-align: center;
            margin: 0;
            padding: 0;
        }
    }
}
</style>