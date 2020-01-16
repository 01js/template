import { MutationTree, ActionTree } from 'vuex'
import { getToken, setToken, removeToken } from '@/utils/auth'

const state = {
  token: getToken()
}

const mutations:MutationTree<any> = {
  SET_TOKEN: (state, token) => {
    state.token = token
  }
}

const actions: ActionTree<any, any> = {
  // remove token
  resetToken ({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      removeToken()
      resolve()
    })
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
