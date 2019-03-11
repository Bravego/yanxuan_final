<template>
  <div id="categoryContainer">
    <div class="header">
      <div class="searchWrap">
        <span>
        <i class="iconfont icon-search-b"></i>
      </span>
        <span class="placeholder">搜索商品, 共21738款好物</span>
      </div>
    </div>
    <div class="line"></div>
    <div class="main">
      <div class="cateNavWrap">
        <ul class="cateNav">
          <li class="cateItem"  v-for="(cateInfo,index) in updateCateNavInfo" :key="index">
            <router-link :to="`/category/cateDetail/${cateInfo.id}`">{{cateInfo.name}}</router-link>
          </li>

        </ul>
      </div>
      <router-view :cateNavInfo="cateNavInfo"></router-view>


    </div>

  </div>

</template>

<script>
    import BScroll from 'better-scroll'
    import {mapState} from 'vuex'
    export default {
        data(){
            return{
                cateNavInfo:[]//左侧导航信息
            }
        },
        mounted(){
            //获取分类页信息
          this.$store.dispatch('getCategoryInfo')

          //创建左侧导航滑动
          new BScroll('.cateNavWrap',{
              click:true
          })


        },
        computed:{
          ...mapState(['categoryInfo']),

          //更新左侧导航信息
          updateCateNavInfo(){

              if(this.categoryInfo){
                this.cateNavInfo = this.categoryInfo.categoryL1List
              }
              return this.cateNavInfo
          }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  #categoryContainer
    width 100%
    height 5000px
    padding-top 87px
    .header
      position fixed !important
      top 0
      left 0
      z-index 6
      width 100%
      height 87px
      display flex
      align-items center
      background-color #fff
      .searchWrap
        width 690px
        height 56px
        line-height 56px
        background-color #EDEDED
        border-radius 10px
        text-align center
        font-size 32px
        color #666
        margin 0 auto

    .line
      width 100%
      height 2px
      background-color #eee
    .main
      padding-top 10px
      position relative
      width 100%
      height 1148px

      .cateNavWrap
        width 162px
        height 90%

        .cateNav
          width 100%
          height 1148px
          .cateItem
            width 162px
            height 50px
            text-align center
            line-height 50px

            margin-top 40px
            &:first-child
              margin-top 0
            a
              font-size 28px
              color #333
</style>
