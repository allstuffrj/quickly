import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Intro from '../components/intro/index.vue'


export const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Intro,
        meta: { layout: 'intro-layout' }
    },
    {
        path: '/',
        name: 'Chats',
        component: Intro,
        meta: { layout: 'intro-layout' }
    },
    {
        path: '/',
        name: 'SignIn',
        component: Intro,
        meta: { layout: 'intro-layout' }
    },
    {
        path: '/',
        name: 'reset-password',
        component: Intro,
        meta: { layout: 'intro-layout' }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router
