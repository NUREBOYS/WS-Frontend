export default {
    getWatches(state) {
        return state.watches
    },

    getTotalPages(state) {
        return state.totalPages
    },

    getPage(state) {
        return state.page
    },

    getCurrentPage(state) {
        return state.currentPage
    },

    getSelectedProductId(state) {
        return state.selectedProductId
    }
}