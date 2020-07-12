import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    // view of all headlines:
    path: '/',
    name: 'Home',
    component: Home,
    props: true,
  },
  {
    // view headline's details page:
    path: '/details/:id',
    name: 'Details',
    props: true,
    component: () => import(/* webpackChunkName: "Details" */ '../views/Details.vue'),
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
