import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { firestorePlugin } from 'vuefire'
Vue.use(firestorePlugin)
Vue.config.productionTip = false
var VueScrollTo = require('vue-scrollto');
 
Vue.use(VueScrollTo)
Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
