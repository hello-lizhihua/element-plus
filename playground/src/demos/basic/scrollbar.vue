<template>
  <div class="demo-section">
    <h3>纵向长内容滚动（height 固定）</h3>
    <el-scrollbar height="160px">
      <p v-for="i in 20" :key="i" class="scroll-item">第 {{ i }} 行内容，滚动条出现在右侧。</p>
    </el-scrollbar>
  </div>
  <div class="demo-section">
    <h3>横向滚动（max-height + wrap-style）</h3>
    <el-scrollbar>
      <div class="scroll-wide">
        <div v-for="i in 12" :key="i" class="scroll-cell">{{ i }}</div>
      </div>
    </el-scrollbar>
  </div>
  <div class="demo-section">
    <h3>最大高度（内容不溢出则不出现滚动条）</h3>
    <el-scrollbar max-height="120px">
      <p v-for="i in 6" :key="i" class="scroll-item">自适应内容 {{ i }}</p>
    </el-scrollbar>
  </div>
</template>

<style scoped>
.scroll-item {
  margin: 0 0 8px;
  font-size: 13px;
  color: var(--el-text-color-regular);
}
.scroll-wide {
  display: flex;
  gap: 10px;
  width: 900px;
}
.scroll-cell {
  flex: 1;
  height: 64px;
  display: grid;
  place-items: center;
  background: var(--el-fill-color-light);
  border-radius: 6px;
}
</style>
