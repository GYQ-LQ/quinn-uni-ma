/*
 * @Author: Quinn
 * @Date: 2021-01-05 20:17:32
 * @LastEditTime: 2021-03-26 11:08:56
 * @LastEditors: quinn
 * @Description:  
 */
const baseUrl = 'http://localhost:8000/api'
const request = (url = '', data = {}, method = 'GET', header = {}) => {
    uni.showLoading({
        title: '加载中',
        mask: true
    })
    return new Promise((resolve, reject) => {
        uni.request({
            url: baseUrl + url,
            method,
            data,
            header,
            dataType: 'json',
        }).then((response) => {
            setTimeout(function () {
                uni.hideLoading();
            }, 200);
            let [error, res] = response;
            resolve(res.data);
        }).catch(error => {
            let [err, res] = error;
            reject(err)
        })
    });
}
export default request