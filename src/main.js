import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './styles/main.scss';
import formatDate from './utils/date-format';

Vue.config.productionTip = false;

// Format Date Filter
Vue.filter('formatDate', formatDate);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
