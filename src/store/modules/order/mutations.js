const findPositionIndex = (state, productType, productId) => state.positions.findIndex(
  (position) => position.type === productType && position.product.id === productId,
);

export default {
  updateName: (state, name) => {
    state.name = name;
  },

  updatePhone: (state, phone) => {
    state.phone = phone;
  },

  updateAddress: (state, address) => {
    state.address = address;
  },

  addPizza: (state, payload) => {
    const addedPosition = state.positions
      .find((position) => position.product.id === payload.size.id);

    if (addedPosition) {
      addedPosition.quantity += payload.quantity;
    } else {
      state.positions.push({
        type: 'pizza',
        product: payload.size,
        name: payload.name,
        description: payload.description,
        quantity: payload.quantity,
        crust: payload.crust,
      });
    }
  },

  incrementPositionQuantity: (state, payload) => {
    const positionIndex = findPositionIndex(state, payload.type, payload.id);

    if (positionIndex !== -1) {
      state.positions[positionIndex].quantity += 1;
    }
  },

  decrementPositionQuantity: (state, payload) => {
    const positionIndex = findPositionIndex(state, payload.type, payload.id);

    if (positionIndex !== -1 && state.positions[positionIndex].quantity > 1) {
      state.positions[positionIndex].quantity -= 1;
    }
  },

  removePosition: (state, payload) => {
    const positionIndex = findPositionIndex(state, payload.type, payload.id);

    if (positionIndex !== -1) {
      state.positions.splice(positionIndex, 1);
    }
  },

  updateDeliveryFee: (state, fees) => {
    state.deliveryFee.usd = fees.usd ? parseInt(fees.usd, 10) : 0;
    state.deliveryFee.eur = fees.eur ? parseInt(fees.eur, 10) : 0;
  },

  resetOrderInfo: (state) => {
    state.name = '';
    state.phone = '';
    state.address = '';
    state.positions = [];
  },
};
