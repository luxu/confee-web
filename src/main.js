import Vue from 'vue';
import App from './app/Main.vue';
import router from './router';
import store from './vuex';

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
