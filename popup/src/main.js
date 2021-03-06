import Vue from 'vue'
import App from './App.vue'
import Popup from './components/Popup'

Vue.config.productionTip = false

Vue.use(Popup)

new Vue({
  render: h => h(App),
}).$mount('#app')
