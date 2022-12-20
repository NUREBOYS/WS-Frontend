import axios from 'axios'
// import state from './state'
import userState from '../user/state'

export default {
    // eslint-disable-next-line no-unused-vars
    async getWatches({commit}) {
        try {
            const res = await axios.get('http://localhost:7000/product')
            commit('GET_WATCHES', res.data)
        } catch(err) {
            console.log(err)
        }
    },

    // eslint-disable-next-line no-unused-vars
    async addWatch({commit}, newWatch) {
        console.log(newWatch)
        try {
            await axios.post('http://localhost:7000/admin-product', newWatch, {
                headers: {
                    Authorization: `Bearer ${userState.userToken}`
                }
            })
        } catch(err) {
            console.log(err)
        }
    },

    // eslint-disable-next-line no-unused-vars
    async editWatch({commit}, newWatch) {
        try {
            await axios.patch(`http://localhost:7000/admin-product/${newWatch.selectedProductId}`, newWatch.watch, {
                headers: {
                    Authorization: `Bearer ${userState.userToken}`
                }
            })
        } catch(err) {
            console.log(err)
        }
    },

    // eslint-disable-next-line no-unused-vars
    async deleteWatch({commit}, selectedProductId) {
        try {
            await axios.delete(`http://localhost:7000/admin-product/${selectedProductId}`, {
                headers: {
                    Authorization: `Bearer ${userState.userToken}`
                }
            })
        } catch(err) {
            console.log(err)
        }
    },

    async getPopularBrands({commit}) {
        try {
            const res = await axios.get('http://localhost:3000/products/popular-manufacturers')
            commit('SET_POPULAR_BRANDS', res.data.body[0].hot.slice(0, 4))
        } catch(err) {
            console.log(err)
        }
    },

    setPage({commit}, newPage) {
        commit('SET_PAGE', newPage)
    },

    setCurrentPage({commit}, newCurrentPage) {
        commit('SET_CURRENT_PAGE', newCurrentPage)
    },

    setSelectedProductId({commit}, newSelectedProductId) {
        commit('SET_SELECTED_PRODUCT_ID', newSelectedProductId)
    },

    setGender({commit}, gender) {
        commit('SET_GENDER', gender)
    },

    setMaterial({commit}, material) {
        commit('SET_MATERIAL', material)
    },

    setManufacturer({commit}, manufacturer) {
        commit('SET_MANUFACTURER', manufacturer)
    },

    setSort({commit}, sort) {
        commit('SET_SORT', sort)
    },

    setSearch({commit}, searchValue) {
        commit('SET_SEARCH', searchValue)
    }
}
