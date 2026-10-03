<template>
  <div class="demo-section">
    <h3>与文字组合（use: el-icon 包裹）</h3>
    <div class="demo-row">
      <span class="demo-inline">
        <el-icon :size="16"><Edit /></el-icon> 编辑
      </span>
      <span class="demo-inline">
        <el-icon :size="16" color="var(--el-color-success)"><Check /></el-icon> 完成
      </span>
      <span class="demo-inline">
        <el-icon :size="16" color="var(--el-color-danger)"><Delete /></el-icon> 删除
      </span>
    </div>
  </div>
  <div class="demo-section">
    <h3>尺寸 12 / 16 / 20 / 28</h3>
    <div class="demo-row demo-align">
      <el-icon :size="12"><Star /></el-icon>
      <el-icon :size="16"><Star /></el-icon>
      <el-icon :size="20"><Star /></el-icon>
      <el-icon :size="28"><Star /></el-icon>
    </div>
  </div>
  <div class="demo-section">
    <h3>图标集抽检（图标即字体,随皮肤色变化）</h3>
    <div class="icon-grid">
      <div v-for="icon in icons" :key="icon" class="icon-cell">
        <el-icon :size="20"><component :is="icon" /></el-icon>
        <span>{{ icon }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Edit, Check, Delete, Star, Search, Share, Upload, Download, Setting, User, Bell,
  Calendar, Clock, Picture, Folder, ChatDotRound, Plus, Close, ArrowRight, Refresh } from '@element-plus/icons-vue'

const icons = ['Edit', 'Check', 'Delete', 'Search', 'Share', 'Upload', 'Download', 'Setting',
  'User', 'Bell', 'Calendar', 'Clock', 'Picture', 'Folder', 'ChatDotRound', 'Plus', 'Close',
  'ArrowRight', 'Refresh'].map((name) => ({ Edit, Check, Delete, Star, Search, Share, Upload,
  Download, Setting, User, Bell, Calendar, Clock, Picture, Folder, ChatDotRound, Plus, Close,
  ArrowRight, Refresh })[name])
</script>

<style scoped>
.demo-inline {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-right: 16px;
}
.demo-align {
  align-items: center;
  color: var(--el-color-primary);
}
.icon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(96px, 1fr));
  gap: 8px;
}
.icon-cell {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 12px 4px;
  border-radius: 8px;
  background: var(--el-fill-color-light);
  font-size: 11px;
  color: var(--el-text-color-secondary);
}
</style>
