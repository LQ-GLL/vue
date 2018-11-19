/**
 * Created by LQ on 2018/11/19.
 */
import Vue from 'vue'
import App from './App.vue'
//自定义的模块一定要 . 开头
import router from './router'
/*
eslint-disable no-new
 */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})

