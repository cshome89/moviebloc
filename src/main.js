import Vue from 'vue'
import {router} from "../routes/index.js"

import App from './App.vue'

/* 엑시오스 모듈 */
import axios from "axios"
import axiosModule from "../axios/aixosModule.js"

/* TEAM 미켈란젤로 모듈 */
import mrgelo from "../lib/mrgelo.core.js"

Vue.prototype.$EventBus = new Vue();
Vue.prototype.$axios = axios;
Vue.prototype.$axiosModule = axiosModule;
Vue.prototype.$mrgelo = mrgelo;

new Vue({
  	el: '#app',
  	render: h => h(App),
  	router
})
