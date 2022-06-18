import { createWebHistory, createRouter } from 'vue-router'
import VHomePage from '../views/v-home-page'
import VRegisterPage from '../views/v-register-page'
import VLoginPage from '../views/v-login-page'
import VCatalogPage from '../views/v-catalog-page'
import VCartPage from '../views/v-cart-page'
import VProfilePage from '../views/v-profile-page'

const routes = [
    {
        path: '/',
        name: 'home-page',
        component: VHomePage,
        meta: {
            title: 'Home page'
        }
    },
    {
        path: '/register',
        name: 'register-page',
        component: VRegisterPage,
        meta: {
            title: 'Register page'
        }
    },
    {
        path: '/login',
        name: 'login-page',
        component: VLoginPage,
        meta: {
            title: 'Login page'
        }
    },
    {
        path: '/catalog',
        name: 'catalog-page',
        component: VCatalogPage,
        meta: {
            title: 'Catalog page'
        }
    },
    {
        path: '/cart',
        name: 'cart-page',
        component: VCartPage,
        meta: {
            title: 'Cart page'
        }
    },
    {
        path: '/profile',
        name: 'profile-page',
        component: VProfilePage,
        meta: {
            title: 'Profile page'
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next()
})

export default router