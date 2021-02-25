import api from "~api";

export const state = () => ({
  devices: [],
});

export const mutations = {
  setdevices(state, devices) {
    let pcs = [""].concat(devices);
    state.devices = pcs;
  },
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
