import Vue from 'vue';
import Vuex from 'vuex';
import headlines from './modules/headlines';
import visitedPages from './modules/visitedPages';
import sources from './modules/sources';

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
    sources,
  },
});
