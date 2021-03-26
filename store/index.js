/*
 * @Author: Quinn
 * @Date: 2021-01-04 21:40:10
 * @LastEditTime: 2021-01-05 20:10:05
 * @LastEditors: quinn
 * @Description:  
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		app: 'gyq'
	},
	mutations: {},
	actions: {
		getUserInfo: function ({
			commit
		}) {
			console.log('进入到getUserInfo')
			return new Promise(function (resolve) {
				Vue.prototype.$http.get('/base/user/getUser').then(msg => {
					console.log('获取到用户信息', msg)
					resolve()
				})
			})

		}
	},
	getters: {}

})
export default store