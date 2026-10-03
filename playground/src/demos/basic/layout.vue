<template>
  <div class="demo-section">
    <h3>24 栅格（el-row / el-col，gutter 20）</h3>
    <el-row :gutter="8">
      <el-col v-for="i in 4" :key="i" :span="6">
        <div class="grid-cell">span 6</div>
      </el-col>
    </el-row>
    <el-row :gutter="8" class="row-gap">
      <el-col :span="8"><div class="grid-cell">span 8</div></el-col>
      <el-col :span="8"><div class="grid-cell">span 8</div></el-col>
      <el-col :span="8"><div class="grid-cell">span 8</div></el-col>
    </el-row>
  </div>
  <div class="demo-section">
    <h3>响应式与偏移</h3>
    <el-row :gutter="8">
      <el-col :xs="24" :sm="12" :md="8"><div class="grid-cell">xs24 sm12 md8</div></el-col>
      <el-col :xs="24" :sm="12" :md="8" :offset="8"><div class="grid-cell">offset 8</div></el-col>
    </el-row>
  </div>
  <div class="demo-section">
    <h3>对齐（justify / align）</h3>
    <el-row justify="center" class="row-gap">
      <el-col :span="6"><div class="grid-cell">center</div></el-col>
      <el-col :span="6"><div class="grid-cell">center</div></el-col>
    </el-row>
    <el-row justify="end" class="row-gap">
      <el-col :span="6"><div class="grid-cell">end</div></el-col>
    </el-row>
  </div>
</template>

<style scoped>
.grid-cell {
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
  border-radius: 6px;
  height: 44px;
  display: grid;
  place-items: center;
  font-size: 13px;
  margin-bottom: 4px;
}
.row-gap {
  margin-top: 8px;
}
</style>
