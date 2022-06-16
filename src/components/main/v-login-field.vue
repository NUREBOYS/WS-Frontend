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
                            <input type="text" placeholder="ders123@test.com" v-model="email">
                        </div>
                        <div class="v-register-field_wrapper_content_inputs_content_password">
                            <p>Password</p>
                            <input type="password" placeholder="7ders" v-model="password">
                        </div>
                    </div>
                </div>
                <div class="v-login-field_wrapper_content_login-submit">
                    <div class="v-login-field_wrapper_content_login-submit_button">
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
    </div>
</template>

<script setup>
import {ref} from 'vue'
import {useRouter} from 'vue-router'

const router = useRouter()

let email = ref('')
let password = ref('')

const login = async () => {
    try {
        const newUser = {
            email: email.value,
            password: password.value
        }
        console.log(newUser)
    } catch(err) {
        console.log(err)
    }
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
                    font-size: 3.125rem;
                }
            }
            &_description {
                margin: 3.125rem 0 0 0;
                p {
                    margin: 0;
                    padding: 0;
                    font-weight: 500;
                    font-size: 1.25rem;
                }

            }
            &_inputs {
                margin: 3.125rem 0 0 0;
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
                &_button {
                    button {
                        width: 450px;
                        font-size: 1.5rem;
                        font-family: 'Montserrat', sans-serif;
                        font-weight: 500;
                        color: white;
                        background: #363062;
                        border-radius: 5px;
                        border: none;
                        padding: .25rem 0;
                        &:hover {
                            outline: 1px solid #838383;
                        }
                    }
                }
            }
        }
    }
}
</style>