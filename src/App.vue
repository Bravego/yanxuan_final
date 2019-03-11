<template>
    <div>
      <router-view></router-view>
      <FooterGuide></FooterGuide>
    </div>
</template>

<script>
  import FooterGuide from './components/FooterGuide/FooterGuide.vue'
  import {reqIndex} from './api'
  export default {
      components:{
        FooterGuide
      },

  }


</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
