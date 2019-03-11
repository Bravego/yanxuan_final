//包含多个直接更新状态方法的对象
import {RECEIVE_INDEX,RECEIVE_CATEGORY} from './mutation-types'

export default {
  //更新首页信息
  [RECEIVE_INDEX](state,{indexInfo}){
    state.indexInfo = indexInfo
  },

  //更新分类页信息
  [RECEIVE_CATEGORY](state,{categoryInfo}){
    state.categoryInfo = categoryInfo

  }

}
