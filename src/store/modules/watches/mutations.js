export default {
    GET_WATCHES(state, watches) {
        state.watches = watches
    },

    SET_TOTAL_PAGES(state, totalPages) {
        state.totalPages = totalPages
    },

    SET_PAGE(state, newPage) {
        state.page = newPage
    },

    SET_CURRENT_PAGE(state, newCurrentPage) {
        state.currentPage = newCurrentPage
    },

    SET_SELECTED_PRODUCT_ID(state, newSelectedProductId) {
        state.selectedProductId = newSelectedProductId
    }
}