<template>
    <div class="v-user-info">
        <div class="v-user-info_name-surname">
            <div class="v-user-info_name-surname_name">
                <p class="user-info-text">First name: {{props.user.firstName}}</p>
            </div>
            <div class="v-user-info_name-surname_surname">
                <p class="user-info-text">Second name: {{props.user.secondName}}</p>
            </div>
        </div>
        <div class="v-user-info_email">
            <p class="user-info-text">Email: {{props.user.email}}</p>
        </div>
        <div class="v-user-info_phone-number">
            <p class="user-info-text">Phone number: {{props.user.phoneNumber}}</p>
        </div>
        <div class="v-user-info_gender-orders">
            <div class="v-user-info_gender-orders_gender">
                <p class="user-info-text">Gender: {{props.user.gender}}</p>
            </div>
            <div class="v-user-info_gender-orders_orders">
                <p class="user-info-text">Total amount of orders: {{props.amount.length}}</p>
            </div>
        </div>
        <div class="v-user-info_gender-orders">
            <div class="v-user-info_gender-orders_gender">
                <button @click="showEditPhoneNumber">Edit phone number</button>
            </div>
            <div class="v-user-info_gender-orders_orders">
                <button @click="showEditPassword">Edit password</button>
            </div>
        </div>
        <v-change-phone-number
            v-if="isActive.name === 'edit-phoneNumber' && isActive.status"
        />
        <v-change-password
            v-if="isActive.name === 'edit-password' && isActive.status"
        />
    </div>
</template>

<script setup>
import {computed} from 'vue'
import {useStore} from 'vuex'
import VChangePhoneNumber from './v-change-phone-number'
import VChangePassword from './v-change-password'

const store = useStore()

let isActive = computed(() => store.getters.getModal)

// eslint-disable-next-line no-undef,no-unused-vars
const props = defineProps({
    user: {
        type: Object,
        default() {
            return {}
        }
    },
    amount: {
        type: Array,
        default() {
            return {}
        }
    }
})

const showEditPhoneNumber = () => {
    store.dispatch('changeModal', {name: 'edit-phoneNumber', status: true})
}

const showEditPassword = () => {
    store.dispatch('changeModal', {name: 'edit-password', status: true})
}

</script>

<style lang="scss" scoped>
.v-user-info {
    margin: 1rem 0 0 0;
    border: 1px solid black;
    border-radius: 5px;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    .user-info-text {
        margin: 0;
        padding: 0;
        font-weight: 500;
    }
    &_name-surname {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }
    &_gender-orders {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        margin: 1rem 0 0 0;
        button {
            margin: .5rem 0 0 0;
            width: 150px;
            height: 50px;
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