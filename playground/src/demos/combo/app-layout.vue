<template>
  <div class="demo-section">
    <el-container class="app-frame">
      <el-aside width="200px" class="frame-aside">
        <div class="frame-brand">open-video</div>
        <el-menu default-active="transcribe" style="border-right: none">
          <el-menu-item index="projects"><el-icon><VideoPlay /></el-icon>视频文本</el-menu-item>
          <el-menu-item index="cases"><el-icon><List /></el-icon>测试用例</el-menu-item>
          <el-menu-item index="glossary"><el-icon><Collection /></el-icon>词汇表</el-menu-item>
          <el-sub-menu index="settings">
            <template #title><el-icon><Setting /></el-icon>设置</template>
            <el-menu-item index="voice">声纹</el-menu-item>
            <el-menu-item index="cookie">凭证</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header class="frame-header" height="48px">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item>视频文本中心</el-breadcrumb-item>
            <el-breadcrumb-item>项目二</el-breadcrumb-item>
          </el-breadcrumb>
          <el-space :size="14">
            <el-badge :value="3"><el-icon :size="16"><Bell /></el-icon></el-badge>
            <el-avatar :size="28" style="background: var(--el-color-primary)">杜</el-avatar>
          </el-space>
        </el-header>
        <el-main class="frame-main">
          <el-tabs type="border-card">
            <el-tab-pane label="任务队列">
              <div class="frame-tip">主布局:侧栏菜单 + 面包屑头 + 标签页内容 + 滚动回到顶部。</div>
              <el-table :data="jobs" size="small" border>
                <el-table-column prop="video" label="视频" min-width="200" />
                <el-table-column prop="kind" label="类型" width="100" />
                <el-table-column prop="status" label="状态" width="110">
                  <template #default="{ row }">
                    <el-tag size="small" :type="row.status === 'done' ? 'success' : 'warning'">{{ row.status }}</el-tag>
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="日志">
              <p style="font-size: 13px; color: var(--el-text-color-regular)">系统日志输出区域。</p>
            </el-tab-pane>
          </el-tabs>
        </el-main>
        <el-footer class="frame-footer" height="36px">v0.1.0 · 本地运行</el-footer>
      </el-container>
      <el-backtop target=".app-frame :deep(.el-main)" :visibility-height="10" :right="20" :bottom="48" />
    </el-container>
  </div>
</template>

<script setup>
import { VideoPlay, List, Collection, Setting, Bell } from '@element-plus/icons-vue'

const jobs = [
  { video: 'BV1mwaP6gE3y 两小时播客', kind: 'transcribe', status: 'done' },
  { video: 'BV1Jgaa6BECD 连麦合集', kind: 'download', status: 'running' },
]
</script>

<style scoped>
.app-frame {
  height: 460px;
  border: 1px solid var(--el-border-color-lighter);
  border-radius: 10px;
  overflow: hidden;
}
.frame-aside {
  border-right: 1px solid var(--el-border-color-lighter);
  background: var(--el-bg-color);
}
.frame-brand {
  height: 48px;
  display: grid;
  place-items: center;
  font-weight: 700;
  border-bottom: 1px solid var(--el-border-color-lighter);
}
.frame-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--el-border-color-lighter);
  background: var(--el-bg-color);
}
.frame-main {
  background: var(--el-bg-color-page);
}
.frame-footer {
  display: grid;
  place-items: center;
  font-size: 12px;
  color: var(--el-text-color-secondary);
  border-top: 1px solid var(--el-border-color-lighter);
}
.frame-tip {
  font-size: 13px;
  color: var(--el-text-color-secondary);
  margin-bottom: 10px;
}
</style>
