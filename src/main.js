// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import Vuex from 'vuex'


Vue.use(Vuex)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,//******************************************************把store放到这里就可以在任意组件都访问到了 */
  router,
  components: { App },
  template: '<App/>'
})
