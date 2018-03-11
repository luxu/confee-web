import Vue from 'vue';
import App from './app/Main.vue';
// import VueFastAxios from 'vue-fast-axios';
// import Carousel from './components/Carousel.vue';
import router from './router';
import store from './vuex';

// Vue.use(VueFastAxios)

new Vue({
  el: '#app',
  router,
  store,
  // Carousel,
  render: h => h(App)
})
