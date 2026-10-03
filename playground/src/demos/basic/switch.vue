<template>
  <div class="demo-section">
    <h3>基础 / 文字描述 / 禁用</h3>
    <div class="demo-col">
      <el-switch v-model="s1" />
      <el-switch v-model="s2" active-text="按月付费" inactive-text="按年付费" />
      <el-switch v-model="s3" inline-prompt active-text="开" inactive-text="关" />
      <el-switch v-model="s4" disabled />
      <el-switch v-model="s5" loading />
    </div>
  </div>
  <div class="demo-section">
    <h3>自定义颜色与图标</h3>
    <div class="demo-row">
      <el-switch v-model="s6" active-color="#fb7299" inactive-color="#5e6d82" />
      <el-switch v-model="s7" inline-prompt active-text="🌙" inactive-text="☀️" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const s1 = ref(true)
const s2 = ref(false)
const s3 = ref(true)
const s4 = ref(true)
const s5 = ref(false)
const s6 = ref(true)
const s7 = ref(false)
</script>
