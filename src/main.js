// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js';
import VueJsonp from 'vue-jsonp';
import api from '@/axios/api'
Vue.config.productionTip = false


Vue.use(VueJsonp);

// 使用插件进行jsonp请求，获得第三方的信息
Vue.jsonp("http://api.map.baidu.com/geocoder/v2/?ak=C93b5178d7a8ebdb830b9b557abce78b&callback=renderReverse&location=22.62,114.07&output=json&pois=0").then(res => {
  console.log(res.result.addressComponent.street)
  console.log(res.result.addressComponent.city)
  // store.commit("updateSelectCity",res.result.addressComponent.city)
})
// console.log(store)



// 测试远程获取数据
// api.userLogin({name:'stew123',password:'stew1234'}).then(data=>{
//   console.log(data);
// })







/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
