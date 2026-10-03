<template>
  <div class="demo-section">
    <h3>基础（只读）</h3>
    <el-rate v-model="value" />
  </div>
  <div class="demo-section">
    <h3>辅助文字 / 半星 / 清除</h3>
    <div class="demo-col">
      <el-rate v-model="value2" show-text :texts="['很差', '较差', '一般', '不错', '很棒']" />
      <el-rate v-model="value3" allow-half />
      <el-rate v-model="value4" clearable />
    </div>
  </div>
  <div class="demo-section">
    <h3>颜色分级 / 禁用 / 自定义图标</h3>
    <div class="demo-col">
      <el-rate v-model="value5" :colors="['#f56c6c', '#e6a23c', '#67c23a']" />
      <el-rate :model-value="4" disabled />
      <el-rate v-model="value6" :icons="['LogoAndroid', 'LogoApple', 'LogoWindows']" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref(3)
const value2 = ref(3)
const value3 = ref(3.5)
const value4 = ref(4)
const value5 = ref(2)
const value6 = ref(3)
</script>
