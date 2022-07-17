import { createStore } from 'vuex'
import watches from './modules/watches/watches'
import modal from './modules/modal/modal'
import cart from './modules/cart/cart'
import order from './modules/order/order'
import user from './modules/user/user'

const store = createStore({
    modules: {
        watches,
        modal,
        cart,
        order,
        user
    }
})

export default store