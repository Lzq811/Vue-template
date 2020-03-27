/* 
能发送异步 ajax 请求的函数类型模块
封装 ajax 库
函数的返回值 promise 对象

1.统一处理请求异常
2成功时候，直接返回 response.data 就是 result
*/

import axios from 'axios'

export default function ajax(url, data = {}, type='GET') {

  return new Promise((resolve, /* reject */) => {
    let promise
    // 执行ajax 请求
    if (type === 'GET') {
      promise = axios.get(url, { // 配置对象
        params : data // 指定请求参数
      })
    } else if (type === 'POST') {
      promise = axios.post(url, data)
    }
    // 如果请求成功
    promise.then(response => {
      resolve(response.data) // 直接返回的是 result
    }).catch(error => {
      // 如果失败了。 不调用 reject 而是返回对应的错误统一处理的结果
      // message.error('请求出错了' + error.message)
      console.log(error)
    })
  })
}