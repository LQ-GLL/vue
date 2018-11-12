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
//    data () {
//      return {
//        //用vuex来管理这个count状态
//        count: 0
//      }
//    },
    computed: {
      evenOrOdd () {
        return this .$store.getters.evenOrOdd
      },
      count () {
        return this.$store.state.count
      }
    },
    //写四个事件回调函数，view触发的事件
    methods: {
      //运用vuex，这里通知vuex更新
      increment () {
       //这个方法的功能
       //this.count++
        this.$store.dispatch('increment')
      },
      decrement () {
//        this.count--
        this.$store.dispatch('decrement')
      },
      incrementIfOdd () {
//        if (this.count % 2 === 1) {
//          this.count++
//        }
        this.$store.dispatch('incrementIfOdd')
      },
      incrementAsync () {
//        setTimeout(() => {
//          this.count++
//        },500)
        this.$store.dispatch('incrementAsync')
      },
    }
  }
</script>

<style>
</style>
