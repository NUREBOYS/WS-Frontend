export default {
    GET_ORDERS(state, orders) {
        state.orders = orders
    },

    GET_ORDER_BY_ID(state, order) {
        state.orderById = order
    },

    CHANGE_ORDER_STATUS(state, newOrderStatus) {
      state.orders.forEach(order => {
          if(order._id === newOrderStatus.orderId) {
              order.status = newOrderStatus.status
          }
      })
    },

    DELETE_ORDER(state, orderId) {
        state.orders.splice(state.orders.findIndex(order => order._id === orderId), 1)
    },

    SET_ORDER_ID(state, orderId) {
        state.orderId = orderId
    },

    CLEAR_ORDER_ID(state) {
        state.orderId = ''
    },

    SET_ORDER_TOTAL_PAGES(state, orderTotalPages) {
        state.orderTotalPages = orderTotalPages
    },

    SET_ORDER_PAGE(state, newPage) {
        state.orderPage = newPage
    },

    SET_CURRENT_PAGE(state, newCurrentPage) {
        state.orderCurrentPage = newCurrentPage
    },

    SET_FILTER(state, filter) {
        state.currentOrderFilter = filter
    }
}