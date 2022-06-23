<template>
    <div class="v-confirm-inputs">
        <div class="v-confirm-inputs_wrapper">
            <div class="v-confirm-inputs_wrapper_content">
                <div class="v-confirm-inputs_wrapper_content_first-part">
                    <div class="v-confirm-inputs_wrapper_content_first-part_first-name input">
                        <p>First name</p>
                        <input type="text" v-model="firstName">
                    </div>
                    <div class="v-confirm-inputs_wrapper_content_first-part_second-name input">
                        <p>Second name</p>
                        <input type="text" v-model="secondName">
                    </div>
                    <div class="v-confirm-inputs_wrapper_content_first-part_country input">
                        <p>Country</p>
                        <input type="text" v-model="country">
                    </div>
                    <div class="v-confirm-inputs_wrapper_content_first-part_street input">
                        <p>Street</p>
                        <input type="text" v-model="street">
                    </div>
                </div>
                <div class="v-confirm-inputs_wrapper_content_second-part">
                    <div class="v-confirm-inputs_wrapper_content_second-part_email input">
                        <p>Email</p>
                        <input type="text" v-model="email">
                    </div>
                    <div class="v-confirm-inputs_wrapper_content_second-part_phone-number input">
                        <p>Phone number</p>
                        <input type="text" v-model="phoneNumber">
                    </div>
                    <div class="v-confirm-inputs_wrapper_content_second-part_city input">
                        <p>City</p>
                        <input type="text" v-model="city">
                    </div>
                    <div class="v-confirm-inputs_wrapper_content_second-part_fill-button">
                        <button>Fill from profile</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.v-confirm-inputs {
    &_wrapper {
        &_content {
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
    }
}
</style>