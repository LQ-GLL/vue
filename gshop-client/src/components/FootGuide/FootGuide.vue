<template>
  <footer class="footer_guide border-1px">
    <!--on是动态的，可能有也可能没有，：class强制绑定；使用对象模式写：{}类名确定，有没有不确定-->
    <!--运用编程式路由导航点击@onclick（点击他后要跳转）；方法名：goto；路径；定义回调函数-->
    <a href="javascript:;" class="guide_item" :class="{on: $route.path==='/msite'}" @click="goto('./msite')" >
      <span class="item_icon">
        <i class="iconfont icon-waimai"></i>
      </span>
      <span>外卖</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: $route.path==='/search'}" @click="goto('./search')">
      <span class="item_icon">
        <i class="iconfont icon-search"></i>
      </span>
      <span>搜索</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: $route.path==='/order'}" @click="goto('./order')">
      <span class="item_icon">
        <i class="iconfont icon-dingdan"></i>
      </span>
      <span>订单</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: $route.path==='/profile'}" @click="goto('./profile')">
      <span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span>我的</span>
    </a>
  </footer>
</template>

<script>
  export default {
    methods: {
      goto (path) {
        //编程式路由导航 ；push replace
        this.$router.replace(path)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #02a774
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>
