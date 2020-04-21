export default {
  getName: (state) => state.name,

  getPhone: (state) => state.phone,

  getAddress: (state) => state.address,

  getPositions: (state, getters, rootState, rootGetters) => state.positions.map((position) => ({
    ...position,
    id: position.product.id,
    price: position.product[`price_${rootGetters.getCurrency}`],
  })),

  getDeliveryFee: (state, getters, rootState, rootGetters) => state.deliveryFee[
    rootGetters.getCurrency
  ],

  getPositionsQuantity: (state) => state.positions
    .reduce((sum, position) => sum + position.quantity, 0),

  getPositionsPrice: (state, getters) => getters.getPositions
    .reduce((sum, position) => sum + position.price * position.quantity, 0),

  getTotalPrice: (state, getters) => getters.getPositionsPrice + getters.getDeliveryFee,
};
