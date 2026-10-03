import { createRouter, createWebHistory } from 'vue-router'
import DemoHost from './DemoHost.vue'

// 路由与官方文档保持一致:/zh-CN/component/<组件名>
export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/zh-CN/component/button' },
    { path: '/zh-CN/component/:key', name: 'demo', component: DemoHost },
    { path: '/:pathMatch(.*)*', redirect: '/zh-CN/component/button' },
  ],
})
