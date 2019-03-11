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
              <li class="active">
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
      <div class="banner-wrap">
        <div class="swiper-container" >
          <ul class="swiper-wrapper">
            <li class="swiper-slide" v-for="(bannerItem,index) in updateBannerList" :key="index">
              <img :src="bannerItem.picUrl">
            </li>

          </ul>
          <div class="swiper-pagination">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div class="ads-wrap">
        <ul class="ads">
          <li class="item">
            <a href="javascript:;">网易自营品牌</a>
          </li>
          <li class="item">
            <a href="javascript:;">30天无忧退货</a>
          </li>
          <li class="item">
            <a href="javascript:;">48小时快速退款</a>
          </li>
        </ul>

      </div>
      <div class="content">
        <div class="first-content">
          <div class="swiper-container">
            <div class="swiper-wrap">
              <div class="swiper-slide">
                <a class="categoryItem" href="javascript:;" v-for="(category,index) in updateCategoryList" :key="index">
                  <img :src="category.picUrl">
                  <span>{{category.categoryName}}</span>
                </a>
              </div>
            </div>
          </div>

        </div>
        <Split />
        <div class="second-content">
          <h2>——新人专享礼——</h2>
          <div class="personalGift">
            <a src="javascript:;" class="personalGift_left">
              <p>新人专享礼包</p>
              <div class="giftPic">
                <img src="http://yanxuan.nosdn.127.net/a020bed0783956f650abc016e386bead.png">
              </div>
            </a>
            <div class="personalGift_right">
              <div class="module1">
                <a href="javascript:;" class="activityItem">
                  <div class="picWrap">
                    <div class="pic">
                      <img src="http://yanxuan.nosdn.127.net/db0c0c4ba0663815d0c21bf0dc20252d.png?imageView&thumbnail=200x200&quality=75" >
                    </div>
                    <div class="discount">
                      <p class="line1">
                        ¥988
                      </p>
                      <p class="line2">
                        ¥1288
                      </p>

                    </div>

                  </div>
                  <div class="txt">
                    <div class="txt1">
                      福利社
                    </div>
                    <div class="txt2">
                      今日特价
                    </div>

                  </div>
                </a>

              </div>
              <div class="module2">
                <a href="javascript:;" class="activityItem">
                  <div class="picWrap">
                    <div class="pic">
                      <img src="http://yanxuan.nosdn.127.net/da93057907ff458c9d82dcedf357a4db.png?imageView&thumbnail=200x200&quality=75" >
                    </div>
                    <div class="discount">
                      <p class="line1">
                        ¥1
                      </p>
                      <p class="line2">
                        ¥13
                      </p>

                    </div>

                  </div>
                  <div class="txt">
                    <div class="txt1">
                      新人拼团
                    </div>
                    <div class="txt2">
                      1元起包邮
                    </div>

                  </div>
                </a>
              </div>

            </div>

          </div>
        </div>
        <Split />

      </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import {mapState} from 'vuex'

  import Split from '../../components/Split/Split.vue'
  export default{
      data(){
          return{
             bannerItemList:[],
             categoryList:[]
          }
      },
      async mounted(){
        //创建顶部导航条的滑动
        new BScroll('.nav-scroll',{
            scrollX:true,
            click:true
        })



        //请求首页
          this.$store.dispatch('getIndexInfo',()=>{

            //创建轮播图
            this.$nextTick(()=>{
              new Swiper('.swiper-container',{

                pagination: {
                  el: '.swiper-pagination',
                }
              })
            })
         })
        /*this.$get('/index').then((res)=>{
            console.log(res)
        })*/

      },
      computed:{
        ...mapState(['indexInfo']),

        //更新轮播图状态
        updateBannerList(){
            if(this.indexInfo){
              this.bannerItemList = this.indexInfo.focusList
            }
          return this.bannerItemList
        },
        //更新分类列表的状态
        updateCategoryList(){
            if(this.indexInfo.categoryHotSellModule){
              this.categoryList = this.indexInfo.categoryHotSellModule.categoryList
            }
          return this.categoryList
        }


      },
      components:{
          Split
      }

  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
 @import "../../common/stylus/mixins.styl"
  .msite-container
    height 5000px
    padding-top 1.6rem
    .header
      position fixed !important
      top -.1rem
      width 100%
      height 120px
      z-index 6
      background-color #fff
      .title
        position fixed
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
          margin-right 25px
        .input
          height .7rem
          line-height .7rem
          font-size .25rem
          border-radius .10667rem
          background-color #ededed
          padding 0 20px
          margin-right 50px
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
        top 100px
        display flex
        align-items center
        .nav-scroll
          width 100%
          .nav
            width 13.5rem
            display flex
            li
              width 1.5rem
              height 18px
              text-align center
              line-height .02rem
              &.active
                border-bottom 1px solid red
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
    .banner-wrap
      width 100%
      .swiper-container
        position relative
        top 0
        left 0
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          display flex
          li
            height 4.8rem
            img
              width 100%
              height 4.8rem

        .swiper-pagination
          display flex
          position absolute
          bottom 0
          left 50%

    .ads-wrap
      color #B4282D
      .ads
        display flex
        height .96rem
        li
          margin-right 25px
          text-align center
          line-height 45px
          a
            display inline-block
            width 200px
            color #B4282D

    .content
      width 100%
      height 340px
      .first-content
        width 100%
        height 340px
        padding-bottom 20px
        .swiper-container
          width 100%
          height 340px
          .swiper-wrap
            width 100%
            height 340px
            .swiper-slide
              display flex
              flex-wrap wrap
              justify-content space-around
              width 100%
              height 340px
              .categoryItem
                display flex
                flex-direction column
                align-items center
                width 150px
                height 156px
                img
                  width 110px
                  height 156px
                span
                  font-size 18px
      .second-content
        position relative
        padding 20px
        width 94%
        height 558px
        h2
          width 100%
          height 90px
          line-height 90px
          text-align center
          font-size 30px
        .personalGift
          width 100%
          height 438px
          /*overflow hidden*/
          .personalGift_left
            float left
            display flex
            flex-direction column
            align-items center
            justify-content space-around
            width 342px
            height 434px
            background-color #F9E9CF
            p
              font-size 36px
            .giftPic
              width 257px
              height 258px
              img
                width 257px
                height 258px
          .personalGift_right
            position relative
            float right
            .module1
              width 342px
              height 200px
              margin-bottom 30px
              background-color #FBE2D3
              .activityItem
                position relative
                width 100%
                height 215px
                .picWrap
                  position absolute
                  left 150px
                  width 200px
                  height 200px
                  .pic
                    width 200px
                    height 200px
                    img
                      width 100%
                      height 100%


                  .discount
                    position absolute
                    top 10px
                    right 0
                    width 80px
                    height 80px
                    background-color #F59524
                    opacity .8
                    border-radius 50%
                    color #fff
                    .line1
                      margin-top 10px
                .txt
                  font-size 30px

            .module2
              width 342px
              height 200px
              background-color #FFECC2
              .activityItem
                position relative
                width 100%
                height 215px
                .picWrap
                  position absolute
                  left 150px
                  width 200px
                  height 200px
                  .pic
                    width 200px
                    height 200px
                    img
                      width 100%
                      height 100%


                  .discount
                    position absolute
                    top 10px
                    right 0
                    width 80px
                    height 80px
                    background-color #F59524
                    opacity .8
                    border-radius 50%
                    color #fff
                    .line1
                      margin-left 10px
                .txt
                  font-size 30px




</style>
