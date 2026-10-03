<template>
  <div class="demo-section">
    <h3>虚拟列表（3000 条选项仍流畅）</h3>
    <el-select-v2 v-model="value" :options="bigOptions" filterable placeholder="搜索 3000 条数据" style="width: 300px" />
  </div>
  <div class="demo-section">
    <h3>多选</h3>
    <el-select-v2 v-model="multi" :options="bigOptions" multiple collapse-tags placeholder="多选" style="width: 380px" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref(null)
const multi = ref([])
const initials = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
const bigOptions = Array.from({ length: 3000 }, (_, i) => ({
  value: `option-${i}`,
  label: `${initials[i % 10]}-${i}`,
}))
</script>
