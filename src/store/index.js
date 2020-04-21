import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';
import modules from './modules';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    currency: 'usd',
  },
  getters,
  mutations,
  actions,
  modules,
});

store.commit('initializeStore');

store.subscribe((mutation, state) => {
  localStorage.setItem('store', JSON.stringify({
    currency: state.currency,
    user: state.user,
    order: state.order,
  }));
});

export default store;
