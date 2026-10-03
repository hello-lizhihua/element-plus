<template>
  <div class="demo-section">
    <h3>基础骨架（头像 + 单行 + 段落）</h3>
    <el-skeleton>
      <template #template>
        <div style="display: flex; gap: 12px; align-items: flex-start">
          <el-skeleton-item variant="image" style="width: 72px; height: 72px" />
          <div style="flex: 1">
            <el-skeleton-item variant="text" style="width: 40%" />
            <div style="display: flex; align-items: center; margin-top: 12px">
              <el-skeleton-item variant="circle" style="width: 20px; height: 20px; margin-right: 8px" />
              <el-skeleton-item variant="text" style="width: 30%" />
            </div>
          </div>
        </div>
      </template>
    </el-skeleton>
  </div>
  <div class="demo-section">
    <h3>加载完成切换（loading 控制）</h3>
    <el-switch v-model="loading" style="margin-bottom: 12px" active-text="加载中" />
    <el-skeleton style="width: 320px" :loading="loading" animated :rows="3">
      <div>真实内容：加载完成后骨架屏被替换。真实内容：加载完成后骨架屏被替换。</div>
    </el-skeleton>
  </div>
  <div class="demo-section">
    <h3>防抖抖动（thr 也称 wave）动画样式</h3>
    <el-skeleton style="width: 320px" animated :rows="2" :throttle="500" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const loading = ref(true)
</script>
