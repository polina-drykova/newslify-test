/* eslint no-shadow: ["error", { "allow": ["state"] }] */
import axios from 'axios';

const state = {
  headlines: [],
  key: process.env.VUE_APP_API_KEY,
  loading: false,
};

const getters = {
  // get all headlines:
  allHeadlines: (state) => state.headlines,
  // find particular headline:
  getHeadline: (state) => (id) => {
    const result = state.headlines.find((headline) => headline.id === parseInt(id, 10));
    return result;
  },
  // get loading state:
  getLoadingStatus: (state) => state.loading,
};

const actions = {
  async fetchHeadlines({ commit, state }) {
    // call api to get headlines:
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${state.key}`);
    // Pass data to mutations:
    commit('SET_HEADLINES', response.data.articles);
  },
  async updateHeadline({ commit }, updatedHeadline) {
    // Pass data to mutations:
    commit('UPDATE_HEADLINE', updatedHeadline);
  },
  async searchHeadlines({commit, state}, newVal) { // eslint-disable-line
    const response = await axios.get(`https://newsapi.org/v2/top-headlines?q=${newVal}&apiKey=${state.key}`);
    commit('SET_HEADLINES', response.data.articles);
  },
  changeLoader({ commit }, loadValue) {
    commit('UPDATE_LOADER', loadValue);
  },
};

const mutations = {
  SET_HEADLINES: (state, headlines) => {
    // add id (index +1):
    headlines.forEach((h) => {
      const index = headlines.indexOf(h);
      headlines[index]["id"] = index + 1; // eslint-disable-line
    });
    // push changes:
    state.headlines = headlines;
  },

  UPDATE_HEADLINE: (state, updatedHeadline) => {
    const index = state.headlines.findIndex((headline) => headline.id === updatedHeadline.id);
    if (index !== -1) {
      state.headlines.splice(index, 1, updatedHeadline);
    }
  },

  UPDATE_LOADER: (state, loadValue) => {
    state.loading = loadValue;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
