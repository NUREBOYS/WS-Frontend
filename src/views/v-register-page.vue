<template>
    <div class="v-register-page">
        <v-register-field :title="'Register'"/>
    </div>
</template>

<script setup>
import VRegisterField from '../components/main/v-register-field'

</script>

<style lang="scss" scoped>
.v-register-page {
    display: flex;
    justify-content: center;
}
</style>