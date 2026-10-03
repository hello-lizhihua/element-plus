<template>
  <div class="demo-section">
    <h3>线性进度条（type / 百分比内显 / 条纹）</h3>
    <div class="demo-col">
      <el-progress :percentage="70" />
      <el-progress :percentage="70" :stroke-width="16" striped striped-flow />
      <el-progress :percentage="100" status="success" />
      <el-progress :percentage="50" status="warning" />
      <el-progress :percentage="30" status="exception" />
      <el-progress :percentage="45" :text-inside="true" :stroke-width="20" />
    </div>
  </div>
  <div class="demo-section">
    <h3>环形与仪表盘</h3>
    <div class="demo-row">
      <el-progress type="circle" :percentage="25" />
      <el-progress type="circle" :percentage="70" status="success" />
      <el-progress type="dashboard" :percentage="55" :color="colors" />
    </div>
  </div>
  <div class="demo-section">
    <h3>动画流入（动态改变）</h3>
    <el-progress :percentage="dynamic" />
    <el-button size="small" @click="dynamic = (dynamic + 10) % 100">+10%</el-button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const dynamic = ref(10)
const colors = [
  { color: '#f56c6c', percentage: 30 },
  { color: '#e6a23c', percentage: 60 },
  { color: '#67c23a', percentage: 100 },
]
let timer
onMounted(() => {
  timer = setInterval(() => {
    dynamic.value = (dynamic.value % 100) + 10
  }, 1200)
})
onUnmounted(() => clearInterval(timer))
</script>
