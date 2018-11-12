/**
 * Created by LQ on 2018/11/12.
 */
//vuex最核心的管理对象store
//如何产生store
//因为vuex是插件，所以要引入vue
import Vue from 'vue'
//引入vuex
import Vuex from 'vuex'

//声明使用
Vue.use(Vuex)
//相当于data的对象
const state = {
  //在这里要初始化状态数据
  count: 0
}
//包含n个用于直接更新状态数据 方法 的对象
const mutations = {
//本例只有两个方法 加1   减1
  INCREMENT (state) {
    state.count++
  },
  DECREMENT (state) {
    state.count--
  },
}
//包含n个用于间接更新状态数据方法的对象
//调用commit()来触发mutation调用 间接更新
const actions = {
  //在组件里触发调用的，组件中有四个，所以他也有四个触发调用
  increment ({commit}) {//监测的参数是个对象，对象里有{commit}方法，解构得到commit函数，执行函数
    //提交mutation，触发对应的mutation调用
    commit('INCREMENT')
  },
  decrement ({commit}) {
    commit('DECREMENT')
  },
  incrementIfOdd ({commit, state}) {
    //这个是执行逻辑判断后才提交
    if (state.count % 2 === 1) {
      commit('INCREMENT')
    }
  },
  incrementAsync ({commit}) {
    //异步提交
    setTimeout(() => {
      commit('INCREMENT')
    },1000)
  },
}
//包含n个基于state数据的getter计算属性方法的对象
const getters = {
  evenOrOdd (state) {
    return state.count % 2 === 1 ? '奇数' : '偶数'
  }
}

//向外暴露一个store对象，他只是vuex其中的一个数据
export default new Vuex.Store({
  //传入配置对象
  state,
  mutations,
  actions,
  getters
})
