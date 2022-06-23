<template>
    <div class="v-admin-panel">
        <div class="v-admin-panel_wrapper">
            <div class="v-admin-panel_wrapper_content">
                <div class="v-admin-panel_wrapper_content_title">
                    <p>Admin panel</p>
                </div>
                <div class="v-admin-panel_wrapper_content_edit-catalog">
                    <v-edit-catalog-field />
                </div>
                <div class="v-admin-panel_wrapper_content_orders">
                    <v-edit-orders-field />
                </div>
                <div class="v-admin-panel_wrapper_content_add-admin">
                    <v-register-field :title="'Register new admin'" :role="'admin'"/>
                </div>
            </div>
        </div>
        <v-edit-product
            v-if="isActive.name === 'edit-product' && isActive.status"
        />
        <v-add-product
            v-if="isActive.name === 'add-product' && isActive.status"
        />
        <v-delete-product
            v-if="isActive.name === 'delete-product' && isActive.status"
        />
    </div>
</template>

<script setup>
import {computed} from 'vue'
import {useStore} from 'vuex'
import VEditCatalogField from './v-edit-catalog-field'
import VEditOrdersField from './v-edit-orders-field'
import VRegisterField from '../main/v-register-field'
import VEditProduct from './v-edit-product'
import VAddProduct from './v-add-product'
import VDeleteProduct from './v-delete-product'

const store = useStore()

let isActive = computed(() => store.getters.getModal)

</script>

<style lang="scss" scoped>
.v-admin-panel {
    margin: 2rem 0 2rem 0;
    width: 1200px;
    &_wrapper {

        &_content {

            &_title {
                p {
                    font-size: 2rem;
                    color: #363062;
                    font-weight: 500;
                    margin: 0;
                    padding: 0;
                    text-align: center;
                }
            }
            &_edit-catalog {
                margin: 1rem 0 0 0;
            }
            &_orders {
                margin: 1rem 0 0 0;
            }
            &_add-admin {
                margin: 1rem 0 0 0;
            }
        }
    }
}
</style>