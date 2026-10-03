<template>
  <div class="demo-section">
    <h3>日期时间选择 / 带快捷键</h3>
    <div class="demo-row">
      <el-date-picker v-model="value1" type="datetime" placeholder="选择日期时间" style="width: 220px" />
      <el-date-picker v-model="value2" type="datetime" placeholder="带快捷键" :shortcuts="shortcuts" style="width: 220px" />
    </div>
  </div>
  <div class="demo-section">
    <h3>时间范围（datetime-range）</h3>
    <el-date-picker v-model="range" type="datetimerange" range-separator="至" start-placeholder="开始" end-placeholder="结束" style="width: 380px" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const value1 = ref(null)
const value2 = ref(new Date())
const range = ref(null)
const shortcuts = [
  { text: '现在', value: new Date() },
  { text: '一小时后', value: () => new Date(Date.now() + 3600000) },
]
</script>
