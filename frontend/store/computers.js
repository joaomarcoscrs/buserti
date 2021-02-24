import api from '~api'

export const state = () => ({
  computers: []
})

export const mutations = {
  setComputers (state, computers) {
    let pcs = [""].concat(computers)
    state.computers = pcs
  }
}

export const getters = {
  getComputers (state) {
    return state.computers
  }
}

export const actions = {
  async whoami ({ commit }) {
    const data = await api.whoami()
    if (data.authenticated) {
      commit('setCurrentUser', data.user)
    } else {
      commit('setCurrentUser', null)
    }
  }
}
