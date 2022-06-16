<template>
    <div class="v-header">
        <div class="v-header_wrapper">
            <div class="v-header_wrapper_content">
                <div class="v-header_wrapper_content_before-search">
                    <v-logo />
                    <v-nav-buttons>
                        <div class="v-header_wrapper_content_before-search_button home">
                            <router-link to="/" class="v-header_wrapper_content_before-search_button_link">Home</router-link>
                        </div>
                        <div class="v-header_wrapper_content_before-search_button catalog">
                            <router-link to="/catalog" class="v-header_wrapper_content_before-search_button_link">Catalog</router-link>
                        </div>
                        <div class="v-header_wrapper_content_before-search_button profile">
                            <router-link to="/" class="v-header_wrapper_content_before-search_button_link">Profile</router-link>
                        </div>
                    </v-nav-buttons>
                </div>
                <div class="v-header_wrapper_content_after-search">
                    <v-search />
                    <v-nav-buttons>
                        <div class="v-header_wrapper_content_after-search_button cart">
                            <router-link to="/cart" class="v-header_wrapper_content_after-search_button_link">Cart</router-link>
                        </div>
                        <div class="v-header_wrapper_content_after-search_button register">
                            <router-link to="/register" class="v-header_wrapper_content_after-search_button_link">Register</router-link>
                        </div>
                        <div class="v-header_wrapper_content_after-search_button login">
                            <router-link to="/login" class="v-header_wrapper_content_after-search_button_link">Log in</router-link>
                        </div>
                    </v-nav-buttons>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import VNavButtons from '../main/v-nav-buttons'
import VLogo from './v-logo'
import VSearch from './v-search'

</script>

<style lang="scss" scoped>
.v-header {
    width: 100%;
    height: 90px;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid black;
    &_wrapper {
        width: 1680px;
        display: flex;
        justify-content: flex-end;
        flex-direction: column;
        &_content {
            display: flex;
            justify-content: space-between;
            &_before-search {
                display: flex;
                &_button {
                    &_link {
                        text-decoration: none;
                        color: black;
                        font-weight: 500;
                        font-size: 1rem;
                    }
                }
                .home {
                    margin: 0 35px 0 0;
                    &:hover {
                        opacity: .6;
                    }
                }
                .catalog {
                    margin: 0 35px 0 35px;
                    &:hover {
                        opacity: .6;
                    }
                }
                .profile {
                    margin: 0 0 0 35px;
                    &:hover {
                        opacity: .6;
                    }
                }
            }
            &_after-search {
                display: flex;
                &_button {
                    &_link {
                        text-decoration: none;
                        color: black;
                        font-weight: 500;
                        font-size: 1rem;
                    }
                }
                .cart {
                    margin: 0 35px 0 0;
                    &:hover {
                        opacity: .6;
                    }
                }
                .register {
                    margin: 0 35px 0 35px;
                    &:hover {
                        opacity: .6;
                    }
                }
                .login {
                    margin: 0 0 0 35px;
                    &:hover {
                        opacity: .6;
                    }
                }
            }
        }
    }
}
</style>