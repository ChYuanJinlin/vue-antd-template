import Vue from 'vue'
import store from './store'
import i18n from './i18n'
import App from './App'
import router from './router'
import { Button, message,Pagination,LocaleProvider  } from 'ant-design-vue';
import  'ant-design-vue/dist/antd.less'
import api  from './request'
Vue.use(Button);
Vue.use(Pagination);
Vue.use(LocaleProvider);

Vue.prototype.$message = message;
Vue.prototype.$api = api;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  components: { App },
  template: '<App/>'
})
