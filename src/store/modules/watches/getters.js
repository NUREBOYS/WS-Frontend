export default {
    getWatches(state) {
        return state.watches
    },

    getPopularBrands(state) {
        return state.popularBrands
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