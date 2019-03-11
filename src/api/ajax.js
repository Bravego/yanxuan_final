//发送ajax请求的模块
import axios from 'axios'

//最终返回promise对象
export default function ajax(url,data={},method='GET') {

  return new Promise((resolve,reject)=>{

    let promise
    //判断请求方式

    if(method==='GET'){
      promise =  axios.get(url, {params:data})

    }else{//post请求
      promise =  axios.post(url, data)
    }
    //成功状态
    promise.then((response)=>{
      resolve(response.data)
    }).catch(()=>{//失败状态
      console.log('请求失败')
    })
  })


}


