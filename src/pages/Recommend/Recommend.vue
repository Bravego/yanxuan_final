<template>
    <div class="recommendContainer">
      <div class="scrollWrap">
        <XuanMei v-for="(reData,index) in updateRecommendData" :key="index" :reData="reData" v-if="tabId === 9"></XuanMei>
        <!--<XuanMei v-if="tabId=== 10"></XuanMei>-->
        <BuyerShows v-if="tabId===7"></BuyerShows>
      </div>

    </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import XuanMei from '../../components/XuanMei/XuanMei.vue'
  import BuyerShows from '../../components/BuyerShows/BuyerShows.vue'
  import {mapState} from 'vuex'
    export default {

        data(){
            return{
              tabBars:[],
              subRoute:{},
              tabId:9 //默认显示推荐页的数据

            }
        },
        async mounted(){
          //触发获取recommendData
          await this.$store.dispatch('getRecommend')
          //触发获取导航栏信息
          await this.$store.dispatch('getNavContent')

          //创建主体部分的滑动
          new BScroll('.recommendContainer',{
              click:true
          })


        },
        computed:{
          ...mapState({
            recommendData:state=>state.topic.recommendData,
            navContent : state=>state.topic.navContent
          }),
          //更新recommendData
          updateRecommendData(){
            return this.recommendData
          },
          //更新 tabBars
          updateTabBars(){
              this.tabBars = this.navContent
          },
          //确定要显示的二级路由
          showSubRoute(){
              //获取当前请求的路由路径
            const tabId = this.$route.params.tabId*1

            //与当前组件中的所有二级路由进行匹配
            const subRoute = this.tabBars.find(tabBar=>tabBar.tabId === tabId)
            //更新二级路由和对应的tabId
            this.subRoute = subRoute
            this.tabId = tabId
            return this.subRoute
          }
        },
        watch:{
            //监视tabId和subRoute的变化
          $route(value){
            //获取参数中的id
            const tabId = this.$route.params.tabId*1

            //匹配details中相对应的id
            const subRoute = this.tabBars.find(tabBar=>tabBar.tabId === tabId)

            //更新二级路由和对应的tabId
            this.subRoute = subRoute
            this.tabId = tabId

          }
        },
        components:{
          XuanMei,
          BuyerShows
        }
    }

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .recommendContainer
    width 750px
    height 1000px
    background-color #f4f4f4
    .scrollWrap
      height 10000px







</style>
