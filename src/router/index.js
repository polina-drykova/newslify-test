import Vue from 'vue';
import VueRouter from 'vue-router';
import Headlines from '@/components/Headlines.vue';
import Details from '@/views/Details.vue';

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

export default router;
