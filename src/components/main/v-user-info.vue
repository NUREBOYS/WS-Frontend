<template>
    <div class="v-user-info">
        <div class="v-user-info_name-surname">
            <div class="v-user-info_name-surname_name">
                <p class="user-info-text">First name: Tolya</p>
            </div>
            <div class="v-user-info_name-surname_surname">
                <p class="user-info-text">Second name: Troschila</p>
            </div>
        </div>
        <div class="v-user-info_email">
            <p class="user-info-text">Email: nttdy@zebra.com</p>
        </div>
        <div class="v-user-info_phone-number">
            <p class="user-info-text">Phone number: +380957657698</p>
        </div>
        <div class="v-user-info_gender-orders">
            <div class="v-user-info_gender-orders_gender">
                <p class="user-info-text">Gender: Man</p>
            </div>
            <div class="v-user-info_gender-orders_orders">
                <p class="user-info-text">Total amount of orders: 3</p>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.v-user-info {
    margin: 1rem 0 0 0;
    border: 1px solid black;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    .user-info-text {
        margin: 0;
        padding: 0;
        font-weight: 500;
    }
    &_name-surname {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }
    &_gender-orders {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }
}
</style>