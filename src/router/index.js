import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '../components/index/index'
import Query from '../components/query/query'
import News from '../components/news/news'
import Recycle from '../components/recycle/recycle'
import About from '../components/about/about'

Vue.use(Router)

export default new Router({
    linkActiveClass: 'active', //动态class
    routes: [
        {
            path: '/',
            redirect: { name: 'index' }
        },
        {
            path: '/ ',
            name: 'index',
            component: Index
        },
        {
            path: '/query',
            name: 'query',
            component: Query
        },
        {
            path: '/news',
            name: 'news',
            component: News
        },
        {
            path: '/recycle',
            name: 'recycle',
            component: Recycle
        },
        {
            path: '/about',
            name: 'about',
            component: About
        }
    ]
})
