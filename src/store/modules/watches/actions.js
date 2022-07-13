import axios from 'axios'
import state from './state'

export default {
    async getWatches({commit}, filters) {
        try {
            const existedFilters = {}
            for(let filter in filters) {
                if(filters[filter]) {
                    existedFilters[filter] = filters[filter]
                }
            }

            const res = await axios.get('http://localhost:3000/products', {
                params: {
                    page: state.page,
                    perPage: state.perPage,
                    ...existedFilters
                }
            })

            commit('SET_TOTAL_PAGES', Math.ceil(res.data.body.total / state.perPage))
            commit('GET_WATCHES', res.data.body.items)
        } catch(err) {
            console.log(err)
        }
    },

    // eslint-disable-next-line no-unused-vars
    async addWatch({commit}, newWatch) {
        try {
            await axios.post('http://localhost:3000/admin/products', newWatch)
        } catch(err) {
            console.log(err)
        }
    },

    // eslint-disable-next-line no-unused-vars
    async editWatch({commit}, newWatch) {
        try {
            await axios.patch(`http://localhost:3000/admin/products/${newWatch.selectedProductId}`, newWatch.watch)
        } catch(err) {
            console.log(err)
        }
    },

    // eslint-disable-next-line no-unused-vars
    async deleteWatch({commit}, selectedProductId) {
        try {
            await axios.delete(`http://localhost:3000/admin/products/${selectedProductId}`)
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
    }
}
