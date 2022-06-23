<template>
    <div class="v-confirm-form">
        <div class="v-confirm-form_wrapper">
            <div class="v-confirm-form_wrapper_content">
                <div class="v-confirm-form_wrapper_content_inputs">
                    <v-confirm-inputs />
                </div>
                <div class="v-confirm-form_wrapper_content_details">
                    <v-confirm-details />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import VConfirmInputs from './v-confirm-inputs'
import VConfirmDetails from './v-confirm-details'

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
        }
    }
}
</style>