import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: resolve => require(['@/components/HelloWorld'], resolve),
    },
    {
      path: '/VuexTest',
      name: 'VuexTest',
      component: resolve => require(['@/components/VuexTest'], resolve),
    },
    {
      path: '/VuexTest1',
      name: 'VuexTest1',
      component: resolve => require(['@/components/VuexTest1'], resolve),
    },
    {
      path: '/VuexTest2',
      name: 'VuexTest2',
      component: resolve => require(['@/components/VuexTest2'], resolve),
    },
    {
      path: '/VuexTest3',
      name: 'VuexTest3',
      component: resolve => require(['@/components/VuexTest3'], resolve),
    },
    {
      path: '/Getter',
      name: 'Getter',
      component: resolve => require(['@/components/Getter'], resolve),
    },
    {
      path: '/Actions',
      name: 'Actions',
      component: resolve => require(['@/components/Actions'], resolve),
    }
  ]
})
