import Vue from 'vue';

export default {
  updateName: ({ commit }, name) => {
    commit('updateName', name);
  },

  updatePhone: ({ commit }, phone) => {
    commit('updatePhone', phone);
  },

  updateAddress: ({ commit }, address) => {
    commit('updateAddress', address);
  },

  addPizza: ({ commit, rootState }, payload) => {
    commit('addPizza', {
      ...payload,
      size: rootState.pizzas.list.map((pizza) => pizza.sizes)
        .flat()
        .find((size) => size.id === payload.sizeId),
    });
  },

  incrementPositionQuantity: ({ commit }, payload) => {
    commit('incrementPositionQuantity', payload);
  },

  decrementPositionQuantity: ({ commit }, payload) => {
    commit('decrementPositionQuantity', payload);
  },

  removePosition: ({ commit }, payload) => {
    commit('removePosition', payload);
  },

  create: async ({ commit, getters, rootGetters }) => {
    try {
      const response = await Vue.axios.post('/orders', {
        name: getters.getName,
        phone: getters.getPhone,
        address: getters.getAddress,
        currency: rootGetters.getCurrency,
        delivery_fee: getters.getDeliveryFee,
        pizza_sizes: getters.getPositions
          .filter((position) => position.type === 'pizza')
          .map((position) => ({
            id: position.id,
            price: position.price,
            quantity: position.quantity,
            crust: position.crust,
          })),
      });

      if (response.data.data.status === 'ok') {
        commit('resetOrderInfo');
      }

      return {
        status: 'ok',
      };
    } catch (e) {
      return {
        status: 'error',
        error: 'Something went wrong',
        errorDescription: 'Your order wasn\'t sent.',
      };
    }
  },

  getDeliveryFee: async ({ commit }) => {
    const response = await Vue.axios.get('/delivery-fees');

    commit('updateDeliveryFee', response.data.data);
  },
};
