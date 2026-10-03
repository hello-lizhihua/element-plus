<template>
  <div class="demo-section">
    <h3>基础（可清空 / 可搜索）</h3>
    <el-select v-model="value" placeholder="请选择" clearable filterable style="width: 260px">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" :disabled="item.disabled" />
    </el-select>
  </div>
  <div class="demo-section">
    <h3>多选 / 标签折叠 / 尺寸 / 禁用</h3>
    <div class="demo-col">
      <el-select v-model="multi" multiple placeholder="多选" style="width: 360px">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
      <el-select v-model="multi2" multiple collapse-tags collapse-tags-tooltip placeholder="折叠标签" style="width: 360px">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
      <el-select placeholder="禁用" disabled style="width: 260px" />
    </div>
  </div>
  <div class="demo-section">
    <h3>分组</h3>
    <el-select v-model="grouped" placeholder="按分组选择" style="width: 260px">
      <el-option-group v-for="g in groupOptions" :key="g.label" :label="g.label">
        <el-option v-for="item in g.options" :key="item.value" :label="item.label" :value="item.value" />
      </el-option-group>
    </el-select>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref(null)
const multi = ref([])
const multi2 = ref(['sh'])
const grouped = ref(null)
const options = [
  { value: 'sh', label: '上海' },
  { value: 'bj', label: '北京' },
  { value: 'gz', label: '广州', disabled: true },
  { value: 'sz', label: '深圳' },
]
const groupOptions = [
  { label: '前端', options: [{ value: 'vue', label: 'Vue' }, { value: 'react', label: 'React' }] },
  { label: '后端', options: [{ value: 'node', label: 'Node.js' }, { value: 'go', label: 'Go' }] },
]
</script>
