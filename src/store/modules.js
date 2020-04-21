import user from './modules/user';
import order from './modules/order';
import pizzas from './modules/pizzas';

export default {
  user: {
    namespaced: true,
    ...user,
  },
  order: {
    namespaced: true,
    ...order,
  },
  pizzas: {
    namespaced: true,
    ...pizzas,
  },
};
