import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins';

Vue.config.productionTip = true;

new Vue({
  router,
  store,
  beforeCreate() {
    this.$store.commit('initializeStore');
  },
  render: (h) => h(App),
}).$mount('#app');
