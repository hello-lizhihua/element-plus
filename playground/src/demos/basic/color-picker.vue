<template>
  <div class="demo-section">
    <h3>有默认值 / 无默认值</h3>
    <div class="demo-row">
      <el-color-picker v-model="color1" />
      <el-color-picker v-model="color2" />
    </div>
  </div>
  <div class="demo-section">
    <h3>透明与预定义颜色</h3>
    <div class="demo-row">
      <el-color-picker v-model="color3" show-alpha :predefine="predefine" />
    </div>
  </div>
  <div class="demo-section">
    <h3>禁用</h3>
    <div class="demo-row">
      <el-color-picker />
      <el-color-picker size="small" />
      <el-color-picker disabled />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const color1 = ref('#fb7299')
const color2 = ref(null)
const color3 = ref('rgba(94, 109, 130, 0.6)')
const predefine = ['#fb7299', '#5e6d82', '#67c23a', '#e6a23c', '#f56c6c', '#409eff']
</script>
