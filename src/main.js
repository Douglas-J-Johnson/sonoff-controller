import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import store from './store';

import config from './config';

import AuthHandler from './components/AuthHandler.vue'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: config.github.accessCodeCallback, component: AuthHandler }
  ]
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
