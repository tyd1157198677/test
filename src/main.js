import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import  VueResource  from 'vue-resource'

          

// const originalPush = router.prototype.push
// router.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }
Vue.use(VueResource)
Vue.config.productionTip = false
Vue.prototype.$ajax = axios
Vue.use(axios) 
Vue.use(router)
Vue.use(ElementUI)
axios.defaults.baseURL = 'http://192.168.1.188'
router.beforeEach((to, from, next) => {
  if (to.path === '/Login') {
    next();
  } else {
    let token = localStorage.getItem('Authorization');
    if (token === 'null' || token === '') {
      next('/Login');
    } else {
      next();
    }
  }
});

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
