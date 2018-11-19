/**
 * Created by LQ on 2018/11/15.
 */
//等dom结构渲染完，dom上的依赖也解析完，再执行js
window.onload = function () {
  //一、footer有点击事件（响应）
  //上面四个人屏幕要切换
  //获取元素：拿到所有的footerItem
  var footerItems = document.querySelectorAll('.footerItem')
  //获取section
  var sections = document.querySelectorAll('section')
  
  //给每
  //一个footer item加点击事件；每一个：遍历 for循环
  for (let i = 0; i < footerItems.length; i++) {
    //拿到每一项：var item;是footerItem的第i项
    var item = footerItems[i]
    //item加点击事件
    //移动端的动作不能加onclick，因为有300ms延迟
    //移动端有touchstart(易产生误触) touchend(防误触)
    item.addEventListener('touchend',function () {
    
    //先去掉所有高亮，再点谁让谁亮
    //1、重置 2、加样式
    //所有的都清除，再遍历一次
      for (var j = 0; j < footerItems.length; j++) {
        footerItems[j].className = 'footerItem'
        
        //操作当前的section，也应该放在点击事件里，是底部footer的东西
        //之所以能显示，是因为有on；先去掉所有的on，再给对应的content加上哦那
        //对应关系0 1 2 3
        //重置为空
        sections[j].className = ''
     
      }
      //操作当前的,追加一个active
      this.className = 'footerItem active'
  
      //这个地方不是this了，此时解决循环遍历加监听
      //把var换成let，let有块级作用域
      /*
       ###循环遍历加监听总结：
          ###使用let（拥有了块级作用域）
          ###给当前项追加一个计数器 index
          ###闭包()()
       */
      sections[i].className = 'on'
    })
  }
  
  //二、轮播图
  //多个轮播：单例模式时：var swiper 需要变量接住
  //此时只有一个轮播
  new Swiper('.swiper-container', {
    centeredSlides: true,
    // autoplay: {
    //   delay: 2500,
    //   //鼠标干预后，自己不自动轮播了
    //   disableOnInteraction: true,
    // },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    //循环轮播
    loop:true
  });
}