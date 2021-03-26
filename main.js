/*
 * @Author: Quinn
 * @Date: 2020-08-28 19:27:59
 * @LastEditTime: 2021-01-05 21:04:05
 * @LastEditors: quinn
 * @Description:  
 */
import appointment from '@/pages/appointment/appointment.vue';
import home from '@/pages/home/home.vue';
import mine from '@/pages/mine/mine.vue';
import report from '@/pages/report/report.vue';
import Vue from 'vue';
import App from './App';
import request from './utils/request'
import store from './store'

Vue.prototype.$store = store
Vue.prototype.$request = request

Vue.config.productionTip = false;

App.mpType = 'app';
Vue.component('Home', home);
Vue.component('Mine', mine);
Vue.component('Appointment', appointment);
Vue.component('Report', report);
const app = new Vue({
  ...App,
});
app.$mount();