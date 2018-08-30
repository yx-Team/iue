import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Iue from '../packages'
Vue.config.productionTip = false
Vue.use(Iue)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
