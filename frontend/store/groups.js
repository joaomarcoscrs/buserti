import api from '~api'

export const state = () => ({
    software_groups: [],
    permission_groups: []
})

export const mutations = {
  setSoftwareGroups (state, software_groups) {
    state.software_groups = software_groups
  },
  setPermissionGroups (state, permission_groups) {
    state.permission_groups = permission_groups
  }
}

export const getters = {
  getSoftwareGroups (state) {
    return state.software_groups
  },
  getPermissionGroups (state) {
    return state.permission_groups
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
