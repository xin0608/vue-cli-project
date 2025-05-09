import { createRouter, createWebHashHistory } from 'vue-router'



const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('./views/Home.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes
})

export default router