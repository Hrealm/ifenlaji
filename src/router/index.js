import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '../components/index/index'
import Query from '../components/query/query'
import Test from '../components/test/test'
import Prediction from '../components/prediction/prediction'
import News from '../components/news/news'
import Recycle from '../components/recycle/recycle'
import About from '../components/about/about'


//导入插件axios 挂载属性
import Axios from 'axios'
Vue.prototype.axios = Axios;


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
            path: '/test',
            name: 'test',
            component: Test
        },
        {
            path: '/prediction',
            name: 'prediction',
            component: Prediction
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
