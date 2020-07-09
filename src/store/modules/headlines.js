/* eslint no-shadow: ["error", { "allow": ["state"] }] */

const state = {
  headlines: [
    {
      id: 1,
      title: 'Headline1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem fugiat blanditiis porro incidunt nostrum.',
      source: 'Source1',
    },
    {
      id: 2,
      title: 'Headline2',
      description:
        'Impedit molestiae velit, alias facere minus optio corporis, sit repudiandae reiciendis at nihil.',
      source: 'Source2',
    },
    {
      id: 3,
      title: 'Headline3',
      description:
        'Exercitationem ducimus temporibus repellendus accusamus dignissimos, est rerum iste, saepe, quis corporis odio.',
      source: 'Source1',
    },
    {
      id: 4,
      title: 'Headline4',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem fugiat blanditiis porro incidunt nostrum.',
      source: 'Source3',
    },
    {
      id: 5,
      title: 'Headline5',
      description:
        'Impedit molestiae velit, alias facere minus optio corporis, sit repudiandae reiciendis at nihil.',
      source: 'Source2',
    },
    {
      id: 6,
      title: 'Headline6',
      description:
        'Exercitationem ducimus temporibus repellendus accusamus dignissimos, est rerum iste, saepe, quis corporis odio.',
      source: 'Source3',
    },
  ],
};

// get all headlines:
const getters = {
  allHeadlines: (state) => state.headlines,
};

const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
