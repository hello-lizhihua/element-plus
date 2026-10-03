<template>
  <div class="demo-section">
    <h3>面板形态（内嵌页面，非弹出）</h3>
    <el-color-picker-panel v-model="color" show-alpha :predefine="predefine" style="float: left" />
    <div style="margin-left: 260px">
      <p>当前值：<code>{{ color }}</code></p>
      <div class="preview" :style="{ background: color }" />
    </div>
    <div style="clear: both" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const color = ref('rgba(251, 114, 153, 0.8)')
const predefine = ['#fb7299', '#5e6d82', '#67c23a', '#e6a23c', '#f56c6c']
</script>

<style scoped>
.preview {
  width: 200px;
  height: 80px;
  border-radius: 8px;
  border: 1px solid var(--el-border-color-lighter);
}
</style>
