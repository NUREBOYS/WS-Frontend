<template>
    <div class="v-nav-buttons">
        <div class="v-nav-buttons_wrapper">
            <div class="v-nav-buttons_wrapper_content">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.v-nav-buttons {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 0 0 70px;
    &_wrapper{
        display: flex;
        justify-content: center;
        &_content {
            display: flex;
            justify-content: center;

        }
    }
}
</style>