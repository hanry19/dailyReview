import Vue from 'vue';
import Router from "vue-router";


Vue.use(Router);


// 라우터 인스턴스 생성
const router = new Router({
    mode: 'history',
    routes: [
        {path : '/', name :'root', redirect: 'home'},
        {path: '/home', name: "home", component: () => import("@/views/main/Home")},
        {path: '/login', name: "login", component: () => import("@/views/login/LoginView")},
    ]
})

export default router;