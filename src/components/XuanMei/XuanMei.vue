<template>
    <div class="xuanmeiContainer">
      <div class="xuanmeiWrap" v-for="(topic,index) in updateTopics" :key="index" v-if="topic.style === 1">
        <a href="javascript:;" class="xuanmeiLink" >
          <div class="title">
            <img :src="topic.avatar" >
            <span>{{topic.nickname}}</span>
          </div>
          <div class="description">{{topic.title}}</div>
          <div class="desImg">
            <img :src="topic.picUrl">
          </div>
          <div class="watched">
            <i></i>
            <span>29.1k人看过</span>
          </div>
        </a>

      </div>
      <div class="otherWrap" v-for="(topic,index) in updateTopics" :key="index" v-if="topic.style===2">
        <a href="javascript:;" class="otherLink">
          <div class="main">
            <div class="title">
              <img :src="topic.avatar" >
              <span>{{topic.nickname}}</span>
            </div>
            <div class="description">{{topic.title}}</div>
            <div class="slogan">{{topic.subTitle}}</div>
            <div class="watched">
              <i></i>
              <span>29.1k人看过</span>
            </div>
          </div>
          <div class="bigImg">
            <img :src="topic.picUrl">
          </div>
        </a>

      </div>
    </div>
</template>

<script>

    export default {
        props:{
            reData:Object
        },
        data(){
            return{
              topics:[]
            }
        },
        mounted(){

        },
        computed:{
            //根据传递过来的reData更新topics
          updateTopics(){
              if(this.reData){
                this.topics = this.reData.topics
              }
              return this.topics
          }


        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .xuanmeiWrap
    width 690px
    height 616px
    padding 30px
    margin-bottom 20px
    background-color #fff
    .xuanmeiLink
      display block
      width 690px
      height 630px
      .title
        width 690px
        height 56px
        margin-bottom 24px
        img
          width 54px
          height 54px
          border-radius 50%
          vertical-align middle
        span
          font-size 30px
          color #333
          vertical-align middle
      .description
        width 690px
        height 104px
        line-height 50px
        margin-bottom 16px
        font-size 36px
        color #333
        overflow hidden
        text-overflow ellipsis

      .desImg
        width 690px
        height 376px
        margin-bottom 20px
        img
          width 100%
          height 100%
      .watched
        width 690px
        height 32px
        color #999
        font-size 28px

  .otherWrap
    background-color #fff
    width 690px
    height 276px
    padding 30px
    margin-bottom 20px
    .otherLink
      display flex
      width 690px
      height 300px
      .main
        width 400px
        height 300px
        margin-right 18px
        .title
          width 100%
          height 56px
          margin-bottom 24px
          img
            width 54px
            height 54px
            border-radius 50%
            vertical-align middle
          span
            font-size 30px
            color #333
            vertical-align middle
        .description
          width 400px
          height 122px
          line-height 40px
          margin-bottom 16px
          font-size 36px
          color #333
          overflow hidden
          text-overflow ellipsis

        .slogan
          width 400px
          height 48px
          color #7f7f7f
          font-size 30px
        .watched
          width 166px
          height 32px
          color #999
          font-size 28px
      .bigImg
        width 272px
        height 300px
        img
          width 272px
          height 272px
</style>
