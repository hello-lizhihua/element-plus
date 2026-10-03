<template>
  <div class="demo-section">
    <h3>固定时刻（起始 08:00，步进 30 分钟）</h3>
    <el-time-select v-model="time" start="08:00" step="00:30" end="18:30" placeholder="选择时间" clearable style="width: 200px" />
    <p>当前值:<code>{{ time || '（空）' }}</code></p>
  </div>
  <div class="demo-section">
    <h3>时间段范围</h3>
    <el-time-select v-model="start" start="08:00" step="01:00" end="16:00" placeholder="开始" style="width: 160px" />
    <span style="margin: 0 8px">至</span>
    <el-time-select v-model="end" :start="start || '08:00'" step="01:00" end="20:00" placeholder="结束" style="width: 160px" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const time = ref('')
const start = ref('08:00')
const end = ref('')
</script>
