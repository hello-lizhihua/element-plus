<template>
  <div class="demo-section">
    <h3>品牌色（主色及其梯度由皮肤决定）</h3>
    <div class="demo-row">
      <div v-for="c in brand" :key="c.var" class="swatch" :style="{ background: `var(${c.var})` }">
        <span>{{ c.label }}</span>
        <code>{{ c.var }}</code>
      </div>
    </div>
  </div>
  <div class="demo-section">
    <h3>功能色</h3>
    <div class="demo-row">
      <div v-for="c in funColors" :key="c.var" class="swatch" :style="{ background: `var(${c.var})` }">
        <span>{{ c.label }}</span>
        <code>{{ c.var }}</code>
      </div>
    </div>
  </div>
  <div class="demo-section">
    <h3>中性色（文本 / 边框 / 填充）</h3>
    <div class="demo-row">
      <div v-for="c in neutrals" :key="c.var" class="swatch" :style="{ background: `var(${c.var})` }">
        <span>{{ c.label }}</span>
        <code>{{ c.var }}</code>
      </div>
    </div>
  </div>
</template>

<script setup>
const brand = [
  { var: '--el-color-primary', label: 'primary' },
  { var: '--el-color-primary-dark-2', label: 'dark-2' },
  { var: '--el-color-primary-light-3', label: 'light-3' },
  { var: '--el-color-primary-light-5', label: 'light-5' },
  { var: '--el-color-primary-light-7', label: 'light-7' },
  { var: '--el-color-primary-light-8', label: 'light-8' },
  { var: '--el-color-primary-light-9', label: 'light-9' },
]
const funColors = [
  { var: '--el-color-success', label: 'success' },
  { var: '--el-color-warning', label: 'warning' },
  { var: '--el-color-danger', label: 'danger' },
  { var: '--el-color-error', label: 'error' },
  { var: '--el-color-info', label: 'info' },
]
const neutrals = [
  { var: '--el-text-color-primary', label: 'text-primary' },
  { var: '--el-text-color-regular', label: 'text-regular' },
  { var: '--el-text-color-secondary', label: 'text-secondary' },
  { var: '--el-border-color', label: 'border' },
  { var: '--el-border-color-light', label: 'border-light' },
  { var: '--el-fill-color', label: 'fill' },
  { var: '--el-fill-color-light', label: 'fill-light' },
  { var: '--el-bg-color-page', label: 'bg-page' },
]
</script>

<style scoped>
.swatch {
  width: 108px;
  height: 72px;
  border-radius: 8px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 12px;
  color: #fff;
  border: 1px solid var(--el-border-color-lighter);
}
.swatch code {
  font-size: 10px;
  opacity: 0.85;
  word-break: break-all;
}
</style>
