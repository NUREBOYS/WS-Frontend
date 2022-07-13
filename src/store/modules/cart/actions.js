export default {
    addToCart({commit}, newCartItem) {
        commit('ADD_TO_CART', newCartItem)
    },

    deleteFromCart({commit}, index) {
        commit('DELETE_FROM_CART', index)
    },

    clearCart({commit}) {
        commit('CLEAR_CART')
    }
}