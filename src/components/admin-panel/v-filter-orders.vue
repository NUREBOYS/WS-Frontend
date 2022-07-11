<template>
    <div class="v-filter-orders">
        <div class="v-filter-orders_content">
            <button
                @click="setFilter('done')"
                :style="[filterIsActive.done ? 'background: #363062; color: white;' : '']"
            >
                Done
            </button>
            <button
                @click="setFilter('pending')"
                :style="[filterIsActive.pending ? 'background: #363062; color: white;' : '']"
            >
                Pending
            </button>
            <button
                @click="setFilter('declined')"
                :style="[filterIsActive.declined ? 'background: #363062; color: white;' : '']"
            >
                Declined
            </button>
        </div>
        <div class="v-filter-orders_title">
            <p>{{ selectedFilter }}</p>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'

let selectedFilter = ref('All')
let currentFilter = ref('')
const filterIsActive = ref({
    done: false,
    pending: false,
    declined: false,
})
const filterValues = {
    done: 'Done',
    pending: 'Pending',
    declined: 'Declined',
}

const setFilter = newFilterParam => {
    if(currentFilter.value !== newFilterParam && currentFilter.value) {
        filterIsActive.value[currentFilter.value] = false
    }

    if(filterIsActive.value[newFilterParam]) {
        selectedFilter.value = 'All'
        filterIsActive.value[newFilterParam] = false
    } else {
        selectedFilter.value = filterValues[newFilterParam]
        filterIsActive.value[newFilterParam] = true
    }
    currentFilter.value = newFilterParam

}
</script>

<style lang="scss" scoped>
.v-filter-orders {
    &_content {
        border: 1px solid black;
        border-radius: 5px;
        padding: .75rem 2rem .75rem 2rem;
        display: flex;
        justify-content: space-evenly;
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