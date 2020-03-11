import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'

import "bootstrap";
import "bootstrap-vue";
import "normalize.css";
import "../src/filter";
Vue.config.productionTip = false
Vue.directive("bold",{
  bind:function(el){
    el.style.fontWeight="bold";
    el.style.fontSize = "26px";
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
  // render:function(h) {
  //   return h(App)

  // },
}).$mount('#app')
