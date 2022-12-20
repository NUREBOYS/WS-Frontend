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
                            <input type="text" placeholder="Tolya" v-model="newUser.name">
                        </div>
                        <div class="v-register-field_wrapper_content_inputs_first-part_email">
                            <p>Email</p>
                            <input type="text" placeholder="ders123@test.com" v-model="newUser.email">
                        </div>
                        <div class="v-register-field_wrapper_content_inputs_first-part_gender">
                            <p>Gender</p>
                            <select v-model="newUser.gender">
                                <option>female</option>
                                <option>male</option>
                            </select>
<!--                            <input type="text" placeholder="Transnigger" v-model="gender">-->
                        </div>
                    </div>
                    <div class="v-register-field_wrapper_content_inputs_second-part">
                        <div class="v-register-field_wrapper_content_inputs_second-part_second-name">
                            <p>Second name</p>
                            <input type="text" placeholder="Molotok" v-model="newUser.surname">
                        </div>
                        <div class="v-register-field_wrapper_content_inputs_second-part_phone-number">
                            <p>Phone number</p>
                            <input type="text" placeholder="+380133712345" v-model="newUser.phone">
                        </div>
                        <div class="v-register-field_wrapper_content_inputs_second-part_password">
                            <p>Password</p>
                            <input type="password" placeholder="7_Ders123" v-model="newUser.password">
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
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'

const store = useStore()
const router = useRouter()

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

const newUser = ref({
    email: '',
    password: '',
    name: '',
    surname: '',
    phone: '',
    gender: ''
})

let role = props.role || 'user'

const validatePhone = phone => {
    const regEx = /^\+380\d{3}\d{2}\d{2}\d{2}$/
    return regEx.test(phone)
}

const validateEmail = email => {
    const regEx = /\S+@\S+\.\S+/
    return regEx.test(email)
}
const validatePassword = email => {
    const regEx = /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
    return regEx.test(email)
}

const register = () => {
    try {
        if(validatePhone(newUser.value.phone) && validateEmail(newUser.value.email) && validatePassword(newUser.value.password)) {
            switch(role) {
                case 'user':
                    store.dispatch('registerUser', newUser.value)
                    router.push('/login')
                    break
                case 'admin':
                    store.dispatch('registerAdmin', newUser.value)
                    alert('Adin was added')
                    for(let item in newUser.value) {
                        newUser.value[item] = ''
                    }
                    break
                default:
                    break
            }
        } else {
            alert('Wrong phone number or email or password')
        }
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