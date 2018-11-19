/**
 * Created by LQ on 2018/11/19.
 */
/*
路由器对象模块，要向外暴露
 */
import Vue from 'vue'
import  VueRouter from 'vue-router'

//定义了四个路由组件要引入
import MSite from '../pages/MSite/MSite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'

//路由器声明使用vue插件
Vue.use(VueRouter)

//只需要暴露一个对象：default
//路由器对象需要配置 VueRouter，去入口js中配
export default new VueRouter({
  //去掉#
  mode: 'history',
  //配置应用中所有路由
  routes: [
    //每一个数组元素的类型是对象：代表一个路由：路由由两个部分组成
    {
      path: '/msite',
      component: MSite
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/profile',
      component: Profile
    },
    //默认的
    {
      path: '/',
      redirect: 'msite'
    }
  ]
})
