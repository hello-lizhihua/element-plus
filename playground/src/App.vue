<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { groups, allItems } from './registry.js'

// 侧栏章节分组:保持 items 原顺序
function byChapter(group) {
  const order = []
  const map = new Map()
  for (const item of group.items) {
    if (!map.has(item.chapter)) {
      map.set(item.chapter, { chapter: item.chapter, items: [] })
      order.push(map.get(item.chapter))
    }
    map.get(item.chapter).items.push(item)
  }
  return order
}

const SKINS = [
  { label: '明亮蓝 · 浅', value: 'blue-light' },
  { label: '明亮蓝 · 深', value: 'blue-dark' },
  { label: '清新粉 · 浅', value: 'pink-light' },
  { label: '清新粉 · 深', value: 'pink-dark' },
]

const skin = ref(localStorage.getItem('ep-skin') || 'blue-light')

function applySkin(value) {
  const root = document.documentElement
  const [name, mode] = value.split('-')
  root.dataset.skin = name
  root.classList.toggle('dark', mode === 'dark')
  localStorage.setItem('ep-skin', value)
}

watch(skin, applySkin, { immediate: true })

const route = useRoute()
const router = useRouter()
const active = computed(() => route.params.key || 'button')

// 路由 query.skin 变化即切换皮肤(文档站皮肤链接跳转用)
watch(() => route.query.skin, (value) => {
  if (value && /^(blue|pink)-(light|dark)$/.test(String(value))) {
    skin.value = String(value)
  }
})

function onSelect(key) {
  router.push(`/zh-CN/component/${key}`)
}
</script>

<template>
  <el-container direction="vertical" class="showcase">
    <header class="showcase-header">
      <div class="brand">
        Element Plus 皮肤
        <span class="brand-sub">组件状态与色值测试床 · 基础用法 {{ groups[0].items.length }} · 复合用法 {{ groups[1].items.length }}</span>
      </div>
      <el-segmented :model-value="skin" :options="SKINS" @change="applySkin" />
    </header>
    <el-container class="showcase-body">
      <aside class="showcase-side">
        <el-scrollbar>
          <el-menu :default-active="active" @select="onSelect">
            <template v-for="group in groups" :key="group.title">
              <li class="menu-group-title">{{ group.title }}</li>
              <template v-for="chapterGroup in byChapter(group)" :key="group.title + chapterGroup.chapter">
                <el-menu-item-group :title="chapterGroup.chapter">
                  <el-menu-item v-for="item in chapterGroup.items" :key="item.key" :index="item.key">
                    {{ item.label }}
                  </el-menu-item>
                </el-menu-item-group>
              </template>
            </template>
          </el-menu>
        </el-scrollbar>
      </aside>
      <main class="showcase-main">
        <el-scrollbar always>
          <router-view />
        </el-scrollbar>
      </main>
    </el-container>
  </el-container>
</template>

<style scoped>
.showcase {
  height: 100vh;
}

.showcase-header {
  height: 56px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  border-bottom: 1px solid var(--el-border-color-light);
  background: var(--el-bg-color);
}

.brand {
  font-size: 15px;
  font-weight: 600;
}

.brand-sub {
  margin-left: 10px;
  font-size: 12px;
  font-weight: 400;
  color: var(--el-text-color-secondary);
}

.showcase-body {
  flex: 1;
  min-height: 0;
}

.showcase-side {
  width: 216px;
  flex-shrink: 0;
  border-right: 1px solid var(--el-border-color-light);
  background: var(--el-bg-color-page);
}

.menu-group-title {
  padding: 12px 20px 4px;
  font-size: 12px;
  color: var(--el-text-color-secondary);
  list-style: none;
}

.showcase-main {
  flex: 1;
  min-width: 0;
  background: var(--el-bg-color);
}

.demo-title {
  margin: 0 0 18px;
  font-size: 20px;
}
</style>
