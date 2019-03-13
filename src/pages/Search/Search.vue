<template>
    <div class="searchContainer">
      <div class="main">
        <div class="search">
          <i class="iconfont icon-search-b"></i>
          <input type="text" placeholder="男式 商务皮鞋65折起">
        </div>
        <div class="cancel" @click="$router.replace('/msite')">取消</div>
        <div class="fireSearch">
          <h3>热门搜索</h3>
          <ul class="searchList">
            <li class="searchItm" v-for="(searchItem,index) in updateSearchList" :key="index">{{searchItem.name}}</li>

          </ul>
        </div>
      </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
      data(){
          return{
              searchList:[]
          }
      },
      mounted(){
        //获取分类页信息
        this.$store.dispatch('getCategoryInfo')
      },
      computed:{
        ...mapState(['categoryInfo']),

        updateSearchList(){
          if(this.categoryInfo){
            this.searchList = this.categoryInfo.categoryL1List
          }
          return this.searchList
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .searchContainer
    width 750px
    height 1334px
    background-color #f4f4f4
    .main
      width 710px
      height 450px
      padding 20px
      background-color #fff
      border-bottom 1px solid #eee
      .search
        width 564px
        height 56px
        padding 0 20px
        line-height 56px
        font-size 32px
        background-color #f4f4f4
        input
          background-color rgba(255,255,255,0)
          font-size 32px
          border-width 0px
          outline none


      .cancel
        position absolute
        top 32px
        right 28px
        font-size 32px
      .fireSearch
        margin-top 44px
        font-size 32px
        h3
          color #999
          margin-bottom 20px
        .searchList
          display flex
          flex-wrap wrap
          font-size 28px
          color #666
          li
            padding 10px 20px
            margin 10px 20px 10px 0
            border 1px solid #ccc

</style>
