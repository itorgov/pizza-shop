import getters from './user/getters';
import mutations from './user/mutations';
import actions from './user/actions';

const state = {
  id: null,
  name: null,
  email: null,
  phone: null,
};

export default {
  state,
  getters,
  mutations,
  actions,
};
