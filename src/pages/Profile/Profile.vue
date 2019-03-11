<template>
    <div class="profileContainer">
      <div class="header">
        <a href="javascript:;" @click="$router.replace('/msite')" class="msite">
          <i class="iconfont icon-shouye"></i>
        </a>
        <h2  @click="$router.replace('/msite')"></h2>
        <a href="javascript:;" @click="$router.replace('/msite')" class="search">
          <i class="iconfont icon-search-b"></i>
        </a>
        <a href="javascript:;" @click="$router.replace('/msite')" class="cart">
          <i class="iconfont icon-gouwuche"></i>
        </a>
      </div>
      <div class="main">
        <div class="m-top">
          <div class="bigImg">
            <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png">
          </div>
        </div>
        <div class="m-middle">
          <div class="logPhone" @click="goLogin(true)">
            <i class="iconfont icon-shouji"></i>
            <span>手机号码登录</span>
          </div>
          <div class="logMail" @click="goLogin(false)">
            <i class="iconfont icon-youxiang"></i>
            <span>邮箱帐号登录</span>
          </div>
          <p class="register">
            <span>
              手机号快捷注册
              <i class="iconfont icon-gengduo"></i>
            </span>
          </p>
        </div>
        <div class="m-bottom">
          <ul>
            <li>
              <span>
                <i class="iconfont icon-weixin"></i>
                微信
              </span>
            </li>
            <li class="QQ">
              <span>
                <i class="iconfont icon-QQ"></i>
                QQ
              </span>
            </li>
            <li>
              <span>
                <i class="iconfont icon-weibo"></i>
                微博
              </span>
            </li>
          </ul>
        </div>

      </div>
    </div>
</template>

<script>
    export default {

        methods:{
          goLogin(boolean){
              this.$router.push({name:'loginPage',path:'/login',params:{boolean}})
          }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .profileContainer
    .header
      display flex
      width 710px
      height 88px
      padding 0 20px
      background-color #fff
      a
        display block
        line-height 90px
        i
          font-size 64px
      .msite
        margin-right 206px
      .search
        margin-right 30px
      h2
        width 156px
        height 88px
        margin-right 126px
        background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png)
        background-size 100% 50%
        background-repeat no-repeat
        background-position 0
    .main
      width 750px
      height 1246px
      .m-top
        display flex
        align-items center
        width 750px
        height 410px
        .bigImg
          width 750px
          height 90px
          text-align center
          img
            width 268px
            height 90px
      .m-middle
        display flex
        flex-direction column
        justify-content space-around
        align-items center
        width 750px
        height 292px
        font-size 32px
        margin-bottom 450px
        div
          width 670px
          height 94px
          line-height 94px
          text-align center
          border 1px solid #b4282d
          color #b4282d
        .logPhone
          background-color #b4282d
          color #fff
        .register
          width 670px
          text-align center

      .m-bottom
        width 750px
        height 40px
        ul
          width 552px
          margin 0 auto
          display flex
          li
            width 184px
            text-align center
            height 40px
            line-height 40px
            color #333
          .QQ
            border-right 2px solid #000
            border-left 2px solid #000

</style>
