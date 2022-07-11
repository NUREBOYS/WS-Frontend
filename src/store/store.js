import { createStore } from 'vuex'
import watches from './modules/watches/watches'

const store = createStore({
    modules: {
        watches
    }
})

export default store