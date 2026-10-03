<template>
  <div class="demo-section">
    <el-button type="primary" @click="open = true">打开视频详情抽屉</el-button>
    <el-drawer v-model="open" size="460px" :close-on-click-modal="false">
      <template #header>
        <div style="display: flex; align-items: center; gap: 10px">
          <el-avatar :size="36" style="background: var(--el-color-primary)">M</el-avatar>
          <div>
            <div style="font-weight: 600">两小时播客: Muse 爆火的原因</div>
            <el-text size="small" type="info">BV1mwaP6gE3y · 2 时 5 分</el-text>
          </div>
        </div>
      </template>
      <el-descriptions :column="1" border size="small">
        <el-descriptions-item label="转写状态">
          <el-tag size="small" type="success">已完成</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="分段数">1057</el-descriptions-item>
        <el-descriptions-item label="截断开头">9 秒</el-descriptions-item>
        <el-descriptions-item label="导出">
          <el-space :size="6">
            <el-button size="small" tag="a">txt</el-button>
            <el-button size="small" tag="a">srt</el-button>
            <el-button size="small" tag="a">洗稿</el-button>
          </el-space>
        </el-descriptions-item>
      </el-descriptions>
      <el-divider content-position="left">校准记录</el-divider>
      <el-timeline>
        <el-timeline-item timestamp="09:00" type="primary">下载完成</el-timeline-item>
        <el-timeline-item timestamp="09:01">声纹采样完成(4 段)</el-timeline-item>
        <el-timeline-item timestamp="13:54" type="success">讲述人确认:杜雨 / Davin</el-timeline-item>
      </el-timeline>
      <el-alert type="info" :closable="false" title="提示" description="重新校准讲述人后需要重新转写才能生效。" />
    </el-drawer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const open = ref(true)
</script>
