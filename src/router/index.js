import Vue from 'vue';
import VueRouter from 'vue-router';
import Headlines from '@/components/Headlines.vue';
import Details from '@/views/Details.vue';
import axios from 'axios';
import store from '@/store';

Vue.use(VueRouter);

const routes = [
  {
    // view of all headlines:
    path: '/',
    name: 'Headlines',
    component: Headlines,
    props: true,
  },
  {
    // view headline's details page:
    path: '/details/:id',
    name: 'Details',
    component: Details,
    props: true,
  },
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

// Request interceptor:
axios.interceptors.request.use((config) => {
  // change loading state:
  store.dispatch('changeLoader', true);
  return config;
}, (error) => {
  // change loading state:
  store.dispatch('changeLoader', false);
  return Promise.reject(error);
});

// Response interceptor
axios.interceptors.response.use((response) => {
  // change loading state:
  store.dispatch('changeLoader', false);
  return response;
}, (error) => {
  console.log(error);
  store.dispatch('changeLoader', false);
  return Promise.reject(error);
});

export default router;
