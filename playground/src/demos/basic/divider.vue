<template>
  <div class="demo-section">
    <h3>分割线（含文字 / 位置 / 虚线 / 垂直）</h3>
    <el-divider />
    <el-divider content-position="left">左标题</el-divider>
    <el-divider content-position="right">右标题</el-divider>
    <el-divider border-style="dashed">虚线</el-divider>
    <div style="display: flex; align-items: center; height: 32px">
      <span>内容一</span>
      <el-divider direction="vertical" />
      <span>内容二</span>
      <el-divider direction="vertical" border-style="dotted" />
      <span>内容三</span>
    </div>
  </div>
</template>
