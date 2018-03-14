import Vue from 'vue'
import Router from 'vue-router'

import reportRoutes from '../components/0-report/index'

Vue.use(Router)

export default new Router({
  routes: [
    ...reportRoutes
  ]
})
