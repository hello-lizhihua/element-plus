<template>
  <div class="demo-section">
    <h3>基础（带输入框显示当前值）</h3>
    <el-slider v-model="value" />
  </div>
  <div class="demo-section">
    <h3>范围 / 竖向 / 步进与断点</h3>
    <div class="demo-row" style="align-items: flex-start">
      <el-slider v-model="range" range :min="0" :max="100" style="width: 320px" />
      <el-slider v-model="vertical" vertical height="160px" style="margin-left: 40px" />
      <el-slider v-model="steps" :step="10" :marks="marks" show-stops style="width: 320px" />
    </div>
  </div>
  <div class="demo-section">
    <h3>禁用 / 只显示输入框</h3>
    <div class="demo-col">
      <el-slider v-model="disabled" disabled />
      <el-slider v-model="inputOnly" show-input :show-input-controls="false" />
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const value = ref(40)
const range = ref([25, 75])
const vertical = ref(30)
const steps = ref(30)
const disabled = ref(50)
const inputOnly = ref(20)
const marks = reactive({ 0: '0%', 30: '30%', 70: '70%', 100: '100%' })
</script>
