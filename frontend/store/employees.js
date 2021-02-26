import api from '~api'

export const state = () => ({
  computers: [],
  software_groups: [],
  permission_groups: [],
  edit_count: 0
})

export const mutations = {
  setSoftwareGroups (state, software_groups) {
    state.software_groups = software_groups
  },
  setPermissionGroups (state, permission_groups) {
    state.permission_groups = permission_groups
  },
  addEmployee (state, employee) {
    state.employees.push(employee)
  },
  increment (state) {
    state.edit_count++
    console.log("edit_count = ", state.edit_count)
  },
  decrement (state) {
    state.edit_count--
  }
}

export const actions = {
  async load ({ commit }) {
    const settings = await api.settings()
    commit('setall', settings)
  }
}

export const getters = {
  getComputers(state) {
      return state.computers
  },
  getSoftwareGroups(state) {
      return state.software_groups
  },
  getPermissionGroups(state) {
      return state.permission_groups
  },
}
