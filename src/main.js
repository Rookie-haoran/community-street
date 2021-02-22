import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import VueTypedJs from 'vue-typed-js';
import http from '@/utils/http';
import store from './store'



Vue.prototype.$http = http;
Vue.use(VueTypedJs)
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
