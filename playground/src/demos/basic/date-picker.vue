<template>
  <div class="demo-section">
    <h3>日期 / 月份 / 年份选择</h3>
    <div class="demo-row">
      <el-date-picker v-model="date" type="date" placeholder="选择日期" style="width: 200px" />
      <el-date-picker v-model="month" type="month" placeholder="选择月份" style="width: 200px" />
      <el-date-picker v-model="year" type="year" placeholder="选择年份" style="width: 200px" />
    </div>
  </div>
  <div class="demo-section">
    <h3>日期范围 / 带快捷选项</h3>
    <div class="demo-row">
      <el-date-picker v-model="range" type="daterange" range-separator="至" start-placeholder="开始" end-placeholder="结束" style="width: 320px" />
      <el-date-picker v-model="shortcutsDate" type="date" placeholder="快捷选项" :shortcuts="shortcuts" style="width: 200px" />
    </div>
  </div>
  <div class="demo-section">
    <h3>禁用日期（周末不可选）与状态</h3>
    <div class="demo-row">
      <el-date-picker v-model="disabledDate" type="date" placeholder="周末禁用" :disabled-date="disableWeekend" style="width: 200px" />
      <el-date-picker type="date" disabled placeholder="禁用" style="width: 200px" />
      <el-date-picker type="date" placeholder="清空可校验" :clearable="true" style="width: 200px" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const date = ref(new Date())
const month = ref(null)
const year = ref(null)
const range = ref(null)
const shortcutsDate = ref(null)
const disabledDate = ref(null)
const shortcuts = [
  { text: '今天', value: new Date() },
  { text: '昨天', value: () => new Date(Date.now() - 86400000) },
  { text: '一周前', value: () => new Date(Date.now() - 7 * 86400000) },
]
const disableWeekend = (date) => [0, 6].includes(date.getDay())
</script>
