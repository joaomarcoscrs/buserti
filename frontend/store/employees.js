import api from '~api'

export const state = () => ({
  employees: [],
  computers: [],
  software_groups: [],
  permission_groups: []
})

export const mutations = {
  setEmployees (state, employees) {
    state.employees = employees
  },
  setComputers (state, computers) {
    state.computers = computers
  },
  setSoftwareGroups (state, software_groups) {
    state.software_groups = software_groups
  },
  setPermissionGroups (state, permission_groups) {
    state.permission_groups = permission_groups
  },
  addEmployee (state, employee) {
    state.employees.push(employee)
  }
}

export const actions = {
  async load ({ commit }) {
    const settings = await api.settings()
    commit('setall', settings)
  }
}

export const getters = {
  getEmployees(state) {
      return state.employees
  },
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
