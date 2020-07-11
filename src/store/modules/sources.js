/* eslint no-shadow: ["error", { "allow": ["state"] }] */
import axios from 'axios';

const state = {
  sources: [],
};

const getters = {
  // get all sources:
  allSources: (state) => state.sources,
};

const actions = {
  // fetching all sources:
  async fetchSources({ commit }) { // eslint-disable-line
    // call api to get headlines:
    const response = await axios.get('https://newsapi.org/v2/sources?apiKey=099148be22804e849a0c6fe022b7cf5e');
    // Pass data to mutations:
    commit('SET_SOURCES', response.data.sources);
  },
};

const mutations = {
  SET_SOURCES: (state, sources) =>  state.sources = sources.slice(0, 15), // eslint-disable-line
};

export default {
  state,
  getters,
  actions,
  mutations,
};