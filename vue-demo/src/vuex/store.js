/**
 * Created by LQ on 2018/11/13.
 */
//vuex来管理vue的状态，store是核心管理对象，引入vue、vuex
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from 'actions'
import getters from 'getters'
//声明使用
Vue.use(Vuex)
//向外暴露store对象
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

//store对象也需要做配置，在main.js中配置

