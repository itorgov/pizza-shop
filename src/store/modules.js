import order from './modules/order';
import pizzas from './modules/pizzas';

export default {
  order: {
    namespaced: true,
    ...order,
  },
  pizzas: {
    namespaced: true,
    ...pizzas,
  },
};
