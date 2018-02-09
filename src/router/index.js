import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Main from '@/components/Main'
import Article from '@/components/Article'
import NotPage from '@/components/404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/',
          name: 'main',
          component: Main,
        },
        {
          path: '/404',
          name: '404',
          component: NotPage
        },
        {
          path: '/article',
          name: 'article',
          component: Article,
        }
      ]
    }

  ]
})
