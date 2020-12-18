import router from './index'
import { getToken } from '@/utils/auth'
//全局守卫
router.beforeEach((to, from, next) => {
    const hasToken = getToken(); //获取token
    if (hasToken) {
        //如果有token
        if (to.path === '/login') { //如果去的是登录页
            next({ path: '/' }); //直接跳转到首页
        } else {
            next();
        }
    } else { //没有token到话
        if (to.path === '/login') {
            next();
        } else { //都要回到登录页面
            next({ path: '/login' });
        }
    }
})