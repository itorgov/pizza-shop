import getters from './order/getters';
import mutations from './order/mutations';
import actions from './order/actions';

const state = {
  name: '',
  phone: '',
  address: '',
  deliveryFee: {
    usd: 0,
    eur: 0,
  },
  positions: [],
};

export default {
  state,
  getters,
  mutations,
  actions,
};
