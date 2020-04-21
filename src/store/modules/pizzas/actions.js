import Vue from 'vue';

export default {
  loadPage: async ({ commit, getters }) => {
    const response = await Vue.axios.get('/api/pizzas', {
      params: {
        page: getters.getCurrentPage,
      },
    });

    commit('updateList', response.data.data);
    commit('updateTotal', response.data.meta.total);
    commit('updatePerPage', response.data.meta.per_page);
  },

  changePageTo: ({ commit }, page) => {
    commit('updatePage', page);
  },
};
