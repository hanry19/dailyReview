import Vue from 'vue'
import App from './App.vue'
import axios from "axios";
import api from '@/mixins/index.js';
import router from "./router/router.js";



Vue.config.productionTip = false


Vue.use(api);


new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
