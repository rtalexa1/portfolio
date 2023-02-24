import { createStore } from "vuex";

export default createStore({
  state: {
    darkThemeActive: false,
  },
  getters: {},
  mutations: {
    toggleTheme(state) {
      state.darkThemeActive
        ? (state.darkThemeActive = false)
        : (state.darkThemeActive = true);
    },
  },
  actions: {},
  modules: {},
});
