<template>
  <div>
                                     <!--计算属性（根据count来决定-->
    <p>click {{count}} times count is {{evenOrOdd}}</p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        //用vuex来管理这个count状态
        count: 0
      }
    },
    //写四个事件回调函数，view触发的事件
    methods: {
      increment () {
        //这个方法的功能
        this.count++
      },
      decrement () {
        this.count--
      },
      incrementIfOdd () {
        if (this.count % 2 === 1) {
          this.count++
        }
      },
      incrementAsync () {
        setTimeout(() => {
          this.count++
        },500)
      },
    }
  }
</script>

<style>
</style>
