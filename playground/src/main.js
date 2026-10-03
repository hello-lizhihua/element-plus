import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import '@ep-skin/styles/skins/blue-light.css'
import '@ep-skin/styles/skins/blue-dark.css'
import '@ep-skin/styles/skins/pink-light.css'
import '@ep-skin/styles/skins/pink-dark.css'
import '@ep-skin/styles/components/index.css'
import './app.css'
import App from './App.vue'
import { router } from './router.js'

createApp(App).use(ElementPlus).use(router).mount('#app')
