import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import './mock/mock'
import './router/permission'
import './common/common.css'
import * as echarts from 'echarts'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.prototype.$echarts = echarts;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
