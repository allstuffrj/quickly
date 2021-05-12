import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Intro from '../components/intro/index.vue'
import Chat from '../components/Pages/Chat.vue'

export const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Intro,
        meta: { layout: 'intro-layout' }
    },
    {
        path: '/chats',
        name: 'Chats',
        component: Chat,
        meta: { layout: 'inner-layout' }
    },
    {
        path: '/sign-in',
        name: 'SignIn',
        component: Intro,
        meta: { layout: 'intro-layout' }
    },{
        path: '/sign-up',
        name: 'SignUp',
        component: Intro,
        meta: { layout: 'intro-layout' }
    },
    {
        path: '/reset-password',
        name: 'reset-password',
        component: Intro,
        meta: { layout: 'intro-layout' }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: "active",
})


export default router
