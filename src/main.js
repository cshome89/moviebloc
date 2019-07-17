import Vue from 'vue'
import {router} from "../routes/index.js"

import App from './App.vue'

Vue.prototype.$EventBus = new Vue();

new Vue({
  	el: '#app',
  	render: h => h(App),
  	router
})
