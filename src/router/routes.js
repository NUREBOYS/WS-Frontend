export default [
    {
        path: '/',
        name: 'home-page',
        component: () => import('../views/v-home-page'),
        meta: {
            title: 'Home page'
        }
    },
    {
        path: '/register',
        name: 'register-page',
        component: () => import('../views/v-register-page'),
        meta: {
            title: 'Register page'
        }
    },
    {
        path: '/login',
        name: 'login-page',
        component: () => import('../views/v-login-page'),
        meta: {
            title: 'Login page'
        }
    },
    {
        path: '/catalog',
        name: 'catalog-page',
        component: () => import('../views/v-catalog-page'),
        meta: {
            title: 'Catalog page'
        }
    },
    {
        path: '/cart',
        name: 'cart-page',
        component: () => import('../views/v-cart-page'),
        meta: {
            title: 'Cart page'
        }
    },
    {
        path: '/profile',
        name: 'profile-page',
        component: () => import('../views/v-profile-page'),
        meta: {
            title: 'Profile page'
        }
    },
    {
        path: '/admin-panel',
        name: 'admin-panel-page',
        component: () => import('../views/v-admin-page'),
        meta: {
            title: 'Admin panel'
        }
    },
    {
        path: '/orders',
        name: 'orders-page',
        component: () => import('../views/v-admin-orders-page'),
        meta: {
            title: 'Orders panel'
        }
    },
]