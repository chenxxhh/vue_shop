import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../components/Login";
import Home from "../components/Home";


Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {path: '/', redirect: '/login'},
        {path: '/login', component: Login},
        {path: '/home', component: Home}
    ]
})

//挂载路由守卫
router.beforeEach((to, from, next) => {
    //只有login不需要权限
    if (to.path == '/login') {
        return next();
    }
    //判断是否有token
    const token = window.sessionStorage.getItem('token')
    if (!token) {
        return next('/login')
    } else {
        next()
    }
})

export default router
