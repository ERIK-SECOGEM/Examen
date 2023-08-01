import Vue from 'vue'
import App from './App.vue'
import 'bulma'
import es from 'vee-validate/dist/locale/es'
import VeeValidate, { Validator } from 'vee-validate'
import 'leaflet/dist/leaflet.css';

require('./plugins/fontawesome')
require('./plugins/leaftleft')

Vue.config.productionTip = false
Vue.use(VeeValidate)
Validator.localize('es', es)

new Vue({
  render: h => h(App),
}).$mount('#app')
