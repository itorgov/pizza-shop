export default {
  isAuthenticated: (state) => state.id !== null,

  getUser: (state) => ({
    id: state.id,
    name: state.name,
    email: state.email,
    phone: state.phone,
  }),
};
