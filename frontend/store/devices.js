import api from "~api";

export const state = () => ({
  devices: [],
});

export const mutations = {
  setdevices(state, devices) {
    state.devices = devices;
    console.log("SET_DEVICES: ", state.devices)
  },
  assing_computers_to(state, employee) {
    let previous_computers = state.devices.computers.filter(pc => { return pc.assigned_to === employee.slack})
    if (previous_computers) {
      previous_computers.forEach(pc => {
        pc.assigned_to = null
      })
    }
    if (employee.computers) {
      employee.computers.forEach(element => {
        state.devices.computers.find(pc => { return pc.id === element.id}).assigned_to = employee.slack
      });
    }
  }
};

export const getters = {
  getdevices(state) {
    return state.devices;
  },
};

export const actions = {
  async whoami({ commit }) {
    const data = await api.whoami();
    if (data.authenticated) {
      commit("setCurrentUser", data.user);
    } else {
      commit("setCurrentUser", null);
    }
  },
};
