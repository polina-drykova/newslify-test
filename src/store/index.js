import Vue from 'vue';
import Vuex from 'vuex';
import headlines from './modules/headlines';
import visitedPages from './modules/visitedPages';
import sources from './modules/sources';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    error: '',
  },
  mutations: {
    SET_ERROR: (state, message) => {
      state.error = message;
    },
  },
  actions: {
    setError({ commit }, message) {
      commit('SET_ERROR', message);
    },
  },
  modules: {
    headlines,
    visitedPages,
    sources,
  },
});
