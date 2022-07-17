<template>
    <div class="v-revoke-password">
        <v-admin-modal>
            <div class="v-revoke-password_title">
                <p>Revoke password</p>
            </div>
            <div class="v-revoke-password_name-price">
                <div class="">
                    <p>Email</p>
                    <input type="text" v-model="email">
                </div>
            </div>
            <div class="v-revoke-password_add-button">
                <button @click="revokePassword">Revoke password</button>
            </div>
        </v-admin-modal>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import {useStore} from 'vuex'
import VAdminModal from '../main/v-admin-modal'

const store = useStore()

const email = ref('')

const revokePassword = () => {
    store.dispatch('revokePassword', email.value)
    alert('Check your email')
    store.dispatch('changeModal', {name: 'revoke-password', status: false})
}

</script>

<style lang="scss" scoped>
.v-revoke-password {
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
</style>