<template>
    <div class="v-filter-orders">
        <div class="v-filter-orders_content">
            <button
                @click="setFilter('approved')"
                :style="[filterIsActive.approved ? 'background: #363062; color: white;' : '']"
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
                @click="setFilter('rejected')"
                :style="[filterIsActive.rejected ? 'background: #363062; color: white;' : '']"
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
import {useStore} from 'vuex'

const store = useStore()

let selectedFilter = ref('All')
let currentFilter = ''
const filterIsActive = ref({
    approved: false,
    pending: false,
    rejected: false,
})
const filterValues = {
    approved: 'Done',
    pending: 'Pending',
    rejected: 'Declined',
}

const setFilter = newFilterParam => {
    if(currentFilter !== newFilterParam && currentFilter) {
        filterIsActive.value[currentFilter] = false
    }

    if(filterIsActive.value[newFilterParam]) {
        selectedFilter.value = 'All'
        filterIsActive.value[newFilterParam] = false
        currentFilter = ''
        store.dispatch('getOrders', currentFilter)
    } else {
        selectedFilter.value = filterValues[newFilterParam]
        filterIsActive.value[newFilterParam] = true
        currentFilter = newFilterParam
        store.dispatch('getOrders', currentFilter)
    }

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