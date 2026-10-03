<template>
  <div class="demo-section">
    <h3>任意时间 / 固定时间点</h3>
    <div class="demo-row">
      <el-time-picker v-model="t1" placeholder="任意时间" style="width: 180px" />
      <el-time-picker v-model="range" is-range range-separator="至" start-placeholder="开始" end-placeholder="结束" style="width: 300px" />
    </div>
  </div>
  <div class="demo-section">
    <h3>固定时刻下拉（time-select）</h3>
    <div class="demo-row">
      <el-time-select v-model="t2" start="08:00" step="00:30" end="18:30" placeholder="选择时间" style="width: 180px" />
      <el-time-select v-model="t3" start="08:00" step="00:15" end="18:30" disabled placeholder="禁用" style="width: 180px" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const t1 = ref(new Date(2026, 0, 1, 9, 30))
const range = ref(null)
const t2 = ref('09:00')
const t3 = ref(null)
</script>
