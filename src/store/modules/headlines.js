/* eslint no-shadow: ["error", { "allow": ["state"] }] */
import axios from 'axios';

const state = {
  headlines: [],
};

const getters = {
  // get all headlines:
  allHeadlines: (state) => state.headlines,
  // find particular headline:
  getHeadlineById: (state) => (id) => state.headlines.find((headline) => headline.id === id),
};

const actions = {
  async fetchHeadlines({ commit }) {
    // call api to get headlines:
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=12');
    // Pass data to mutations:
    commit('SET_HEADLINES', response.data);
  },
  async updateHeadline({ commit }, updatedHeadline) {
    // call api to get headlines:
    const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${updatedHeadline.id}`, updatedHeadline);
    // Pass data to mutations:
    commit('UPDATE_HEADLINE', response.data);
  },
};

const mutations = {
  SET_HEADLINES: (state, headlines) => (state.headlines = headlines), // eslint-disable-line

  UPDATE_HEADLINE: (state, updatedHeadline) => {
    const index = state.headlines.findIndex((headline) => headline.id === updatedHeadline.id);
    if (index !== -1) {
      state.headlines.splice(index, 1, updatedHeadline);
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
