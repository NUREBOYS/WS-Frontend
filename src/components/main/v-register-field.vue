<template>
    <div class="v-register-field">
        <div class="v-register-field_wrapper">
            <div class="v-register-field_wrapper_content">
                <div class="v-register-field_wrapper_content_title">
                    <p>{{props.title}}</p>
                </div>
                <div class="v-register-field_wrapper_content_description">
                    <p>For successful register, please fill in the below form then click ‘{{props.title}}’.</p>
                </div>
                <div class="v-register-field_wrapper_content_inputs">
                    <div class="v-register-field_wrapper_content_inputs_first-part">
                        <div class="v-register-field_wrapper_content_inputs_first-part_first-name">
                            <p>First name</p>
                            <input type="text" placeholder="Tolya" v-model="firstName">
                        </div>
                        <div class="v-register-field_wrapper_content_inputs_first-part_email">
                            <p>Email</p>
                            <input type="text" placeholder="ders123@test.com" v-model="email">
                        </div>
                        <div class="v-register-field_wrapper_content_inputs_first-part_gender">
                            <p>Gender</p>
                            <input type="text" placeholder="Transnigger" v-model="gender">
                        </div>
                    </div>
                    <div class="v-register-field_wrapper_content_inputs_second-part">
                        <div class="v-register-field_wrapper_content_inputs_second-part_second-name">
                            <p>Second name</p>
                            <input type="text" placeholder="Molotok" v-model="secondName">
                        </div>
                        <div class="v-register-field_wrapper_content_inputs_second-part_phone-number">
                            <p>Phone number</p>
                            <input type="text" placeholder="+380133712345" v-model="phoneNumber">
                        </div>
                        <div class="v-register-field_wrapper_content_inputs_second-part_password">
                            <p>Password</p>
                            <input type="password" placeholder="7ders" v-model="password">
                        </div>
                    </div>
                </div>
                <div class="v-register-field_wrapper_content_register-submit">
                    <div class="v-register-field_wrapper_content_register-submit_button">
                        <button @click="register">{{props.title}}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'

// eslint-disable-next-line no-undef,no-unused-vars
const props = defineProps({
    title: {
        type: String,
        default: ''
    },
    role: {
        type: String,
        default: ''
    }
})

let firstName = ref('')
let secondName = ref('')
let email = ref('')
let gender = ref('')
let phoneNumber = ref('')
let password = ref('')
let role = props.role ? props.role : 'user'

const register = async () => {
    try {
        const newUser = {
            firstName: firstName.value,
            secondName: secondName.value,
            email: email.value,
            gender: gender.value,
            phoneNumber: phoneNumber.value,
            password: password.value,
            role
        }
        console.log(newUser)
    } catch(err) {
        console.log(err)
    }
}

</script>

<style lang="scss" scoped>
.v-register-field {
    border: 1px solid black;
    border-radius: 5px;
    width: 1200px;
    margin: 2rem 0 0 0;
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
                &_first-part {
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
                        width: 450px;
                    }
                    &_email {
                        margin: 3.125rem 0 3.125rem 0;
                    }
                }
                &_second-part {
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
                        width: 450px;
                    }
                    &_phone-number {
                        margin: 3.125rem 0 3.125rem 0;
                    }
                }
            }
            &_register-submit {
                margin: 3.125rem 0 0 0;
                display: flex;
                justify-content: center;
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