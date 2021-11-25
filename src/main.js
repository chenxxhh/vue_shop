import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
//导入axios,并且挂载到Vue的原型对象上使得所以组件都可以看到axios,配置默认设置
import axios from "axios";
Vue.prototype.$http=axios
axios.defaults.baseURL="https://lianghj.top:8888/api/private/v1/"

//导入全局样式表
import './assets/global.css'
//

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
