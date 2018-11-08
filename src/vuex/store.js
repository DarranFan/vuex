import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    count: 1,
    text:'少时诵诗书'
}
const mutations = {
    add(state,n){
        state.count+=n
    },
    reduce(state){
        state.count--
    }
}
const getters = {
    count:state=>state.count+=100
}

const actions = {
    addActions(context){
        context.commit('add',20)
    },
    reduceActions({commit}){
        commit('reduce')
    }
}
export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})