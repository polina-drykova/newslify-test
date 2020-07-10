/* eslint no-shadow: ["error", { "allow": ["state"] }] */

const state = {
  headlines: [
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem fugiat blanditiis porro incidunt nostrum.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi ratione esse, distinctio, ipsa magnam velit iusto ullam voluptate illo magni asperiores aut in provident ipsam culpa. Dolores quibusdam quas laborum.',
      source: 'Source1',
      urlToImage: 'https://www.fillmurray.com/640/360',
    },
    {
      id: 2,
      title: 'Impedit molestiae velit, alias facere minus optio corporis, sit repudiandae reiciendis at nihil.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae sit, odit facilis officiis aspernatur consequuntur.',
      source: 'Source2',
      urlToImage: 'https://www.placecage.com/640/360',
    },
    {
      id: 3,
      title: 'Exercitationem ducimus temporibus repellendus accusamus dignissimos, est rerum iste, saepe, quis corporis odio.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure sequi deserunt illo distinctio, explicabo impedit vero error quae temporibus dolores.',
      source: 'Source1',
      urlToImage: 'http://placeimg.com/640/360',
    },
    {
      id: 4,
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem fugiat blanditiis porro incidunt nostrum.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem rerum esse cum recusandae eius obcaecati unde quae sunt debitis facere.',
      source: 'Source3',
      urlToImage: 'https://placebear.com/640/360',
    },
    {
      id: 5,
      title: 'Impedit molestiae velit, alias facere minus optio corporis, sit repudiandae reiciendis at nihil.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi culpa, veniam possimus atque nulla fuga.',
      source: 'Source2',
      urlToImage: 'https://baconmockup.com/640/360',
    },
    {
      id: 6,
      title: 'Exercitationem ducimus temporibus repellendus accusamus dignissimos, est rerum iste, saepe, quis corporis odio.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, eveniet laudantium corporis perspiciatis quis reiciendis totam dolorem accusantium. Minima cum libero, magni consectetur porro consequuntur sequi nesciunt praesentium sint eum.',
      source: 'Source3',
      urlToImage: 'http://placeimg.com/640/360',
    },
  ],
};

const getters = {
  // get all headlines:
  allHeadlines: (state) => state.headlines,
  // find particular headline:
  getHeadlineById: (state) => (id) => state.headlines.find((headline) => headline.id === id),
};

const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
