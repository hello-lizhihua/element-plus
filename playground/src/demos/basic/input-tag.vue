<template>
  <div class="demo-section">
    <h3>基础（输入回车生成标签）</h3>
    <el-input-tag v-model="tags" placeholder="输入后回车,如:vue" clearable style="width: 360px" />
    <p>值:<code>{{ JSON.stringify(tags) }}</code></p>
  </div>
  <div class="demo-section">
    <h3>数量上限 / 禁用 / 保留输入内容</h3>
    <div class="demo-col">
      <el-input-tag v-model="limited" :max="3" placeholder="最多 3 个标签" style="width: 360px" />
      <el-input-tag v-model="fixed" disabled style="width: 360px" />
      <el-input-tag v-model="keep" save-on-blur placeholder="失焦也保存" style="width: 360px" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const tags = ref(['element-plus', '皮肤'])
const limited = ref(['a', 'b'])
const fixed = ref(['只读标签'])
const keep = ref([])
</script>
