import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Dialog from '@/components/Dialog/Dialog'
import Login from '@/components/Login/Login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      meta:{
        requireAuth: true
      }
    },
    {
      path:'/dialog',
      component:Dialog
    },
    {
      path:'/login',
      component:Login
    }
  ]
})
