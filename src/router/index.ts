import Vue from 'vue';
import Router from 'vue-router';

// good ask share job
Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'index',
            redirect: '/goods',
        },
        {
            path: '/goods',
            name: 'goods',
            component: () => import('@/views/goods/index.vue'),
        },
        {
            path: '/ask',
            name: 'ask',
            component: () => import('@/views/ask/index.vue'),
        },
        {
            path: '/share',
            name: 'share',
            component: () => import('@/views/share/index.vue'),
        },
        {
            path: '/job',
            name: 'job',
            component: () => import('@/views/job/index.vue'),
        },
        {
            path: '/detail/:id',
            name: 'detail',
            component: () => import('@/views/detail/index.vue'),
        },
        {
            path: '*',
            name: '404',
            component: () => import('@/views/404.vue'),
        },
    ],
});
