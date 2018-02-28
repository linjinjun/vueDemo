import Vue from 'vue'
import Router from 'vue-router'
import GridTable from '@/components/GridTable'
import demo from '@/components/demo'
import FormLayout from '@/components/FormLayout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/GridTable',
      name: 'GridTable',
      component: GridTable
    },
    {
      path: '/demo',
      name: 'demo',
      component: demo
    },
    {
      path: '/FormLayout',
      name: 'FormLayout',
      component: FormLayout
    }
  ]
})
