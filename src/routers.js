/**
 * Created by liang.shan on 2016/11/16.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from './components/404.vue'
import Home from './components/home.vue'
import Login from './components/login.vue'
import Register from './components/register.vue'
import Forget from './components/forget.vue'
import SurveyList from './components/surcvey/survey.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/forget',
    component: Forget
  },
  {
    path: '/survey/index',
    component: SurveyList
  },
  {
    path: '/survey/index/id/:id/s/:step',
    component: SurveyList
  },
  {
    path: '/',
    component: Home
  },
  {
    path: '*',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: routes
})

export default router
