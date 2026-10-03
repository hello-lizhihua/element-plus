<template>
  <div class="demo-section">
    <h3>固钉在容器顶部（容器内滚动 120px 触发吸附）</h3>
    <div class="affix-container">
      <el-affix target=".affix-container" :offset="0">
        <el-tag type="primary">固钉:滚动容器后吸附在容器顶部</el-tag>
      </el-affix>
      <p v-for="i in 24" :key="i" class="fill-line">滚动内容 {{ i }}</p>
    </div>
  </div>
  <div class="demo-section">
    <h3>页面级固钉（固定偏移 80px,滚动页面可见）</h3>
    <el-affix :offset="80">
      <el-button type="warning">页面级固钉按钮</el-button>
    </el-affix>
  </div>
</template>

<style scoped>
.affix-container {
  height: 220px;
  overflow: auto;
  border: 1px solid var(--el-border-color-lighter);
  border-radius: 8px;
  padding: 0 12px;
}
.fill-line {
  font-size: 13px;
  color: var(--el-text-color-regular);
}
</style>
