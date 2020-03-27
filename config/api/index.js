/* 
包含应用中所有接口请求函数的模块
此处不用 default 暴露，每个函数的返回值都是 promise
*/
import ajax from './ajax.js'
const BASE = 'http://47.107.217.109:8080'

// 代理解决 跨域， 404 等问题 在 package.json 文件下面写上，但是只能用在本地环境  "proxy": "http://后台地址"


// 商圈实时热力图
export const reqHeatMap = () => ajax(BASE + '/insight/v1/info/getHeatMap', { businessZoneCode: 'CQJFB', userSessionId: '' }, 'POST')

// 获取实时天气
export const reqWeather = () => ajax(BASE + '/insight/v1/info/getWeatherInfo', { businessZoneCode: 'CQJFB', userSessionId: '' }, 'POST')

// 获取商圈企业数量和行业类型占比
export const reqCompanyNumAndTypeRate = () => ajax(BASE + '/insight/v1/info/getEnterpriseInfo', { businessZoneCode: 'CQJFB', userSessionId: '' }, 'POST')

// 获取商圈当天累计客流
export const reqTotalPassenger = () => ajax(BASE + '/insight/v1/info/getBusinessZoneAccumulativePassengerFlow', { businessZoneCode: 'CQJFB', userSessionId: '' }, 'POST')

// 获取商圈当天整点客流(折线图)
export const reqHourPassenger = () => ajax(BASE + '/insight/v1/info/getCustByHour', { businessZoneCode: 'CQJFB', userSessionId: '' }, 'POST')

// 获取商圈当天整实时客流
export const reqTimeingPassenger = () => ajax(BASE + '/insight/v1/info/getBusinessZonePassengerFlow', { businessZoneCode: 'CQJFB', userSessionId: '' }, 'POST')
