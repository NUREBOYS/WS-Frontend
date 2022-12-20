import axios from 'axios'
// import state from './state'
import userState from '../user/state'

export default {
    // eslint-disable-next-line no-unused-vars
    async getOrders({commit}) {
        try {
            const res = await axios.get('http://localhost:7000/order', {
                headers: {
                    Authorization: `Bearer ${userState.userToken}`
                }
            })
            // commit('SET_ORDER_TOTAL_PAGES', Math.ceil(res.data.body.total / state.ordersPerPage))
            commit('GET_ORDERS', res.data)
        } catch(err) {
            console.log(err)
        }
    },

    async getOrderById({commit}, orderId) {
        try {
            const res = await axios.get(`http://localhost:3000/orders/${orderId}`, {
                headers: {
                    Authorization: 'Bearer ' + userState.userToken
                }
            })
            commit('GET_ORDER_BY_ID', res.data.body)
        } catch(err) {
            console.log(err)
        }
    },

    async getOrderByUserId({commit}) {
      try {
          const res = await axios.get(`http://localhost:7000/order/user`, {
              headers: {
                  Authorization: `Bearer ${userState.userToken}`
              }
          })
          commit('GET_ORDERS', res.data)
      } catch(err) {
          console.log(err)
      }
    },

    // eslint-disable-next-line no-unused-vars
    async addOrder({commit}, newOrder) {
        try {
            await axios.post('http://localhost:7000/order', newOrder, {
                headers: {
                    Authorization: 'Bearer ' + userState.userToken
                }
            })
        } catch(err) {
            console.log(err)
        }
    },

    async approveOrder({commit}, newOrderStatus) {
        try {
            await axios.patch(`http://localhost:7000/order/${newOrderStatus.orderId}`, {
                status: 'accepted'
            }, {
                headers: {
                    Authorization: `Bearer ${userState.userToken}`
                }
            })
            commit('CHANGE_ORDER_STATUS', newOrderStatus)
        } catch(err) {
            console.log(err)
        }
    },

    async rejectOrder({commit}, newOrderStatus) {
        try {
            await axios.patch(`http://localhost:7000/order/${newOrderStatus.orderId}`, {status: 'rejected'}, {
                headers: {
                    Authorization: `Bearer ${userState.userToken}`
                }
            })
            commit('CHANGE_ORDER_STATUS', newOrderStatus)
        } catch(err) {
            console.log(err)
        }
    },

    async deleteOrder({commit}, orderId) {
        try {
            await axios.delete(`http://localhost:3000/orders/${orderId}`, {
                headers: {
                    Authorization: 'Bearer ' + userState.userToken
                }
            })
            commit('DELETE_ORDER', orderId)
        } catch(err) {
            console.log(err)
        }
    },

    setOrderId({commit}, orderId) {
        commit('SET_ORDER_ID', orderId)
    },

    clearOrderId({commit}) {
        commit('CLEAR_ORDER_ID')
    },

    setOrderPage({commit}, newPage) {
        commit('SET_ORDER_PAGE', newPage)
    },

    setFilter({commit}, filter) {
        commit('SET_FILTER', filter)
    }
}