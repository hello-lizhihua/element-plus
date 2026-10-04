import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import '@hello-lizhihua/element-plus/skins/blue-light.css'
import '@hello-lizhihua/element-plus/skins/blue-dark.css'
import '@hello-lizhihua/element-plus/skins/pink-light.css'
import '@hello-lizhihua/element-plus/skins/pink-dark.css'
import '@hello-lizhihua/element-plus/components/index.css'
import './app.css'
import App from './App.vue'
import { router } from './router.js'

createApp(App).use(ElementPlus).use(router).mount('#app')
