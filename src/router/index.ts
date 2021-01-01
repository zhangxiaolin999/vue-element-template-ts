import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
/* Layout */
import Layout from '@/layout/index.vue'
Vue.use(VueRouter);
const routes: Array<RouteConfig> = [
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/login/index.vue'),
    meta: { hidden: true }
  },
  {
    path: '/',
    component: Layout,
    redirect: '/',
    children: [
      {
        path: 'dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/home/index.vue'),
        name: 'Dashboard',
        meta: {
          affix: true
        }
      }
    ]
  },
  {
    path: '/404',
    component: () => import('@/views/404.vue'),
    hidden: true
  },
  { path: '*', redirect: '/404', hidden: true }
];

const router = new VueRouter({
  routes
});

export default router;
