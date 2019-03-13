<template>
    <div class="buyerContainer">
      <div class="buyerTop">
        <div class="smallTitle">让生活更好的N种方法</div>
        <div class="bigTitle">
          <img class="before" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAASCAYAAAC0EpUuAAAAAXNSR0IArs4c6QAAAa5JREFUOBHtU79Lw0AUbtKLydgKuungkqZLUXSWgGsFF90UnOvuJFIoIqij4N8gguIiOGsVpLUJLf0BOhachSppWr8LvuMSa6a6eRDer+99793LOyURc1qt1pLv+6lsNnsbAwtCjuOkGWN5z/MuWBQ8HA4ZyPZUVd2CPgt5CsyvpM1mcxHxErA2sBpIb0KklUplqtPpnCuKsgxQtN4Pu9FobILoDFgDOSIuSGu12rRhGE8AzIhojILiu4PB4GBUcZXydF0vQReEqPyJpBNcp0gYkpjfHMj2yf6Wz8Cv5nK5t6DTer0+j2tsU1UQ+gBsWJZ1FUkMTDRwBKxOMeh33W53xbbtD+4LOk0mkwUERNcgvM5kMiMJXdflt1kjQi6xIQUi5DYRWdyQzr2kh1SsTQiLZt6xcq4MIlJTdmqaVpbtiB7CIvbIxyVjWLVaTcE5KTv7/f56u93Ocx86KZumeUlxjIr/JDIT+BdpYA/J0ev1igwAjRyS3KFESL78ghTznkATAor4Agz+0Tmm65NjLPKfdCxjDJH8yUwZ1sPD9xAqJRmIvUomf5IveBxxeO8LApO5RtUTsYIAAAAASUVORK5CYII=" >
          <span>颜值美味双修的甜味零食</span>
          <img class="after" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAASCAYAAAC0EpUuAAAAAXNSR0IArs4c6QAAAbpJREFUOBHtVD1Lw1AUbZLXWklBnBx0aulXFgcnRXDwByj6B3QRdFEXxcVBl+Lk2D8guFT9AQpCFZxEQgoxySiOjkJjmnhe7A0vz3armw/CPefck3vfF0/pdDoFVVVPMsPHY71eb1HacZy1Xq+3SFyOYRges263O67r+r6cJB5F0RhwUhQ/LWMSO5SXo+/7DVUWR8H/i45iF9M1/mRPmaIoX+jTFnoVgaeJa5oWEuYR3MO1iv2IGq7XgpjP5/OhIgoc27Z9jUarpOOeHtZqtTPiYrQsazabzb6QBu9ntVot/Fo+Os+TqR9fJZ5QxljKi8k4+KJUUdM0i+g2lfz1A2yJJxRbkSqKf+MJsMQBkMvljkSOrs+VSsUVNcJ4MwwUWSHOI/yXPMZFXdedwaafgm9wkQZmsgtj6qBQSPE8bx3+c+AJ8gLfYe9vOGdY8iQED5g/HMmAdlEqlR4SoQ8wgQZyB6IO7qPJHmlqEAQMolywiVPcJJMY8ezpIkexd6xoyTAMi/TUQaH4B0xbWMY2ls3v79CBfITkLfxz5XL5STTGlx/Fmki28BjfwxyIhgHYhIfv9RUO8W1APvMNUkiynjpNcYQAAAAASUVORK5CYII=" >
        </div>
        <div class="scrollXContainer">
          <ul class="imgList">
            <li v-for="(topic,index) in updateTopicList" :key="index">
              <img :src="topic.bannerInfo.picUrl">
            </li>
          </ul>
        </div>
      </div>
      <div class="buyerMain">
        <div class="theirs">TA们的严选生活</div>
        <div class="btns">
          <div class="btn" style="margin-left: 0">
            <p>最新</p>
          </div>
          <div class="btn">
            <p>本月最热</p>
          </div>
          <div class="btn">
            <p>晒单合辑</p>
          </div>
        </div>
        <div class="buyerShows">
          <div class="showLeft">
            <div class="showContainer" v-for="(topic,index) in updateTopicList" :key="index">
              <div class="showWrap">
                <img :src="topic.bannerInfo.picUrl" >
                <p class="text">{{topic.content}}</p>
                <div class="userInfo">
                  <div class="infoDetail">
                    <img class="ava" :src="topic.avatar" >
                    <span class="name">{{topic.nickName}}</span>
                    <div class="wellNum">
                      <span>0</span>
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAAAAACpleexAAABNUlEQVQ4y73UwUsCQRQG8P1rP9fVSImWwA1CqQgPURDkTWITqkNbXfRQhwiKDl0EwSSKDksRYmiFtbtOzrYrsuW+h4e+w3ww8zsNb0YRzChTwsF5PqlXejTchYzRpWAT6auvxwJ2KGjCGq7PyFBwFS1ZKlwC6ujImkebgLP4kLWGBgEzeJd1hAoBDdiy7ESqHQ83cON3CZteLLRw4PdrFmU3Dt5iMbj5NIp2FDrVfAqj3P/st3So29e2OwadIsazFxz0TC3c0iwf1qDX++KPdM5yofRhAXUxKcBoVUQWbzy4hDseNFHjwUts8eAL5gYsOBzCJx4s4YIHT1HmwQcYPOjNoMuCYj0YVxKeYJ8HG1jhwb6a/GRBsTxp0qKwioWmx4GR1/ArWgiFc5xLxLhDMf3X/J/wG8ARlk4IVyR9AAAAAElFTkSuQmCC">

                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
          <div class="showRight">
            <div class="showContainer" v-for="(topic,index) in updateTopicList" :key="index">
              <div class="showWrap">
                <img src="https://yanxuan.nosdn.127.net/194a06db889bf37f6ae8d7bc15677577.jpg?imageView&quality=85&thumbnail=343x457" >
                <p class="text">桂花树下 悠哉悠哉</p>
                <div class="userInfo">
                  <div class="infoDetail">
                    <img class="ava" src="https://yanxuan.nosdn.127.net/0faebda6dc7aa9887cba4b6590de199c.jpg?imageView&quality=65&thumbnail=48x48" >
                    <span class="name">小****马</span>
                    <div class="wellNum">
                      <span>0</span>
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAAAAACpleexAAABNUlEQVQ4y73UwUsCQRQG8P1rP9fVSImWwA1CqQgPURDkTWITqkNbXfRQhwiKDl0EwSSKDksRYmiFtbtOzrYrsuW+h4e+w3ww8zsNb0YRzChTwsF5PqlXejTchYzRpWAT6auvxwJ2KGjCGq7PyFBwFS1ZKlwC6ujImkebgLP4kLWGBgEzeJd1hAoBDdiy7ESqHQ83cON3CZteLLRw4PdrFmU3Dt5iMbj5NIp2FDrVfAqj3P/st3So29e2OwadIsazFxz0TC3c0iwf1qDX++KPdM5yofRhAXUxKcBoVUQWbzy4hDseNFHjwUts8eAL5gYsOBzCJx4s4YIHT1HmwQcYPOjNoMuCYj0YVxKeYJ8HG1jhwb6a/GRBsTxp0qKwioWmx4GR1/ArWgiFc5xLxLhDMf3X/J/wG8ARlk4IVyR9AAAAAElFTkSuQmCC">

                    </div>
                  </div>

                </div>
              </div>

            </div>

          </div>

        </div>
      </div>


    </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
    export default {
        data(){
           return{
             topicListLeft:[],

           }
        },
        mounted(){
          //触发获取买家秀列表数据
          this.$store.dispatch('getBuyerShows',{page:2,size:20,type:1})

          //创建横向滚动
          new BScroll('.scrollXContainer',{
              click:true,
              scrollX:true,
              scrollY:false
          })

        },
        computed:{
          ...mapState({
            buyerShowsData:state=>state.topic.buyerShowsData
          }),
          //根据buyerShowsData返回topicList数组
          updateTopicList(){
            this.topicList = this.buyerShowsData.topicList

            return this.topicList
          }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .buyerContainer
    height 10000px
    .buyerTop
      width 710px
      height 410px
      padding 20px
      background-color #fff
      margin-bottom 20px
      .smallTitle
        text-align center
        color #7f7f7f
        font-size 30px
        margin-bottom 40px
      .bigTitle
        position relative
        color #333
        font-size 32px
        text-align center
        margin-bottom 40px
        img
          position absolute
          width 24px
          height 24px
        .before
          top 0
          left 140px
        .after
          top 14px
          right 136px
      .scrollXContainer
        width 750px
        .imgList
          min-width 750px
          display flex
          float left
          height 240px
          li
            width 240px
            height 240px
            margin 0 10px
            img
              width 100%
              height 100%
              border-radius 10px
    .buyerMain
      width 750px
      padding-top 50px
      background-color #fff
      .theirs
        height 34px
        font-size 32px
        font-weight bold
        color #333
        text-align center
      .btns
        display flex
        justify-content space-around
        width 750px
        height 120px

        .btn
          display flex
          align-items center
          margin 0 24px
          width 170px
          height 120px

          font-size 32px
          p
            width 170px
            height 56px
            line-height 56px
            text-align center
            border-radius 8px
            background-color rgba(255,255,255,.7)
      .buyerShows
        display flex
        width 728px
        height 1000px
        margin 0 auto
        .showLeft
          width 364px
          height 100%
          .showContainer
            width 344px
            height 610px
            margin 0 auto 20px
            .showWrap
              width 100%
              img
                width 344px
                height 460px
              p
                white-space nowrap
                overflow hidden
                text-overflow ellipsis
                padding 20px 0 20px 10px
                color #333
              .userInfo
                width 324px
                height 56px
                padding 20px 10px
                .infoDetail
                  padding 15px 0
                  .ava
                    width 48px
                    height 48px
                    border-radius 50%
                    vertical-align middle
                  .wellNum
                    float right
                    margin-top 12px
                    img
                      width 28px
                      height 28px
        .showRight
          width 365px
          height 100%
          .showContainer
            width 344px
            height 610px
            margin 0 auto 20px
            .showWrap
              width 100%
              img
                width 344px
                height 460px
              p
                padding 20px 0 20px 10px
                color #333
              .userInfo
                width 324px
                height 56px
                padding 20px 10px
                .infoDetail
                  padding 15px 0
                  .ava
                    width 48px
                    height 48px
                    border-radius 50%
                    vertical-align middle
                  .wellNum
                    float right
                    margin-top 12px
                    img
                      width 28px
                      height 28px

</style>
