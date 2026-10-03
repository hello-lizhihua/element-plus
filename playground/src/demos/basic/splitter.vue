<template>
  <div class="demo-section">
    <h3>横向分割面板（拖动分界线）</h3>
    <el-splitter style="height: 220px">
      <el-splitter-panel :size="30">
        <div class="panel">左面板 30%</div>
      </el-splitter-panel>
      <el-splitter-panel :size="70">
        <div class="panel">右面板 70%（拖动分界线可调整）</div>
      </el-splitter-panel>
    </el-splitter>
  </div>
  <div class="demo-section">
    <h3>纵向分割 + 嵌套 + 最小尺寸限制</h3>
    <el-splitter style="height: 260px">
      <el-splitter-panel :size="40" :min="20">
        <div class="panel">上(最小 20%)</div>
      </el-splitter-panel>
      <el-splitter-panel :size="60">
        <el-splitter style="height: 100%" direction="horizontal">
          <el-splitter-panel :size="50">
            <div class="panel">右上面板</div>
          </el-splitter-panel>
          <el-splitter-panel :size="50">
            <div class="panel">右下面板</div>
          </el-splitter-panel>
        </el-splitter>
      </el-splitter-panel>
    </el-splitter>
  </div>
</template>

<script setup>
</script>

<style scoped>
.panel {
  height: 100%;
  display: grid;
  place-items: center;
  background: var(--el-fill-color-light);
  font-size: 13px;
  color: var(--el-text-color-regular);
}
</style>
