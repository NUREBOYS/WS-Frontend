export default {
    GET_WATCHES(state, watches) {
        state.watches = watches
    },

    SET_POPULAR_BRANDS(state, brands) {
        state.popularBrands = brands
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
    },

    SET_GENDER(state, gender) {
        state.currentFilter.gender = gender
    },

    SET_MATERIAL(state, material) {
        state.currentFilter.material = material
    },

    SET_MANUFACTURER(state, manufacturer) {
        state.currentFilter.manufacturer = manufacturer
    },

    SET_SORT(state, sort) {
        state.currentFilter.gender = sort
    },

    SET_SEARCH(state, searchValue) {
        state.currentFilter.search = searchValue
    }
}