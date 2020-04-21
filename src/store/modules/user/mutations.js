export default {
  updateUser: (state, response) => {
    state.id = response.id;
    state.name = response.name;
    state.email = response.email;
    state.phone = response.phone;
  },

  removeUser: (state) => {
    state.id = null;
    state.name = null;
    state.email = null;
    state.phone = null;
  },
};
