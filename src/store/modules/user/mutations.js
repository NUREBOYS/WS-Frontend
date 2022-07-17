export default {
    SET_USER_TOKEN(state, token) {
        state.userToken = token
    },

    SET_USER(state, token) {
        state.user = token
    },

    LOGOUT(state) {
        state.userToken = ''
    },

    SET_IS_ADMIN(state, isAdmin) {
        state.isAdmin = isAdmin
    },

    CHANGE_PHONE_NUMBER(state, newPhoneNumber) {
        state.user.phoneNumber = newPhoneNumber
    }
}