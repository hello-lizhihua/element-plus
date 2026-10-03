<template>
  <div class="demo-section">
    <h3>font-family / font-size / 行高 / 基础用法</h3>
    <div class="demo-col">
      <span class="ft" style="font-family: var(--el-font-family)">font-family: var(--el-font-family)</span>
      <span class="ft" style="font-size: 13px">font-size 13px 辅助文字</span>
      <span class="ft" style="font-size: var(--el-font-size-base); font-weight: 600">font-weight 600 标题强调</span>
      <span class="ft" style="font-size: 20px; font-weight: 700">font-size 20px 页面标题</span>
      <span class="ft" style="line-height: 1.8">line-height 1.8 多行文本的行高表现，多行文本的行高表现，多行文本的行高表现。</span>
    </div>
  </div>
  <div class="demo-section">
    <h3>层级色（primary / regular / secondary / placeholder / disabled）</h3>
    <div class="demo-col">
      <span class="ft" style="color: var(--el-text-color-primary)">主文字 primary</span>
      <span class="ft" style="color: var(--el-text-color-regular)">常规文字 regular</span>
      <span class="ft" style="color: var(--el-text-color-secondary)">次要文字 secondary</span>
      <span class="ft" style="color: var(--el-text-color-placeholder)">占位文字 placeholder</span>
      <span class="ft" style="color: var(--el-text-color-disabled)">禁用文字 disabled</span>
    </div>
  </div>
</template>

<style scoped>
.ft {
  font-size: 14px;
}
</style>
