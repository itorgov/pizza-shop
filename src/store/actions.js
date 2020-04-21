export default {
  updateCurrency: ({ commit }, currency) => {
    commit('updateCurrency', currency);
  },

  restoreStore: ({ commit }) => {
    if (localStorage.getItem('store')) {
      commit('initializeStore', JSON.parse(localStorage.getItem('store')));
    }
  },
};
