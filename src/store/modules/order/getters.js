export default {
    getOrders(state) {
        return state.orders
    },

    getOrderById(state) {
        return state.orderById
    },

    getOrderId(state) {
        return state.orderId
    },

    getOrderTotalPages(state) {
        return state.orderTotalPages
    },

    getOrderPage(state) {
        return state.orderPage
    },

    getOrderCurrentFilter(state) {
        return state.currentFilter
    }
}