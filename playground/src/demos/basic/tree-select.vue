<template>
  <div class="demo-section">
    <h3>树数据选择（可清空）</h3>
    <el-tree-select v-model="value" :data="data" clearable check-strictly placeholder="选择部门" style="width: 300px" />
  </div>
  <div class="demo-section">
    <h3>多选（标签展示）</h3>
    <el-tree-select v-model="multi" :data="data" multiple show-checkbox check-strictly placeholder="多选部门" style="width: 380px" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref(null)
const multi = ref([])
const data = [
  {
    value: '1',
    label: '总公司',
    children: [
      { value: '1-1', label: '研发部', children: [{ value: '1-1-1', label: '前端组' }, { value: '1-1-2', label: '后端组' }] },
      { value: '1-2', label: '市场部' },
    ],
  },
  { value: '2', label: '分公司', children: [{ value: '2-1', label: '华南分部' }] },
]
</script>
