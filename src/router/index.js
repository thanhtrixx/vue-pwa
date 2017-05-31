import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Vuetify'
// import Vutify from '@/components/Vutify'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    }
    // {
    //   path: '/',
    //   name: 'Vutify',
    //   component: Vutify
    // }
  ]
})
