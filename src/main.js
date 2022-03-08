import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import { store } from './store/store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueRouter)
Vue.use(Routes)
Vue.config.productionTip = false

const router = new VueRouter({
  routes:Routes,
  mode:"history"
})
new Vue({
  router:router,
  store:store,
  render: h => h(App),
}).$mount('#app')
