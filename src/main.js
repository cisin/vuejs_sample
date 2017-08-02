import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import App from './App.vue';
import Routes from './routes';

Vue.use(VueRouter);
Vue.use(VueResource);

// routing
const router = new VueRouter({
  routes:Routes,
  mode:'history'
});

//filters
Vue.filter('snippet',function(value){
  return value.slice(0,100)+'....';
});

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
