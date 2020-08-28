import appointment from '@/pages/appointment/appointment.vue';
import home from '@/pages/home/home.vue';
import mine from '@/pages/mine/mine.vue';
import report from '@/pages/report/report.vue';
import Vue from 'vue';
import App from './App';

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
