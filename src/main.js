import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './styles/main.scss';
import formatDate from './utils/date-format';
import numberToRoman from './utils/roman-numeral';

Vue.config.productionTip = false;

// Format Date Filter
Vue.filter('formatDate', formatDate);

// Number To Roman Numeral Filter
Vue.filter('numberToRoman', numberToRoman);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
