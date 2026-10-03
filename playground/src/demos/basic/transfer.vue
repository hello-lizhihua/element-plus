<template>
  <div class="demo-section">
    <h3>基础（可搜索 / 可自定义左右内容）</h3>
    <el-transfer v-model="value" :data="data" :titles="['候选', '已选']" />
  </div>
  <div class="demo-section">
    <h3>可搜索 + 禁用项</h3>
    <el-transfer v-model="value2" :data="data2" filterable filter-placeholder="搜索城市" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref([1, 4])
const data = Array.from({ length: 8 }, (_, i) => ({
  key: i + 1,
  label: `能力 ${i + 1}`,
  disabled: i === 5,
}))
const value2 = ref([])
const data2 = [
  { key: 'sh', label: '上海' },
  { key: 'bj', label: '北京' },
  { key: 'gz', label: '广州' },
  { key: 'sz', label: '深圳' },
  { key: 'cd', label: '成都' },
]
</script>
