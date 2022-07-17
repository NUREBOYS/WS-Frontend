<template>
    <div class="v-confirm-form">
        <div class="v-confirm-form_wrapper">
            <div class="v-confirm-form_wrapper_content">
                <div class="v-confirm-form_wrapper_content_inputs">
                    <div class="v-confirm-form_wrapper_content_inputs_first-part">
                        <div class="v-confirm-form_wrapper_content_inputs_first-part_first-name input">
                            <p>First name</p>
                            <input type="text" v-model="newOrder.initiatorData.firstName">
                        </div>
                        <div class="v-confirm-form_wrapper_content_inputs_first-part_second-name input">
                            <p>Second name</p>
                            <input type="text" v-model="newOrder.initiatorData.secondName">
                        </div>
                        <div class="v-confirm-form_wrapper_content_inputs_first-part_country input">
                            <p>Country</p>
                            <input type="text" v-model="newOrder.deliveryDetails.country">
                        </div>
                        <div class="v-confirm-form_wrapper_content_inputs_first-part_street input">
                            <p>Street</p>
                            <input type="text" v-model="newOrder.deliveryDetails.street">
                        </div>
                    </div>
                    <div class="v-confirm-form_wrapper_content_inputs_second-part">
                        <div class="v-confirm-form_wrapper_content_inputs_second-part_email input">
                            <p>Email</p>
                            <input type="text" v-model="newOrder.initiatorData.email">
                        </div>
                        <div class="v-confirm-form_wrapper_content_inputs_second-part_phone-number input">
                            <p>Phone number</p>
                            <input type="text" v-model="newOrder.initiatorData.phoneNumber">
                        </div>
                        <div class="v-confirm-form_wrapper_content_inputs_second-part_city input">
                            <p>City</p>
                            <input type="text" v-model="newOrder.deliveryDetails.city">
                        </div>
                        <div class="v-confirm-form_wrapper_content_inputs_second-part_fill-button">
                            <button @click="fillFromProfile">Fill from profile</button>
                        </div>
                    </div>
                </div>
                <div class="v-confirm-form_wrapper_content_details">
                    <div class="v-confirm-form_wrapper_content_details_text">
                        <div class="v-confirm-form_wrapper_content_details_text_total-price">
                            <p>Total price: <span class="price">{{ totalPrice }}$</span></p>
                        </div>
                        <div class="v-confirm-form_wrapper_content_details_text_total-amount">
                            <p>Total amount: <span class="amount">{{ totalAmount }}</span></p>
                        </div>
                    </div>
                    <div class="v-confirm-form_wrapper_content_details_confirm-button">
                        <button @click="sendOrder">Confirm</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref, computed, onMounted} from 'vue'
import {useStore} from 'vuex'

const store = useStore()

const newOrder = ref({
    products: [],
    initiatorData: {
        firstName: '',
        secondName: '',
        phoneNumber: '',
        email: ''
    },
    deliveryDetails: {
        country: '',
        city: '',
        street: ''
    }
})

const totalPrice = computed(() => {
    const watches = store.getters.getCart
    return watches.reduce((sum, watch) => sum + watch.price, 0)
})
const totalAmount = computed(() => {
    const watches = store.getters.getCart
    return watches.length
})

const user = computed(() => store.getters.getUser)

const validatePhone = phone => {
    const regEx = /^\+380\d{3}\d{2}\d{2}\d{2}$/
    return regEx.test(phone)
}

const validateEmail = email => {
    const regEx = /\S+@\S+\.\S+/
    return regEx.test(email)
}

const fillFromProfile = () => {
    for(let item in newOrder.value.initiatorData) {
        newOrder.value.initiatorData[item] = user.value[item]
    }
}

const sendOrder = () => {
    if(window.localStorage.getItem('userToken')) {
        newOrder.value.initiator = user.value._id
    }
    console.log(newOrder.value)
    if(validateEmail(newOrder.value.initiatorData.email) && validatePhone(newOrder.value.initiatorData.phoneNumber)) {
        store.dispatch('addOrder', newOrder.value)
        alert('Your order was sent. Wait a 3-5 minutes for a phone call.')
        store.dispatch('clearCart')
    }
}

onMounted(() => {
    const watches = store.getters.getCart
    newOrder.value.products = watches.map(watch => watch._id)
    store.dispatch('getUser')
})

</script>

<style lang="scss" scoped>
.v-confirm-form {
    border: 1px solid black;
    border-radius: 5px;
    margin: 5rem 0 0 0;
    padding: 1.5rem 2.5rem 1.5rem 2.5rem;
    height: 300px;
    &_wrapper {

        &_content {
            display: flex;
            justify-content: space-between;
            &_inputs {
                display: flex;
                &_first-part {
                    display: flex;
                    justify-content: space-between;
                    flex-direction: column;
                    .input {
                        margin: 1rem 0 0 0;
                    }
                    p {
                        margin: 0;
                        padding: 0;
                        font-weight: 500;
                        font-size: 1rem;
                    }
                    input {
                        font-family: 'Montserrat', sans-serif;
                        font-size: 1rem;
                        width: 200px;
                    }
                }
                &_second-part {
                    display: flex;
                    justify-content: space-between;
                    flex-direction: column;
                    margin:  0 0 0 1.875rem;
                    .input {
                        margin: 1rem 0 0 0;
                    }
                    p {
                        margin: 0;
                        padding: 0;
                        font-weight: 500;
                        font-size: 1rem;
                    }
                    input {
                        font-family: 'Montserrat', sans-serif;
                        font-size: 1rem;
                        width: 200px;
                    }
                    &_fill-button {
                        margin: 2.2rem 0 0 0;
                        display: flex;
                        justify-content: center;
                        button {
                            width: 150px;
                            height: 25px;
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
            }
            &_details {
                display: flex;
                justify-content: space-between;
                flex-direction: column;
                &_text {
                    margin: 1rem 0 0 0;
                    &_total-price {
                        p {
                            margin: 0;
                            padding: 0;
                            font-weight: 500;
                            font-size: 1rem;
                        }
                        .price {
                            font-weight: 800;
                            color: #363062;
                        }
                    }
                    &_total-amount {
                        margin: 2rem 0 0 0;
                        p {
                            margin: 0;
                            padding: 0;
                            font-weight: 500;
                            font-size: 1rem;
                        }
                        .amount {
                            font-weight: 800;
                            color: #363062;
                        }
                    }
                }
                &_confirm-button {
                    button {
                        width: 300px;
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