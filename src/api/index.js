//定义多个请求接口的模块,返回promise对象
import ajax from './ajax'
//使用代理
const prefix = '/api'

//请求首页
export const reqIndex = () => ajax('/index')

//请求分类页
export const reqCategory = ()=>ajax('/category')

//请求识物页的导航栏内容
export const reqNavContent = ()=>ajax(`${prefix}/topic/v1/find/getTabs.json`)

//请求识物页的推荐列表下的数据
export const reqRecommend = ()=>ajax(`${prefix}/topic/v1/find/recManual.json`)

//请求获取其他列表下的数据
export const reqOther = ({page,size,tabId})=>ajax(`${prefix}/topic/v1/find/getTabData.json`,{page,size,tabId})

//请求获取买家秀列表下得数据
 export const reqBuyerShows = ({page, size, type})=>ajax(`${prefix}/topic/v1/look/getList.json`,{page, size, type})

// export const reqBuyerShows = (page, size, type)=>ajax(`http://m.you.163.com/topic/v1/look/getList.json`,{page, size, type})
