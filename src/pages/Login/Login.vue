<template>
    <div class="loginContainer">
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
      <div class="m-top">
        <div class="bigImg">
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png">
        </div>
      </div>
      <form>
        <div v-show="$route.params.boolean" class="phoneWrap logWrap">
          <div class="input-top inputWrap">
            <input type="text" placeholder="请输入手机号" v-model="phoneNum">
          </div>
          <div class="input-bottom inputWrap">
            <input type="text" placeholder="请输入短信验证码" v-model="phoneCode">
            <div class="btnCode">获取验证码</div>
          </div>
          <div class="trouble">
            <span>遇到问题？</span>
            <a href="javascript:;">使用密码验证登录</a>
          </div>
        </div>
        <div v-show="!$route.params.boolean" class="mailWrap logWrap">
          <div class="input-top inputWrap">
            <input type="text" placeholder="邮箱账号" v-model="mailNum">
          </div>
          <div class="input-bottom inputWrap">
            <input type="password" placeholder="密码" v-model="pwd">
          </div>
          <div class="trouble">
            <span>注册账号</span>
            <a href="javascript:;">忘记密码</a>
          </div>
        </div>
      </form>

      <div class="m-middle">
        <div class="logPhone" @click="checkLogin">
          <span>登录</span>
        </div>
        <div class="logMail" @click="">
          <span>其他方式登录</span>
        </div>
        <p class="register" v-show="$route.params.boolean">
            <span>
              注册账号
              <i class="iconfont icon-gengduo"></i>
            </span>
        </p>
      </div>


    </div>
</template>

<script>
    export default {
        data(){
            return{
              phoneNum:'',
              phoneCode:'',
              mailNum:'',
              pwd:''
            }
        },
      methods:{
        //前台表单验证
        checkLogin(){
          const byPhone = this.$route.params.boolean
          const {phoneNum,phoneCode,mailNum,pwd} = this
          if(byPhone){//短信验证
            if(!/^1\d{10}$/.test(phoneNum)){
              alert('请输入正确的手机号')
              return
            }
            if(!/^\d{6}$/.test(phoneCode)){
              alert('请输入正确的验证码')
              return
            }
          }else{//邮箱验证
            if(!/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(mailNum)){
                alert('请输入正确的邮箱账号')
                return
            }
            if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*?[#?!@$%^&*-]).{6,}$/.test(pwd)){
              alert('请输入正确的邮箱密码')
              return
            }
          }
          //跳转到首页
          this.$router.replace('/msite')
        }
      }


    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .loginContainer
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
    .m-top
      display flex
      align-items center
      width 750px
      height 264px
      .bigImg
        width 750px
        height 90px
        text-align center
        img
          width 200px
          height 80px
    form
      .logWrap
        width 670px
        height 300px
        padding 0 40px
        margin-bottom 40px
        .inputWrap
          width 670px
          height 90px
          line-height 90px
          border-bottom 2px solid #ccc
          margin-bottom 40px
          input
            display inline-block
            width 590px
            height 40px
            font-size 36px
            border-width 0
            outline none
        .input-bottom
          display flex
          align-items center
          .btnCode
            width 168px
            height 60px
            line-height 60px
            text-align center
            border 2px solid #7F7F7F
            border-radius 8px
            font-size 28px
            color #333
        .trouble
          display flex
          justify-content space-between
          margin-bottom 40px
          span
            color #7f7f7f
            font-size .4rem
            cursor pointer
          a
            color #333
            font-size .4rem
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

</style>
