import Vue from 'vue';
import VueRouter from 'vue-router';
import Films from '../views/Films.vue';
import FilmDetails from '../views/FilmDetails.vue';
import NotFound from '../views/NotFound.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/films',
    alias: '/',
    name: 'films',
    component: Films
  },
  {
    path: '/films/:id',
    name: 'FilmDetails',
    component: FilmDetails
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

export default router;
