/*
function：全局路由拦截
author：Infinity
time：2020-8-17
*/
// eslint-disable-next-line no-unused-vars
// import Vue from 'vue'
import router from '../../router/index'
// import store from '../../store/index'
// import * as dd from 'dingtalk-jsapi'
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
  // if (to.path === '/403') {
  //   next()
  //   return
  // }
  // if (sessionStorage.getItem('userCode')) {
  //   next()
  // } else {
  //   dd.ready(() => {
  //     dd.runtime.permission.requestAuthCode({
  //       corpId: 'dingb1894120a3f2086a35c2f4657eb6378f', // 企业id
  //       onSuccess: function (info) {
  //         const code = info.code // 通过该免登授权码可以获取用户身份
  //         sessionStorage.setItem('userCode', code)
  //         store.commit('setCode', code)
  //         next()
  //       },
  //       onFail: function () {
  //         document.title = '403'
  //         next({ path: '/403' })
  //       }
  //     })
  //   })
  // }
})
