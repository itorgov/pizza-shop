export default {
  updateList: (state, pizzas) => {
    state.list = pizzas.map((pizza) => ({
      id: pizza.id,
      name: pizza.name,
      toppings: pizza.toppings,
      image_url: pizza.image_url,
      sizes: pizza.sizes.map((size) => ({
        id: size.id,
        size: size.size,
        price_usd: size.price_usd,
        price_eur: size.price_eur,
      })),
    }));
  },

  updatePage: (state, page) => {
    state.page = page;
  },

  updatePerPage: (state, perPage) => {
    state.perPage = perPage;
  },

  updateTotal: (state, total) => {
    state.total = total;
  },
};
