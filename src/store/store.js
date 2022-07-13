import { createStore } from 'vuex'
import watches from './modules/watches/watches'
import modal from './modules/modal/modal'
import cart from './modules/cart/cart'
import order from './modules/order/order'

const store = createStore({
    modules: {
        watches,
        modal,
        cart,
        order
    }
})

export default store