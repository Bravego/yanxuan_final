<template>
    <div class="msite-container">
      <header class="header">
        <div class="title">
          <a href="javascript:;" class="logo"></a>
          <div class="input">
            <i class="iconfont icon-search-b"></i>
            <span class="placeholder">搜索商品, 共21738款好物</span>
          </div>
          <div class="login">
            登录
          </div>
        </div>
        <div class="nav-wrap ">
          <div class="nav-scroll">
            <ul class="nav">
              <li>
                <a href="javascript:;">推荐</a>
              </li>
              <li>
                <a href="javascript:;">居家生活</a>
              </li>
              <li>
                <a href="javascript:;">服饰鞋包</a>
              </li>
              <li>
                <a href="javascript:;">美食酒水</a>
              </li>
              <li>
                <a href="javascript:;">个护清洁</a>
              </li>
              <li>
                <a href="javascript:;">母婴亲子</a>
              </li>
              <li>
                <a href="javascript:;">运动旅行</a>
              </li>
              <li>
                <a href="javascript:;">数码家电</a>
              </li>
              <li>
                <a href="javascript:;">礼品特色</a>
              </li>
            </ul>
          </div>
          <div class="more-wrap">
            <span class="more"></span>
          </div>
        </div>
      </header>

    </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default{
      mounted(){
        //创建顶部导航条的滑动
        new BScroll('.nav-scroll',{
            scrollX:true,
            click:true
        })
      }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
 @import "../../common/stylus/mixins.styl"
  .header
    position fixed !important
    width 100%
    .title
      padding .21333rem .4rem
      display flex
      justify-content space-around
      align-items center
      .logo
        display block
        width 1.84rem
        height .53333rem
        background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png)
        background-position center
        background-size cover
        margin-right .1rem
      .input
        height .7rem
        line-height .7rem
        font-size .25rem
        border-radius .10667rem
        background-color #ededed
        padding 0 .2rem
        margin-right .1rem
        .placeholder
          color #666
          font-size .28rem
      .login
        width .9rem;
        height .5rem;
        line-height .5rem;
        font-size .32rem
        color #b4282d
        border 1px solid #b4282d
        border-radius .10667rem
        text-align center
    .nav-wrap
      position relative
      display flex
      align-items center
      .nav-scroll
        width 100%
        .nav
          width 13.5rem
          display flex
          li
            width 1.5rem
            text-align center
            line-height .02rem
            a
              display inline-block
              width 100%
              font-size .3rem
              padding 0 .25rem
              margin-right .2rem
        .more-wrap
          position absolute
          right 0
          width 1rem
          height .54rem
          padding-top .36rem
          padding-left .03rem
          background-color #fff
          .more
            display block
            background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-799ded53ea.png)
            background-repeat no-repeat
            background-size 100% 100%
            width .4rem
            height .4rem
</style>
