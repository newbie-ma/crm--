// 引入请求封装函数  那边是匿名导出不用{}
import wxRequest from '../utils/wxRequest'
// 引入常量库
import appCONST from '../utils/appCONST'

wxRequest.requestData.baseUrl = appCONST.HTTP_BASE_URL
const BASE_URL = appCONST.HTTP_BASE_URL
//--------------------  登录  ---------------------------//
//请求短信
const getMessageData = params => {
  return wxRequest.requestData('getPhoneMsg.do', params).then(res => res)
}
//登录
const getLoginData = params => {
  return wxRequest.requestData('crmLogin.do', params).then(res => res)
}
//--------------------  员工  ---------------------------//
//查看客户列表
const getCrmClientList = params => {
  return wxRequest.requestData('getCrmClientList.json', params).then(res => res)
}
//添加客户信息
const saveCrmClient = params => {
  return wxRequest.requestData('saveCrmClient.json', params).then(res => res)
}
//查看客户信息
const getCrmClient = params => {
  return wxRequest.requestData('getCrmClient.json', params).then(res => res)
}
//编辑客户信息
const updateCrmClient = params => {
  return wxRequest.requestData('updateCrmClient.json', params).then(res => res)
}
//修改回访记录
const updateCrmClientContact = params => {
  return wxRequest.requestData('updateCrmClientContact.json', params).then(res => res)
}
//添加回访记录
const saveCrmClientContact = params => {
  return wxRequest.requestData('saveCrmClientContact.json', params).then(res => res)
}
//--------------------  老板-销售模块  ---------------------------//
//查看销售员列表
const getCrmUserList = params => {
  return wxRequest.requestData('getCrmUserList.json', params).then(res => res)
}
//添加销售员
const saveCrmUser = params => {
  return wxRequest.requestData('saveCrmUser.json', params).then(res => res)
}
//查看销售员详情
const getCrmUser = params => {
  return wxRequest.requestData('getCrmUser.json', params).then(res => res)
}
//编辑销售员
const updateUser = params => {
  return wxRequest.requestData('updateUser.json', params).then(res => res)
}
//删除销售员
const deleteCrmUser = params => {
  return wxRequest.requestData('deleteCrmUser.json', params).then(res => res)
}
//转移客户信息
const updateCrmClientUser = params => {
  return wxRequest.requestData('updateCrmClientUser.json', params).then(res => res)
}
//删除客户信息
const deleteCrmClientUser = params => {
  return wxRequest.requestData('deleteCrmClientUser.json', params).then(res => res)
}
//--------------------  老板-运营模块  ---------------------------//
//查询私教列表
const getCrmOperateCoachList = params => {
  return wxRequest.requestData('getCrmOperateCoachList.json', params).then(res => res)
}
//获取私教信息
const getCrmOperateCoach = params => {
  return wxRequest.requestData('getCrmOperateCoach.json', params).then(res => res)
}
//添加私教信息
const saveCrmOperateCoach = params => {
  return wxRequest.requestData('saveCrmOperateCoach.json', params).then(res => res)
}
//编辑私教信息
const updateCrmOperateCoach = params => {
  return wxRequest.requestData('updateCrmOperateCoach.json', params).then(res => res)
}
//编辑团课教练信息
const updateLeagueCrmOperateCoach = params => {
  return wxRequest.requestData('updateLeagueCrmOperateCoach.json', params).then(res => res)
}
//删除私教信息
const deleteCrmOperateCoach = params => {
  return wxRequest.requestData('deleteCrmOperateCoach.json', params).then(res => res)
}
//查看私教课信息
const getCrmOperateCourse = params => {
  return wxRequest.requestData('getCrmOperateCourse.json', params).then(res => res)
}
//编辑私教课信息
const updateCrmOperateCourse = params => {
  return wxRequest.requestData('updateCrmOperateCourse.json', params).then(res => res)
}

//查询团课列表
const getCrmOperateLeagueStore = params => {
  return wxRequest.requestData('getCrmOperateLeagueStore.json', params).then(res => res)
}
//查询团课详情
const getCrmOperateLeague = params => {
  return wxRequest.requestData('getCrmOperateLeague.json', params).then(res => res)
}
//添加团课信息
const saveCrmOperateLeague = params => {
  return wxRequest.requestData('saveCrmOperateLeague.json', params).then(res => res)
}
//删除团课信息
const deleteCrmOperateLeague = params => {
  return wxRequest.requestData('deleteCrmOperateLeague.json', params).then(res => res)
}
//编辑团课信息
const updateCrmOperateLeague = params => {
  return wxRequest.requestData('updateCrmOperateLeague.json', params).then(res => res)
}

//查询团课课表
const getCrmOperateCoachLeagueList = params => {
  return wxRequest.requestData('getCrmOperateCoachLeagueList.json', params).then(res => res)
}
//查询团课课表详情
const getCrmOperateCoachLeague = params => {
  return wxRequest.requestData('getCrmOperateCoachLeague.json', params).then(res => res)
}
//添加团课课表信息
const saveCrmOperateCoachLeague = params => {
  return wxRequest.requestData('saveCrmOperateCoachLeague.json', params).then(res => res)
}
//删除团课课表
const deleteCrmOperateCoachLeague = params => {
  return wxRequest.requestData('deleteCrmOperateCoachLeague.json', params).then(res => res)
}
//编辑团课课表信息
const updateCrmOperateCoachLeague = params => {
  return wxRequest.requestData('updateCrmOperateCoachLeague.json', params).then(res => res)
}

export default {
  BASE_URL,
  //登录
  getMessageData,
  getLoginData,
  //员工
  getCrmClientList,
  saveCrmClient,
  getCrmClient,
  updateCrmClient,
  updateCrmClientContact,
  saveCrmClientContact,
  //销售模块
  getCrmUserList,
  saveCrmUser,
  getCrmUser,
  updateUser,
  deleteCrmUser,
  updateCrmClientUser,
  deleteCrmClientUser,
  //运营模块
  getCrmOperateCoachList,
  getCrmOperateCoach,
  saveCrmOperateCoach,
  updateCrmOperateCoach,
  updateLeagueCrmOperateCoach,
  deleteCrmOperateCoach,
  getCrmOperateCourse,
  updateCrmOperateCourse,
  getCrmOperateLeagueStore,
  getCrmOperateLeague,
  saveCrmOperateLeague,
  deleteCrmOperateLeague,
  updateCrmOperateLeague,
  getCrmOperateCoachLeagueList,
  getCrmOperateCoachLeague,
  saveCrmOperateCoachLeague,
  deleteCrmOperateCoachLeague,
  updateCrmOperateCoachLeague,

}
