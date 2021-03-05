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
    let previous_computers = state.devices.computers.filter(pc => { return pc.assigned_to === employee.id})
    if (previous_computers) {
      previous_computers.forEach(pc => {
        pc.assigned_to = null
      })
    }
    if (employee.computers) {
      employee.computers.forEach(element => {
        state.devices.computers.find(pc => { return pc.id === element.id}).assigned_to = employee.id
      });
    }
  },
  assing_cellphones_to(state, employee) {
    let previous_cellphones = state.devices.cellphones.filter(pc => { return pc.assigned_to === employee.id})
    if (previous_cellphones) {
      previous_cellphones.forEach(pc => {
        pc.assigned_to = null
      })
    }
    if (employee.cellphones) {
      employee.cellphones.forEach(element => {
        state.devices.cellphones.find(pc => { return pc.id === element.id}).assigned_to = employee.id
      });
    }
  },
  assing_other_devices_to(state, employee) {
    let previous_other_devices = state.devices.other_devices.filter(pc => { return pc.assigned_to === employee.id})
    if (previous_other_devices) {
      previous_other_devices.forEach(pc => {
        pc.assigned_to = null
      })
    }
    if (employee.other_devices) {
      employee.other_devices.forEach(element => {
        state.devices.other_devices.find(pc => { return pc.id === element.id}).assigned_to = employee.id
      });
    }
  },
  assing_chips_to(state, employee) {
    let previous_chips = state.devices.chips.filter(pc => { return pc.assigned_to === employee.id})
    if (previous_chips) {
      previous_chips.forEach(pc => {
        pc.assigned_to = null
      })
    }
    if (employee.chips) {
      employee.chips.forEach(element => {
        state.devices.chips.find(pc => { return pc.id === element.id}).assigned_to = employee.id
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
