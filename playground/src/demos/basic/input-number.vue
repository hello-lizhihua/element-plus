<template>
  <div class="demo-section">
    <h3>步进 / 范围限制 / 禁用 / 无按钮</h3>
    <div class="demo-col">
      <el-input-number v-model="num" :min="1" :max="20" @change="onChange" />
      <el-input-number v-model="num2" :step="5" :min="0" :max="100" step-strictly />
      <el-input-number v-model="num3" disabled />
      <el-input-number v-model="num4" :controls="false" placeholder="无控制按钮" />
      <el-input-number v-model="num5" :precision="2" :step="0.1" :max="10" placeholder="两位小数" />
    </div>
  </div>
  <div class="demo-section">
    <h3>尺寸与控制按钮位置</h3>
    <div class="demo-col">
      <el-input-number size="small" :min="1" />
      <el-input-number controls-position="right" :min="1" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const num = ref(1)
const num2 = ref(5)
const num3 = ref(3)
const num4 = ref(null)
const num5 = ref(1.5)
const onChange = (value) => console.log(value)
</script>
