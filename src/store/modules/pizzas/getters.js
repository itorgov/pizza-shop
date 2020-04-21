export default {
  getCurrentPage: (state) => state.page,

  getItemsPerPage: (state) => state.perPage,

  getTotalItems: (state) => state.total,

  getList: (state, getters, rootState, rootGetters) => state.list.map((pizza) => ({
    ...pizza,
    sizes: pizza.sizes.map((size) => ({
      id: size.id,
      size: size.size,
      price: size[`price_${rootGetters.getCurrency}`],
    })),
    minPrice: Math.min(...pizza.sizes.map((size) => size[`price_${rootGetters.getCurrency}`])),
  })),
};
