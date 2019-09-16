import Vue from 'vue';
import VueRouter from 'vue-router';
import Films from '../views/Films.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/films',
    alias: '/',
    name: 'films',
    component: Films
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
