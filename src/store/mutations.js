export default {
  initializeStore(state) {
    if (localStorage.getItem('store')) {
      this.replaceState({ ...state, ...JSON.parse(localStorage.getItem('store')) });
    }
  },

  updateCurrency: (state, currency) => {
    state.currency = currency;
  },
};
