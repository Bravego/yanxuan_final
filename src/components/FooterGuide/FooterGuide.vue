<template>
  <footer class="footer-container">
    <a href="javascript:;" class="item" @click="goTo('/msite')" :class="{active:isCurrentClass('/msite')}">
      <i class="iconfont icon-shouye"></i>
      <span class="text">首页</span>
    </a>
    <a href="javascript:;" class="item" @click="goTo('category')" :class="{active:isCurrentClass('/category')}">
      <i class="iconfont icon-filing-cabinet"></i>
      <span class="text">分类</span>
    </a>
    <a href="javascript:;" class="item" @click="goTo('topic')" :class="{active:isCurrentClass('/topic')}">
      <i class="iconfont icon-weibiaoti2"></i>
      <span class="text">识物</span>
    </a>
    <a href="javascript:;" class="item" @click="goTo('cart')" :class="{active:isCurrentClass('/cart')}">
      <i class="iconfont icon-gouwuche"></i>
      <span class="text">购物车</span>
    </a>
    <a href="javascript:;" class="item" @click="goTo('profile')" :class="{active:isCurrentClass('/profile')}">
      <i class="iconfont icon-icon03"></i>
      <span class="text">个人</span>
    </a>
  </footer>
</template>

<script>
    export default {
        methods:{
            //路由跳转
          goTo(path){
              this.$router.replace(path)
          },
          //切换类名
          isCurrentClass(path){
            return path === this.$route.fullPath
          }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .footer-container
    position fixed
    bottom 0
    left 0
    z-index 5
    display flex
    justify-content: space-around
    width 100%
    height .98rem
    background-color #fafafa
    padding .16rem
    box-sizing border-box
    border-top .01rem solid #d9d9d9
    .item
      display flex
      flex-direction column
      font-size .24rem
      color #7F7F7F
      line-height .36rem
      text-align center
      &.active
        color red
      i
        font-size .45rem
        margin-bottom .02rem
        padding-left .01rem






</style>
