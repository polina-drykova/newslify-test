import Vue from 'vue';
import Vuex from 'vuex';
import headlines from './modules/headlines';
import visitedPages from './modules/visitedPages';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    headlines,
    visitedPages,
  },
});
