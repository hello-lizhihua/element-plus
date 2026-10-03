<template>
  <div class="demo-section">
    <h3>基础与尺寸</h3>
    <div class="demo-row">
      <el-space>间距1</el-space>
      <el-space :size="8">间距8</el-space>
      <el-space :size="20">间距20</el-space>
      <el-space :size="32">间距32</el-space>
    </div>
  </div>
  <div class="demo-section">
    <h3>垂直方向 + 对齐 + 自动换行</h3>
    <div class="demo-block-bg" style="width: 360px">
      <el-space direction="vertical" alignment="start" wrap>
        <el-button>垂直子项一</el-button>
        <el-button>垂直子项二</el-button>
        <el-button>垂直子项三</el-button>
      </el-space>
    </div>
    <div class="demo-row" style="margin-top: 12px">
      <el-space wrap :size="10">
        <el-tag v-for="i in 14" :key="i">标签 {{ i }}</el-tag>
      </el-space>
    </div>
  </div>
  <div class="demo-section">
    <h3>分隔符（spacer）</h3>
    <el-space :size="10" spacer="|">
      <el-text>首页</el-text>
      <el-text>列表</el-text>
      <el-text>详情</el-text>
    </el-space>
  </div>
</template>
