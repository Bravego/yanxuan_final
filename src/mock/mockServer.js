//mock后台
import Mock from 'mockjs'
import shouyeData from './shouye_data.json'
import fenleiData from './fenlei_zhuanqu.json'
import goodsData from './cateList.json'

Mock.mock('/index','get',{code:0,data:shouyeData})
Mock.mock('/category',{code:0,data:fenleiData})
Mock.mock('/goods',{code:0,data:goodsData})


