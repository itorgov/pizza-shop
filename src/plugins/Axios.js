import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL;
axios.defaults.withCredentials = true;
axios.defaults.headers.common.Accept = 'application/json';
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

Vue.use(VueAxios, axios);
