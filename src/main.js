// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../static/css/reset.css'
import '../static/css/style.css'
import Axios from 'axios'
import store from './store/index'
Vue.config.productionTip = false

router.beforeEach((to,from,next)=>{
    if(to.meta.requireAuth){
      if(store.state.token || localStorage.getItem('token')){
         next();
      }else{
        next({
          path:'/login',
          query: {redirect: to.dialog}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
        })
      }    
    }else{
      next();
    }
})


Vue.prototype.$http=Axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
