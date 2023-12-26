import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import VueRouter from 'vue-router'
import HomeSet from "./components/HomeSet.vue"
import InfiList from "./components/InfiList.vue"
import HelloWorld from "./components/HelloWorld.vue"

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
      {
        path: '/',
        redirect: '/home'
      },
      {
        path: '/home', 
        component: HomeSet, 
        children: [
          {
            path: '/',
            component: HelloWorld
          },
          {
            path: '/list',
            name: 'list',
            component: InfiList
         }
        ]
      }
    ],
    mode: 'hash'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')