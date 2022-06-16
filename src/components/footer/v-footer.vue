<template>
    <div class="v-footer">
        <v-nav-buttons>
            <div class="v-footer_button about-us">
                <router-link to="/" class="v-footer_button_link">About Us</router-link>
            </div>
            <div class="v-footer_button contact-us">
                <router-link to="/" class="v-footer_button_link">Contact Us</router-link>
            </div>
            <div class="v-footer_button other-information">
                <router-link to="/" class="v-footer_button_link">Other Information</router-link>
            </div>
        </v-nav-buttons>
    </div>
</template>

<script setup>
import VNavButtons from '../main/v-nav-buttons'

</script>

<style lang="scss" scoped>
.v-footer {
    width: 100%;
    height: 90px;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    border-top: 1px solid black;
    margin-top: auto;
    &_button {
        &_link {
            text-decoration: none;
            color: black;
            font-weight: 500;
            font-size: 1rem;
        }
    }
    .about-us {
        &:hover {
            opacity: .6;
        }
    }
    .contact-us {
        margin: 0 100px 0 100px;
        &:hover {
            opacity: .6;
        }
    }
    .other-information {
        &:hover {
            opacity: .6;
        }
    }
}
</style>