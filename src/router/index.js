import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/Index.vue'),
  },
  {
    path: '/pizzas',
    name: 'pizzas',
    component: () => import('../views/Pizzas.vue'),
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/Cart.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
