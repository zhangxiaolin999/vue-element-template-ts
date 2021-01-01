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
    meta: { hidden: true }
  },
  {
    path: '/404',
    component: () => import('@/views/404.vue'),
    meta: { hidden: true }
  },
  { path: '*', redirect: '/404', meta: { hidden: true } }
];

const router = new VueRouter({
  routes
});

export default router;
