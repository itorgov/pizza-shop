import getters from './pizzas/getters';
import mutations from './pizzas/mutations';
import actions from './pizzas/actions';

const state = {
  page: 1,
  total: 1,
  perPage: 1,
  list: [],
};

export default {
  state,
  getters,
  mutations,
  actions,
};
