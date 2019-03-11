//包含多个间接更新状态方法的对象
import {RECEIVE_INDEX,RECEIVE_CATEGORY} from './mutation-types'
import {reqIndex,reqCategory} from '../api'
export default {
  //异步获取首页信息
  async getIndexInfo({commit},callback){

    //发送ajax请求
    const result = await reqIndex()
    commit(RECEIVE_INDEX,{indexInfo:result.data})
    callback()
  },

  //异步获取分类页信息
  async getCategoryInfo({commit}){
    const result = await reqCategory()
    commit(RECEIVE_CATEGORY,{categoryInfo:result.data})

  }

}
