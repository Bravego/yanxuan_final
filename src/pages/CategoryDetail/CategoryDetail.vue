<template>
    <div class="detailContainer">
      <div class="scrollContainer">
       <div class="scrollMain">
         <a href="javascript:;" class="headerImg">
           <img src="http://yanxuan.nosdn.127.net/9eb09ecd7fc58151568f4b0b616db1cf.jpg?imageView&thumbnail=0x196&quality=75" >
         </a>
         <ul class="detailsMain">
           <li class="detailItem" v-for="(subCate,index) in getSubCateList" :key="index">
             <a href="javascript:;" class="detailWrap">
               <img :src="subCate.bannerUrl" >
               <span>{{subCate.name}}</span>
             </a>
           </li>
         </ul>
       </div>
      </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import {mapState} from 'vuex'
    export default {
        props:{
          cateNavInfo:Array
        },
        data(){
           return{
             detail:{},

           }
        },
        mounted(){
          //获取分类页信息
          this.$store.dispatch('getCategoryInfo')


          //创建右侧的滑动
          new BScroll('.scrollContainer',{
            click:true
          })

          //获取当前参数中的id

          const id = this.$route.params.id*1



          //匹配cateNavInfo中对应的id

          let detail

          if(this.cateNavInfo) {
            detail = this.cateNavInfo.find(detail => detail.id === id)
          }
          //更新detail
          this.detail = detail?detail:{}




        },
        computed:{
          ...mapState(['categoryInfo']),
            //获取当前专区下的二级分类
          getSubCateList(){

              if(this.categoryInfo.categoryL1List && !this.detail.id){
                //更新detail
                this.detail = this.categoryInfo.categoryL1List[0]
              }
            /*this.detail = this.cateNavInfo?this.detail:this.categoryInfo.categoryL1List[0]*/

              //保存category详细信息的数组
              let subCateList = []

              if(this.detail.id){
                subCateList = this.detail.subCateList
              }
              return subCateList
          }
        },
        watch:{
            $route(value){
              //获取参数中的id
              const id = value.params.id*1

              //匹配details中相对应的id
              const detail = this.cateNavInfo.find(detail=>detail.id === id)

              //更新detail
              this.detail = detail

            }
        }

    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .detailContainer
    position absolute
    top 20px
    right 24px
    .scrollContainer
      width 516px
      height 500px
      .scrollMain
        width 100%
        .headerImg
          display block
          width 100%
          height 192px
          img
            width 100%
            height 192px
        .detailsMain
          display flex
          flex-wrap wrap
          width 100%
          .detailItem
            width 144px
            height 216px
            margin-right 24px
            .detailWrap
              width 100%
              height 100%
              img
                width 144px
                height 144px
</style>
