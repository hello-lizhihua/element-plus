<template>
  <div class="demo-section">
    <h3>滚动到底自动加载（v-infinite-scroll）</h3>
    <ul class="scroll-list" v-infinite-scroll="load" infinite-scroll-distance="40" style="max-height: 240px; overflow: auto">
      <li v-for="item in items" :key="item" class="scroll-item">{{ item }}</li>
      <li v-if="loading" class="scroll-item" style="color: var(--el-text-color-secondary)">加载中…</li>
      <li v-if="noMore" class="scroll-item" style="color: var(--el-text-color-secondary)">没有更多了</li>
    </ul>
  </div>
  <div class="demo-section">
    <h3>用 el-select 虚拟化+无限思路的分页下拉（select 远程分页简化版）</h3>
    <p style="font-size: 13px; color: var(--el-text-color-secondary)">
      infinite-scroll 指令也可用于 select 的下拉面板与横向容器,这里以纵向列表为准。
    </p>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const items = ref(Array.from({ length: 12 }, (_, i) => `条目 ${i + 1}`))
const page = ref(1)
const loading = ref(false)
const noMore = computed(() => page.value >= 4)
const load = () => {
  if (noMore.value) return
  loading.value = true
  setTimeout(() => {
    page.value += 1
    const base = items.value.length
    items.value.push(...Array.from({ length: 8 }, (_, i) => `条目 ${base + i + 1}`))
    loading.value = false
  }, 600)
}
</script>

<style scoped>
.scroll-list {
  list-style: none;
  margin: 0;
  padding: 0 4px;
  border: 1px solid var(--el-border-color-lighter);
  border-radius: 8px;
}
.scroll-item {
  padding: 8px 6px;
  font-size: 13px;
  border-bottom: 1px solid var(--el-border-color-extra-light);
}
</style>
