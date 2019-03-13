<template>
    <div class="cartContainer">
      <div class="header">
        <span class="cartTitle">购物车</span>
        <span class="getCard" @click="$router.push('/profile')">领券</span>
      </div>
      <div class="main">
        <ul class="activities">
          <li>30天无忧退货</li>
          <li>48小时快速退款</li>
          <li>满88元免邮费</li>
        </ul>
        <div class="middleImg"></div>
        <div class="login">
          <p class="addSomething">去添加点什么吧</p>
          <div class="log" @click="$router.push('/profile')">登录</div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .cartContainer
    width 750px
    .header
      width 750px
      height 96px
      line-height 96px
      text-align center
      .cartTitle
        font-size 40px
      .getCard
        position absolute
        right 46px
        font-size 32px
        color #B4282D
    .main
      display flex
      flex-direction column
      position relative
      width 750px
      height 1200px
      border-top 1px solid #eee
      background-color #f4f4f4
      .activities
        display flex
        align-items center
        justify-content space-around
        width 750px
        height 70px
        color #666
      .middleImg
        position absolute
        top 440px
        left 260px
        width 248px
        height 248px
        background-size 100%
        background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png)
      .login
        display flex
        flex-direction column
        align-items center
        width 750px
        margin-top 600px
        .addSomething
          font-size 28px
          color #999
          margin-bottom 20px
        .log
          width 480px
          height 90px
          line-height 90px
          border-radius 10px
          text-align center
          color #fff
          font-size 32px
          background-color #b4282d
</style>
