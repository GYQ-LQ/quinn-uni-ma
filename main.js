import home from '@/pages/home/home.vue';
import mine from '@/pages/mine/mine.vue';
import order from '@/pages/order/order.vue';
import report from '@/pages/report/report.vue';
import Vue from 'vue';
import App from './App';

Vue.config.productionTip = false;

App.mpType = 'app';
Vue.component('Home', home);
Vue.component('Mine', mine);
Vue.component('Order', order);
Vue.component('Report', report);

const app = new Vue({
  ...App,
});
app.$mount();
