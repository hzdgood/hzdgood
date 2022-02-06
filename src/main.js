import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Bus } from './components/Bus.js'

Vue.config.productionTip = false

// class Bus {
//   constructor(){
//       this.callbacks = {}
//   }
//   $on(name, fn){
//       this.callbacks[name] = this.callbacks[name] || []
//       this.callbacks[name].push(fn);
//   }
//   $emit(name,args){
//       if(this.callbacks[name]){
//           this.callbacks[name].forEach(cb => cb(args))
//       }
//   }
// }

Vue.prototype.$bus = new Bus()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
