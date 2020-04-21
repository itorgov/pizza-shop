import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';
import guest from './middlewares/guest';
import auth from './middlewares/auth';
import middlewarePipeline from './middlewarePipeline';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/Index.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Registration.vue'),
    meta: {
      middleware: [
        guest,
      ],
    },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
    meta: {
      middleware: [
        guest,
      ],
    },
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/Profile.vue'),
    meta: {
      middleware: [
        auth,
      ],
    },
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

router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
    return next();
  }
  const { middleware } = to.meta;

  const context = {
    to,
    from,
    next,
    store,
  };

  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1),
  });
});

export default router;
