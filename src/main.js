import Vue from 'vue';
import Antd from 'ant-design-vue';
import App from './App.vue';
import router from './router';
import 'ant-design-vue/dist/antd.css';
import i18n from '@/common/i18n';

Vue.config.productionTip = false;

Vue.use(Antd);

new Vue({
  i18n,
  router,
  render: h => h(App),
}).$mount('#app');
