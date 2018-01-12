import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import totalpages from '@/components/totalpages.vue'
import activePublic from '@/components/activePublic.vue'
import step1 from '@/pages/activePublic/step1.vue'
import step2 from '@/pages/activePublic/step2.vue'
import step3 from '@/pages/activePublic/step3.vue'
import step4 from '@/pages/activePublic/step4.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/activeManage',
      component: totalpages
    },
    {
      path: '/activePublic',
      component: activePublic,
      children: [
        {
          path: '',
          component: step1
        },
        {
          path: 'step1',
          component: step1
        },
        {
          path: 'step2',
          component: step2
        },
        {
          path: 'step3',
          component: step3
        },
        {
          path: 'step4',
          component: step4
        }
      ]
    }
  ]
})
