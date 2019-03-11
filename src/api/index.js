//定义多个请求接口的模块,返回promise对象
import ajax from './ajax'

//请求首页
export const reqIndex = () => ajax('/index')

//请求分类页
export const reqCategory = ()=>ajax('/category')
