import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    //mode: 'history', //testare in futuro
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/404',
            name: '404',
            component: () => import(/* webpackChunkName: "404" */ './views/_404.vue')
        },
        {
            path: '*',
            redirect: '404',
        },
    ]
})
