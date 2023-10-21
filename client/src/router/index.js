import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/HomePage.vue"
import VueWebMobile from '@/components/NavWebMobile.vue'
import Login from "../views/Login.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'HomePage',
            component: Home
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        }
        // ,
        // {
        //     path: '/register',
        //     name: 'register',
        //     component: Register
        //     // route level code-splitting
        //     // this generates a separate chunk (About.[hash].js) for this route
        //     // which is lazy-loaded when the route is visited.

        // }
    ]
})

export default router
