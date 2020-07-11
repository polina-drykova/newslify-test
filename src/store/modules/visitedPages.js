/* eslint no-shadow: ["error", { "allow": ["state"] }] */

const state = {
  visitedPages: [],
};

const getters = {
  // get all visited pages:
  allVisitedPages: (state) => state.visitedPages,
};

const actions = {
  // adding new visited page:
  async addVisitedPage({ commit }, visitedPage) {
    const visited = visitedPage;
    commit('ADD_VISITED_PAGE', visited);
  },
};

const mutations = {
  ADD_VISITED_PAGE: (state, visitedPage) => {
    // Looping through an array of visited pages:
    state.visitedPages.forEach((page) => {
      // check if page already exist:
      if (page.pageId === visitedPage.pageId) {
        const index = page.id;
        // check if page already exist(if yes, romove item):
        state.visitedPages.splice(index, 1);
      }
    });
    state.visitedPages = state.visitedPages.concat(visitedPage);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
