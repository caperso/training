/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/Index/Index'
import finance from '@/components/Finance/Finance'
import loan from '@/components/Loan/Loan'
import funding from '@/components/Founding/Founding'
import user from '@/components/User/User'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/index',
      component: index
    },
    {
      path: '/finance',
      component: finance
    },
    {
      path: '/loan',
      component: loan
    },
    {
      path: '/funding',
      component: funding
    },
    {
      path: '/user',
      component: user
    },
    {
      path: '/*',
      redirect: '/index'
    }
  ]
})
