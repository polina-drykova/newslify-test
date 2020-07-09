/* eslint no-shadow: ["error", { "allow": ["state"] }] */

const state = {
  headlines: [
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem fugiat blanditiis porro incidunt nostrum.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi ratione esse, distinctio, ipsa magnam velit iusto ullam voluptate illo magni asperiores aut in provident ipsam culpa. Dolores quibusdam quas laborum.',
      source: 'Source1',
      urlToImage: 'https://picsum.photos/200/300',
    },
    {
      id: 2,
      title: 'Impedit molestiae velit, alias facere minus optio corporis, sit repudiandae reiciendis at nihil.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae sit, odit facilis officiis aspernatur consequuntur.',
      source: 'Source2',
      urlToImage: 'https://picsum.photos/id/237/200/300',
    },
    {
      id: 3,
      title: 'Exercitationem ducimus temporibus repellendus accusamus dignissimos, est rerum iste, saepe, quis corporis odio.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure sequi deserunt illo distinctio, explicabo impedit vero error quae temporibus dolores.',
      source: 'Source1',
      urlToImage: 'https://picsum.photos/id/227/200/300',
    },
    {
      id: 4,
      title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem fugiat blanditiis porro incidunt nostrum.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem rerum esse cum recusandae eius obcaecati unde quae sunt debitis facere.',
      source: 'Source3',
      urlToImage: 'https://picsum.photos/id/217/200/300',
    },
    {
      id: 5,
      title: 'Impedit molestiae velit, alias facere minus optio corporis, sit repudiandae reiciendis at nihil.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi culpa, veniam possimus atque nulla fuga.',
      source: 'Source2',
      urlToImage: 'https://picsum.photos/id/257/200/300',
    },
    {
      id: 6,
      title: 'Exercitationem ducimus temporibus repellendus accusamus dignissimos, est rerum iste, saepe, quis corporis odio.',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, eveniet laudantium corporis perspiciatis quis reiciendis totam dolorem accusantium. Minima cum libero, magni consectetur porro consequuntur sequi nesciunt praesentium sint eum.',
      source: 'Source3',
      urlToImage: 'https://picsum.photos/id/247/200/300',
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
