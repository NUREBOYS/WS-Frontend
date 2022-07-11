<template>
    <div class="v-profile">
        <div class="v-profile_wrapper">
            <div class="v-profile_wrapper_content">
                <div class="v-profile_wrapper_content_title">
                    <p>Profile</p>
                </div>
                <div class="v-profile_wrapper_content_user-info">
                    <v-user-info />
                </div>
                <div class="v-profile_wrapper_content_title">
                    <p>Orders</p>
                </div>
                <div class="v-profile_wrapper_content_orders">
                    <v-orders />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import VUserInfo from './v-user-info'
import VOrders from './v-orders'

</script>

<style lang="scss" scoped>
.v-profile {
    width: 1200px;
    &_wrapper {

        &_content {

            &_title {
                margin: 2rem 0 0 0;
                p {
                    font-size: 2rem;
                    color: #363062;
                    font-weight: 500;
                    margin: 0;
                    padding: 0;
                    text-align: center;
                }
            }
        }
    }
}
</style>