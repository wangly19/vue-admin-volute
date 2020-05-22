import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/plugin'
import i18n from '@/plugin/i18n'
import '@/router/intercept'

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
