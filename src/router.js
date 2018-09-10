import Vue from 'vue'
import Router from 'vue-router'
import Button from './views/Button.vue'
import Grid from './views/Grid.vue'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Button',
      component: Button
    },
    {
      path: '/grid',
      name: 'Grid',
      component: Grid
    }
    
  ]
})

router.beforeEach((to, from, next) => {
 
  next()
})


export default router;