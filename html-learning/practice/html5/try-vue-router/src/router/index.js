import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home.vue'
import Bar from '@/components/Bar.vue'
import Foo from '@/components/Foo.vue'

Vue.use(Router)

export default new Router({
  // 地址格式使用history格式
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/foo',
      name: 'foo',
      component: Foo
    },
    {
      path: '/bar',
      name: 'bar',
      component: Bar
    }
  ]
})
