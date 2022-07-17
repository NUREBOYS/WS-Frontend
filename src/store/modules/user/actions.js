import axios from 'axios'
import state from './state'

export default {
    // eslint-disable-next-line no-unused-vars
    async registerUser({commit}, newUser) {
        try {
            await axios.post('http://localhost:3000/users/register', newUser)
        } catch(err) {
            console.log(err)
        }
    },

    // eslint-disable-next-line no-unused-vars
    async registerAdmin({commit}, newAdmin) {
        try {
            await axios.post('http://localhost:3000/users/register-admin', newAdmin, {
                headers: {
                    Authorization: 'Bearer ' + state.userToken
                }
            })
        } catch(err) {
            console.log(err)
        }
    },

    async login({commit}, credentials) {
        try {
            const res = await axios.post('http://localhost:3000/users/login', credentials)
            commit('SET_USER_TOKEN', res.data.body.token)
            window.localStorage.setItem('userToken', res.data.body.token)
            if(res.data.body.user.role === 'admin') {
                commit('SET_IS_ADMIN', true)
                window.localStorage.setItem('isAdmin', 'true')
            }
        } catch(err) {
            console.log(err)
        }
    },

    // eslint-disable-next-line no-unused-vars
    async getUser({commit}) {
        try {
            const res = await axios.get('http://localhost:3000/users', {
                headers: {
                    Authorization: 'Bearer ' + state.userToken
                }
            })
            commit('SET_USER', res.data.body)
        } catch(err) {
            console.log(err)
        }
    },

    async changePhoneNumber({commit}, newPhoneNumber) {
        try {
            await axios.patch('http://localhost:3000/users', {phoneNumber: newPhoneNumber}, {
                headers: {
                    Authorization: 'Bearer ' + state.userToken
                }
            })
            commit('CHANGE_PHONE_NUMBER', newPhoneNumber)
        } catch(err) {
            console.log(err)
        }
    },

    // eslint-disable-next-line no-unused-vars
    async changePassword({commit}, newPassword) {
        try {
            await axios.patch('http://localhost:3000/users', {password: newPassword}, {
                headers: {
                    Authorization: 'Bearer ' + state.userToken
                }
            })
        } catch(err) {
            console.log(err)
        }
    },

    // eslint-disable-next-line no-unused-vars
    async revokePassword({commit}, email) {
        try {
            await axios.post('http://localhost:3000/users/revoke-password', {email})
        } catch(err) {
            console.log(err)
        }
    },

    setUserToken({commit}, token) {
      commit('SET_USER_TOKEN', token)
    },

    setIsAdmin({commit}, isAdmin) {
      commit('SET_IS_ADMIN', isAdmin)
    },

    logout({commit}) {
        commit('LOGOUT')
    }
}