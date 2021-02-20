import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import VueTypedJs from 'vue-typed-js';
import http from './http'


Vue.prototype.$http = http;
Vue.use(VueTypedJs)
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
