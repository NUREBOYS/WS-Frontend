export default {
    ADD_TO_CART(state, newCartItem) {
        state.cart.push(newCartItem)
    },

    DELETE_FROM_CART(state, index) {
        state.cart.splice(index, 1)
    },

    CLEAR_CART(state) {
        state.cart = []
    }
}