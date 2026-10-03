<template>
  <div class="demo-section">
    <h3>基础（可清空，多级联动）</h3>
    <el-cascader v-model="value" :options="options" clearable style="width: 320px" @change="onChange" />
  </div>
  <div class="demo-section">
    <h3>仅选叶子 / 多选 / 展示全部层级</h3>
    <div class="demo-col">
      <el-cascader :options="options" :show-all-levels="false" placeholder="仅显示末级" style="width: 320px" />
      <el-cascader :options="options" :props="{ multiple: true }" placeholder="多选" collapse-tags style="width: 320px" />
      <el-cascader :options="options" disabled placeholder="禁用" style="width: 320px" />
    </div>
  </div>
  <div class="demo-section">
    <h3>选择任意一级（checkStrictly）</h3>
    <el-cascader :options="options" :props="{ checkStrictly: true }" clearable style="width: 320px" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref([])
const options = [
  {
    value: 'frontend',
    label: '前端',
    children: [
      { value: 'vue', label: 'Vue', children: [{ value: 'vue3', label: 'Vue 3' }] },
      { value: 'react', label: 'React' },
    ],
  },
  {
    value: 'backend',
    label: '后端',
    children: [
      { value: 'node', label: 'Node.js' },
      { value: 'python', label: 'Python' },
    ],
  },
]
const onChange = (value) => console.log(value)
</script>
