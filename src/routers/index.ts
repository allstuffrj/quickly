import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Intro from '../components/intro/index.vue'
import SignIn from '../components/Pages/SignIn.vue'
import SignUp from '../components/Pages/SignUp.vue'
import resetPassword from '../components/Pages/ResetPassword.vue'
import Chat from '../components/Pages/Chat.vue'
import Calls from '../components/Pages/Calls.vue'
import Friends from '../components/Pages/Friends.vue'
import Account from '../components/Pages/Account.vue'

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
    },{
        path: '/calls',
        name: 'Calls',
        component: Calls,
        meta: { layout: 'inner-layout' }
    },{
        path: '/friends',
        name: 'Friends',
        component: Friends,
        meta: { layout: 'inner-layout' }
    },{
        path: '/account',
        name: 'Account',
        component: Account,
        meta: { layout: 'inner-layout' }
    },
    {
        path: '/sign-in',
        name: 'SignIn',
        component: SignIn,
        meta: { layout: 'auth-layout' }
    },{
        path: '/sign-up',
        name: 'SignUp',
        component: SignUp,
        meta: { layout: 'auth-layout' }
    },
    {
        path: '/reset-password',
        name: 'resetPassword',
        component: resetPassword,
        meta: { layout: 'auth-layout' }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: "active",
})


export default router
