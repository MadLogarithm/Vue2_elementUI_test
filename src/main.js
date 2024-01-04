import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import VueRouter from 'vue-router'
import * as echarts from 'echarts'
import HomeSet from "./components/HomeSet.vue"
import InfiList from "./components/InfiList.vue"
import HelloWorld from "./components/HelloWorld.vue"
import PersonData from "./components/PersonData.vue"
import PersonIntro from "./components/PersonIntro.vue"
import TimeMagazine from "./components/TimeMagazine.vue"

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.prototype.$echarts = echarts

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
      },
      {
        path: '/person',
        component: PersonData
      },
      {
        path: '/intro',
        component: PersonIntro
      },
      {
        path: '/time_magazine',
        component: TimeMagazine
      }
    ],
    mode: 'hash'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')