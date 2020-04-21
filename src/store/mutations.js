export default {
  initializeStore(state, restoredState) {
    this.replaceState({ ...state, ...restoredState });
  },

  updateCurrency: (state, currency) => {
    state.currency = currency;
  },
};
