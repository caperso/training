/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/Index/Index'
import finance from '@/components/Finance/Finance'
import loan from '@/components/Loan/Loan'
import founding from '@/components/Founding/Founding'
import user from '@/components/User/User'

Vue.use(Router)

export default new Router({
  routes: [{
      name: 'home',
      path: '/',
      component: index
    },
    {
      name: '/index',
      path: '/index',
      component: index
    }, {
      name: 'index',
      path: '/index',
      component: index
    },
    {
      name: 'finance',
      path: '/finance',
      component: finance
    },
    {
      name: 'loan',
      path: '/loan',
      component: loan
    },
    {
      name: 'founding',
      path: '/founding',
      component: founding
    },
    {
      name: 'user',
      path: '/user',
      component: index
    },
    {
      path: '/*',
      redirect: '/index'
    }
  ]
})
