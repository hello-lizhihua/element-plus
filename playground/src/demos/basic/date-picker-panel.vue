<template>
  <div class="demo-section">
    <h3>日期范围面板（侧栏双面板联动）</h3>
    <el-date-picker-panel
      v-model="range"
      type="daterange"
      :unlink-panels="true"
      style="width: 660px"
    />
  </div>
  <div class="demo-section">
    <h3>单月面板 + 快捷选项</h3>
    <el-date-picker-panel v-model="date" type="date" :shortcuts="shortcuts" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const range = ref(null)
const date = ref(new Date())
const shortcuts = [
  { text: '今天', value: new Date() },
  { text: '一周后', value: () => new Date(Date.now() + 7 * 86400000) },
]
</script>
