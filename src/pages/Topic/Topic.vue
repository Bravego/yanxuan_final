<template>
    <div class="topicContainer">
      <div class="fixedContent">
        <div class="header">
          <a href="javascript:;" @click="$router.replace('/msite')" class="msite">
            <i class="iconfont icon-shouye"></i>
          </a>
          <h2  @click="$router.replace('/msite')">
            <a href="javascript:;" class="found">发现</a>
            <a href="javascript:;" class="choose">甄选家</a>
          </h2>
          <a href="javascript:;" @click="$router.replace('/msite')" class="search">
            <i class="iconfont icon-search-b"></i>
          </a>
          <a href="javascript:;" @click="$router.replace('/msite')" class="cart">
            <i class="iconfont icon-gouwuche"></i>
          </a>
        </div>
        <div class="line"></div>
        <div class="navContainer">
          <ul class="navWrap">
            <li class="navItem" v-for="(nav,index) in updateNavContent" >
              <router-link id="goToTarBar" :to="`/topic/tabBar/${nav.tabId}`" :class="{active:index===0}">{{nav.tabName}}</router-link>
            </li>

          </ul>
        </div>
        <div class="line"></div>
      </div>
      <Split />
      <router-view />

    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import Split from '../../components/Split/Split.vue'
    import {mapState} from 'vuex'
    export default {
        data(){
            return{

            }
        },
        async mounted(){
          //触发获取导航栏内容
          await this.$store.dispatch('getNavContent')

          //创建导航条的滑动
          new BScroll('.navContainer',{
            scrollX:true,
            click:true
          })




        },
      computed:{
        ...mapState({
          navContent : state=>state.topic.navContent,

        }),
        //更新导航栏内容
        updateNavContent(){
            return this.navContent
        }

      },
      methods:{

      },
      components:{
            Split
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .topicContainer
    padding-top 162px
    .fixedContent
      position fixed !important
      top 0
      left 0
      z-index 6
      background-color #fff
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
          display flex
          height 88px
          margin-right 60px
          .found
            color #b4282d
            font-size .5rem
            font-weight bold
            margin-right 20px

          .choose
            font-size 32px
      .line
        width 100%
        height 2px
        background-color #ccc
      .navContainer
        width 750px
        height 72px
        overflow hidden
        .navWrap
          float left
          min-width 750px
          display flex
          height 72px
          .navItem
            float left
            height 72px
            line-height 72px
            border-bottom 2px solid green
            a
              white-space nowrap
              display inline-block
              padding 0 8px
              margin 0 20px
              font-size 30px
              border-bottom 2px solid red
              &.active
                color #B4282D




</style>
