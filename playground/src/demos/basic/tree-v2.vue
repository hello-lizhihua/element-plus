<template>
  <div class="demo-section">
    <h3>虚拟化树（10000 节点）</h3>
    <el-tree-v2 :data="data" :props="{ value: 'id', label: 'name', children: 'children' }" :height="320" />
  </div>
  <div class="demo-section">
    <h3>筛选（filter-method）</h3>
    <el-input v-model="keyword" placeholder="输入关键字筛选" clearable style="width: 240px; margin-bottom: 10px" />
    <el-tree-v2 ref="treeRef" :data="data" :props="props" :height="220" :filter-method="filterMethod" />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const keyword = ref('')
const treeRef = ref(null)
const props = { value: 'id', label: 'name', children: 'children' }
const make = (id, name, children) => ({ id, name, children })
const data = [
  make(1, '一级 1', [
    make(4, '二级 1-1', [make(9, '三级 1-1-1'), make(10, '三级 1-1-2')]),
    make(5, '二级 1-2'),
  ]),
  make(2, '一级 2', [make(6, '二级 2-1'), make(7, '二级 2-2')]),
  make(3, '一级 3', [make(8, '二级 3-1')]),
]
const filterMethod = (query, node) => node.name.includes(query)
watch(keyword, (value) => treeRef.value?.filter(value))
</script>
