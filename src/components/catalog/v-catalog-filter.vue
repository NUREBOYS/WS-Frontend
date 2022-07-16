<template>
    <div class="v-catalog-filter">
        <div class="v-catalog-filter_content">
            <button
                @click="setGenderFilter('female')"
                :style="[genderFilterIsActive.female ? 'background: #363062; color: white;' : '']"
            >
                Ladies
            </button>
            <button
                @click="setGenderFilter('male')"
                :style="[genderFilterIsActive.male ? 'background: #363062; color: white;' : '']"
            >
                Men
            </button>
            <button
                @click="setMaterialFilter('roseGold')"
                :style="[materialFilterIsActive['roseGold'] ? 'background: #363062; color: white;' : '']"
            >
                Rose Gold
            </button>
            <button
                @click="setMaterialFilter('gold')"
                :style="[materialFilterIsActive.gold ? 'background: #363062; color: white;' : '']"
            >
                Gold
            </button>
            <button
                @click="setMaterialFilter('stainlessSteel')"
                :style="[materialFilterIsActive['stainlessSteel'] ? 'background: #363062; color: white;' : '']"
            >
                Stainless steel
            </button>
            <button
                @click="setBrandFilter('Rolex')"
                :style="[brandFilterIsActive['Rolex'] ? 'background: #363062; color: white;' : '']"
            >
                Rolex
            </button>
            <button
                @click="setBrandFilter('Patek Philippe')"
                :style="[brandFilterIsActive['Patek Philippe'] ? 'background: #363062; color: white;' : '']"
            >
                Patek Philippe
            </button>
            <button
                @click="setBrandFilter('Hublot')"
                :style="[brandFilterIsActive['Hublot'] ? 'background: #363062; color: white;' : '']"
            >
                Hublot
            </button>
            <button
                @click="setBrandFilter('Casio')"
                :style="[brandFilterIsActive['Casio'] ? 'background: #363062; color: white;' : '']"
            >
                Casio
            </button>
            <button
                @click="setBrandFilter('Guardo')"
                :style="[brandFilterIsActive['Guardo'] ? 'background: #363062; color: white;' : '']"
            >
                Guardo
            </button>
            <button
                @click="setPriceFilter('price')"
                :style="[priceFilterIsActive['price'] ? 'background: #363062; color: white;' : '']"
            >
                Price up
            </button>
            <button
                @click="setPriceFilter('-price')"
                :style="[priceFilterIsActive['-price'] ? 'background: #363062; color: white;' : '']"
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
import {ref, onMounted} from 'vue'
import {useStore} from 'vuex'

const store = useStore()

let selectedFilter = ref('All watches')
const currentFilter = {
    gender: '',
    material: '',
    manufacturer: '',
    sort: ''
}
const genderFilterValues = {
    female: 'Ladies',
    male: 'Men',
}
const materialFilterValues = {
    'roseGold': 'Rose gold',
    gold: 'Gold',
    'stainlessSteel': 'Stainless steel',
}
const brandFilterValues = {
    'Rolex': 'Rolex',
    'Patek Philippe': 'Patek Philippe',
    'Hublot': 'Hublot',
    'Casio': 'Casio',
    'Guardo': 'Guardo'
}
const priceFilterValues = {
    'price': 'Price up',
    '-price': 'Price down'
}
const genderFilterIsActive = ref({
    female: false,
    male: false,
})
const materialFilterIsActive = ref({
    'roseGold': false,
    gold: false,
    'stainlessSteel': false,
})
const brandFilterIsActive = ref({
    'Rolex': false,
    'Patek Philippe': false,
    'Hublot': false,
    'Casio': false,
    'Guardo': false
})
const priceFilterIsActive = ref({
    'price': false,
    '-price': false
})

const setGenderFilter = newGenderFilter => {
    if(currentFilter.gender !== newGenderFilter && currentFilter.gender) {
        genderFilterIsActive.value[currentFilter.gender] = false
    }

    if(genderFilterIsActive.value[newGenderFilter]) {
        selectedFilter.value = 'All watches'
        genderFilterIsActive.value[newGenderFilter] = false
        currentFilter.gender = ''
        store.dispatch('setGender', '')
        store.dispatch('getWatches', {})
    } else {
        selectedFilter.value = genderFilterValues[newGenderFilter]
        genderFilterIsActive.value[newGenderFilter] = true
        currentFilter.gender = newGenderFilter
        store.dispatch('setGender', newGenderFilter)
        store.dispatch('getWatches', {})
    }
}

const setMaterialFilter = newMaterialFilter => {
    if(currentFilter.material !== newMaterialFilter && currentFilter.material) {
        materialFilterIsActive.value[currentFilter.material] = false
    }

    if(materialFilterIsActive.value[newMaterialFilter]) {
        selectedFilter.value = 'All watches'
        materialFilterIsActive.value[newMaterialFilter] = false
        currentFilter.material = ''
        store.dispatch('setMaterial', '')
        store.dispatch('getWatches', {})
    } else {
        selectedFilter.value = materialFilterValues[newMaterialFilter]
        materialFilterIsActive.value[newMaterialFilter] = true
        currentFilter.material = newMaterialFilter
        store.dispatch('setMaterial', newMaterialFilter)
        store.dispatch('getWatches', {})
    }
}

const setBrandFilter = newBrandFilter => {
    if(currentFilter.manufacturer !== newBrandFilter && currentFilter.manufacturer) {
        brandFilterIsActive.value[currentFilter.manufacturer] = false
    }

    if(brandFilterIsActive.value[newBrandFilter]) {
        selectedFilter.value = 'All watches'
        brandFilterIsActive.value[newBrandFilter] = false
        currentFilter.manufacturer = ''
        store.dispatch('setManufacturer', '')
        store.dispatch('getWatches', {})
    } else {
        selectedFilter.value = brandFilterValues[newBrandFilter]
        brandFilterIsActive.value[newBrandFilter] = true
        currentFilter.manufacturer = newBrandFilter
        store.dispatch('setManufacturer', newBrandFilter)
        store.dispatch('getWatches', {})
    }
}

const setPriceFilter = newPriceFilter => {
    if(currentFilter.sort !== newPriceFilter && currentFilter.sort) {
        priceFilterIsActive.value[currentFilter.sort] = false
    }

    if(priceFilterIsActive.value[newPriceFilter]) {
        selectedFilter.value = 'All watches'
        priceFilterIsActive.value[newPriceFilter] = false
        currentFilter.sort = ''
        store.dispatch('setSort', '')
        store.dispatch('getWatches', {})
    } else {
        selectedFilter.value = priceFilterValues[newPriceFilter]
        priceFilterIsActive.value[newPriceFilter] = true
        currentFilter.sort = newPriceFilter
        store.dispatch('setSort', newPriceFilter)
        store.dispatch('getWatches', {})
    }
}

onMounted(() => {
    const currentManufacturerFilter = store.getters.getCurrentManufacturerFilter
    for(let item in brandFilterIsActive.value) {
        if(item === currentManufacturerFilter) {
            brandFilterIsActive.value[item] = true
            selectedFilter.value = currentManufacturerFilter
        }
    }
})

</script>

<style lang="scss" scoped>
.v-catalog-filter {
    &_content {
        border: 1px solid black;
        border-radius: 5px;
        padding: .75rem 2rem .75rem 2rem;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
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