import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/cookies'
import { Route } from 'vue-router'

const whiteList = ['/login']
NProgress.configure({ showSpinner: false })

router.beforeEach(async (to: Route, _: Route, next: any) => {
    NProgress.start()
    const hasToken = getToken()
    if (hasToken) {
        if (to.path === '/login') {
            next({ path: '/' })
            NProgress.done()
        } else {
            next()
        }
    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            next('/login')
            NProgress.done()
        }
    }
})

router.afterEach((to: Route) => {
    NProgress.done()
})

