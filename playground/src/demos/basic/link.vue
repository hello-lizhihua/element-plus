<template>
  <div class="demo-section">
    <h3>基础 / 禁用 / 无下划线 / 图标</h3>
    <div class="demo-row">
      <el-link>默认链接</el-link>
      <el-link type="primary">主要链接</el-link>
      <el-link type="success">成功链接</el-link>
      <el-link type="warning">警告链接</el-link>
      <el-link type="danger">危险链接</el-link>
      <el-link type="info">信息链接</el-link>
    </div>
    <div class="demo-row">
      <el-link disabled>禁用链接</el-link>
      <el-link :underline="false">无下划线</el-link>
      <el-link icon="Edit">带图标</el-link>
    </div>
  </div>
</template>
