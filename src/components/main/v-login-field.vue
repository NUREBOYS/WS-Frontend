<template>
    <div class="v-login-field">
        <div class="v-login-field_wrapper">
            <div class="v-login-field_wrapper_content">
                <div class="v-login-field_wrapper_content_title">
                    <p>Login</p>
                </div>
                <div class="v-login-field_wrapper_content_description">
                    <p>Already registered in our shop?</p>
                    <p>Enter your details below to access your account.</p>
                </div>
                <div class="v-login-field_wrapper_content_inputs">
                    <div class="v-login-field_wrapper_content_inputs_content">
                        <div class="v-login-field_wrapper_content_inputs_content_email">
                            <p>Email</p>
                            <input type="text" placeholder="ders123@test.com" v-model="credentials.email">
                        </div>
                        <div class="v-register-field_wrapper_content_inputs_content_password">
                            <p>Password</p>
                            <input type="password" placeholder="7ders" v-model="credentials.password">
                        </div>
                    </div>
                </div>
                <div class="v-login-field_wrapper_content_login-submit">
                    <div class="v-login-field_wrapper_content_login-submit_button">
                        <p @click="showRevokePassword">Forgot Password ?</p>
                        <button @click="login">Login</button>
                    </div>
                </div>
                <div class="v-login-field_wrapper_content_description">
                    <p>Not registered in out shop yes?</p>
                    <p>Do it for more comfortable usage.</p>
                </div>
                <div class="v-login-field_wrapper_content_login-submit">
                    <div class="v-login-field_wrapper_content_login-submit_button">
                        <button @click="pushToRegister">Register</button>
                    </div>
                </div>
            </div>
        </div>
        <v-revoke-password
            v-if="isActive.name === 'revoke-password' && isActive.status"
        />
    </div>
</template>

<script setup>
import {ref, computed} from 'vue'
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
import VRevokePassword from './v-revoke-password'

const store = useStore()
const router = useRouter()

let isActive = computed(() => store.getters.getModal)

const credentials = ref({
    email: '',
    password: ''
})

const validateEmail = email => {
    const regEx = /\S+@\S+\.\S+/
    return regEx.test(email)
}
const validatePassword = email => {
    const regEx = /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
    return regEx.test(email)
}

const login = async () => {
    try {
        if(validateEmail(credentials.value.email) && validatePassword(credentials.value.password)) {
            await store.dispatch('login', credentials.value)
            await router.push('/profile')
        } else {
            alert('Wrong email or password')
        }
    } catch(err) {
        console.log(err)
    }
}

const showRevokePassword = () => {
    store.dispatch('changeModal', {name: 'revoke-password', status: true})
}

const pushToRegister = () => {
    router.push('/register')
}

</script>

<style lang="scss" scoped>
.v-login-field {
    border: 1px solid black;
    border-radius: 5px;
    width: 620px;
    margin: 2rem 0 2rem 0;
    &_wrapper {
        padding: 1.75rem;
        &_content {

            &_title {

                p {
                    margin: 0;
                    padding: 0;
                    text-align: center;
                    color: #363062;
                    font-weight: 500;
                    font-size: 2rem;
                }
            }
            &_description {
                margin: 2rem 0 0 0;
                p {
                    margin: 0;
                    padding: 0;
                    font-weight: 500;
                    font-size: 1.25rem;
                }

            }
            &_inputs {
                margin: 2rem 0 0 0;
                display: flex;
                justify-content: space-between;
                &_content {
                    width: 100%;
                    p {
                        margin: 0;
                        padding: 0;
                        color: #363062;
                        font-weight: 500;
                        font-size: 1.5rem;
                    }
                    input {
                        font-family: 'Montserrat', sans-serif;
                        font-size: 1.5rem;
                        width: 100%;
                    }
                    &_email {
                        margin: 0 0 3.125rem 0;
                    }
                }
            }
            &_login-submit {
                margin: 3.125rem 0 0 0;
                display: flex;
                justify-content: center;
                p {
                    padding: 0;
                    margin: 0 0 .5rem 0;
                    text-align: center;
                    cursor: pointer;
                    &:hover {
                        color: #363062;
                    }
                }
                &_button {
                    button {
                        width: 450px;
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
        }
    }
}
</style>