import Vue from 'vue'
import VueRouter from 'vue-router'

import { todosRoutes } from './todos'

Vue.use(VueRouter);

const appRoutes = [
    {
        path: '/',
        redirect: '/todos'
    }
];

const routes = [...todosRoutes, ...appRoutes];

export default new VueRouter({
    mode: 'history',
    routes
})
