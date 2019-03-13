//识物管理模块

import {reqNavContent,reqRecommend,reqOther,reqBuyerShows} from '../../api/index'
import {
  RECEIVE_NAV_CONTENT,
  RECEIVE_RECOMMED,
  RECEIVE_OTHER,
  RECEIVE_BUYER_SHOWS
} from '../mutation-types'

const state = {
  navContent:[], // 导航栏内容
  recommendData:[],//推荐列表数据
  collectData:[],//收纳列表数据
  buyerShowsData:[]//买家秀列表数据
}

const mutations ={
  //获取导航栏内容
  [RECEIVE_NAV_CONTENT](state,navContent){
    state.navContent = navContent
  },
  //获取推荐列表数据
  [RECEIVE_RECOMMED](state,recommendData){
    state.recommendData = recommendData
  },
  //获取其他列表数据
  [RECEIVE_OTHER](state,{otherData,tabId}){

  },
  //获取买家秀列表数据
  [RECEIVE_BUYER_SHOWS](state,{buyerShowsData}){
    if(!buyerShowsData.hasMore){//列表中没有数据就直接更新
      state.buyerShowsData = buyerShowsData
    }else{//如果之前有数据，要向其中追加数据

      //判断追加的数据类型是否一致,根据type
      if(buyerShowsData.type === state.buyerShowsData.type ){//一致追加
        state.buyerShowsData = []
        state.buyerShowsData.push(...buyerShowsData.topicList)

      }else{//不一致，直接赋值
        state.buyerShowsData = buyerShowsData

      }
    }

  }

}

const actions = {
  //异步获取导航栏内容
  async getNavContent({commit}){
    const result = await reqNavContent()
    if(result.code === '200'){//请求成功
      commit(RECEIVE_NAV_CONTENT,result.data)
    }
  },
  //异步获取推荐列表数据
  async getRecommend({commit}){
    const result = await reqRecommend()
    if(result.code === '200'){//请求成功
      commit(RECEIVE_RECOMMED,result.data)
    }
  },
  //异步获取其他列表数据
  async getOther({commit},{page,size,tabId}){
    const result = await reqOther({page,size,tabId})
    const otherData = result.data
    if(result.code === '200'){//请求成功
      commit(RECEIVE_OTHER,{otherData,tabId})
    }
  },
  //异步获取买家秀列表数据
  async getBuyerShows({commit},{page,size,type}){
    const result = await reqBuyerShows({page,size,type})
    const buyerShowsData = result.data
    buyerShowsData.type = type
    if(result.code === '200'){//请求成功
      commit(RECEIVE_BUYER_SHOWS,{buyerShowsData})
    }
  },
}

export default {
  state,
  mutations,
  actions
}
