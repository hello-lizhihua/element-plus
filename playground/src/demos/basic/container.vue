<template>
  <div class="demo-section">
    <h3>常见布局（el-container 系列）</h3>
    <el-container class="layout-demo">
      <el-header class="lp lp-header">Header</el-header>
      <el-container>
        <el-aside width="140px" class="lp lp-aside">Aside</el-aside>
        <el-main class="lp lp-main">Main</el-main>
      </el-container>
      <el-footer class="lp lp-header">Footer</el-footer>
    </el-container>
  </div>
  <div class="demo-section">
    <h3>上左右 / 左上下的混合布局</h3>
    <el-container class="layout-demo">
      <el-aside width="120px" class="lp lp-aside">Aside</el-aside>
      <el-container>
        <el-header class="lp lp-header">Header</el-header>
        <el-main class="lp lp-main">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.layout-demo {
  height: 220px;
  border: 1px solid var(--el-border-color-light);
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 14px;
}
.lp {
  display: grid;
  place-items: center;
  font-size: 13px;
}
.lp-header {
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}
.lp-aside {
  background: var(--el-fill-color-light);
}
.lp-main {
  background: var(--el-bg-color);
}
</style>
