<template>
    <div class="v-change-password">
        <v-admin-modal>
            <div class="v-change-password_title">
                <p>Edit password</p>
            </div>
            <div class="v-change-password_name-price">
                <div class="qwe">
                    <div class="">
                        <p>New password</p>
                        <input type="password" v-model="newPassword">
                    </div>
                    <div class="">
                        <p>Confirm new password</p>
                        <input type="password" v-model="newPassword2">
                    </div>
                </div>
            </div>
            <div class="v-change-password_add-button">
                <button @click="changePassword">Change password</button>
            </div>
        </v-admin-modal>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import {useStore} from 'vuex'
import VAdminModal from '../main/v-admin-modal'

const store = useStore()

const newPassword = ref('')
const newPassword2 = ref('')

const passwordsIsEqual = () => newPassword.value === newPassword2.value

const changePassword = () => {
    if(passwordsIsEqual()) {
        store.dispatch('changePassword', newPassword.value)
        alert('Your password was changed')
        store.dispatch('changeModal', {name: 'edit-password', status: false})
    } else {
        alert('Passwords not equal')
    }
}
</script>

<style lang="scss" scoped>
.v-change-password {
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
        justify-content: center;
        margin: 1rem 0 0 0;
        .qwe {
            display: flex;
            justify-content: space-evenly;
            flex-direction: column;
        }
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