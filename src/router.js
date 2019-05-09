import Vue from 'vue';
import Router from 'vue-router';
import BookCategories from './views/BookCategories.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'book-categories',
      component: BookCategories,
    },
    {
      path: '/category/:name',
      name: 'category',
      component: () => import('./views/BestSellersBooks.vue'),
    },
  ],
});
