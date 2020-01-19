/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/Index/Index'
import finance from '@/components/Finance/Finance'
import loan from '@/components/Loan/Loan'
import founding from '@/components/Founding/Founding'
import download from '@/components/Public/Download'

Vue.use(Router)

export default new Router({
  routes: [{
      name: 'download',
      path: '/download',
      component: download
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
