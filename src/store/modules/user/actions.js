import Vue from 'vue';

export default {
  register: async ({ commit }, payload) => {
    try {
      await Vue.axios.get('/sanctum/csrf-cookie');
      const response = await Vue.axios.post('/auth/register', {
        name: payload.name,
        email: payload.email,
        phone: payload.phone,
        password: payload.password,
        password_confirmation: payload.password_confirmation,
      });

      commit('updateUser', response.data.data);

      return {
        errors: null,
      };
    } catch (exception) {
      return {
        errors: exception.response.data.errors,
      };
    }
  },

  login: async ({ commit }, payload) => {
    try {
      await Vue.axios.get('/sanctum/csrf-cookie');
      const response = await Vue.axios.post('/auth/login', {
        email: payload.email,
        password: payload.password,
      });

      commit('updateUser', response.data.data);

      return {
        errors: null,
      };
    } catch (exception) {
      return {
        errors: exception.response.data.errors,
      };
    }
  },

  logout: async ({ commit }) => {
    try {
      await Vue.axios.get('/sanctum/csrf-cookie');
      await Vue.axios.post('/auth/logout');

      commit('removeUser');

      return true;
    } catch (exception) {
      return false;
    }
  },
};
