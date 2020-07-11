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
    const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=099148be22804e849a0c6fe022b7cf5e');
    // Pass data to mutations:
    commit('SET_HEADLINES', response.data.articles);
  },
  async updateHeadline({ commit }, updatedHeadline) {
    // call api to get headlines:
    const response = await axios.put(`https://newsapi.org/v2/top-headlines?country=us&apiKey=099148be22804e849a0c6fe022b7cf5e/${updatedHeadline.id}`, updatedHeadline);
    // Pass data to mutations:
    commit('UPDATE_HEADLINE', response.data);
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
};

export default {
  state,
  getters,
  actions,
  mutations,
};
