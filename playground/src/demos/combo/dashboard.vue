<template>
  <div class="demo-section">
    <div class="demo-row">
      <el-card v-for="card in cards" :key="card.title" style="width: 220px" :body-style="{ padding: '16px' }">
        <el-statistic :title="card.title" :value="card.value" :precision="card.precision ?? 0">
          <template #suffix>
            <span :style="{ color: card.color || 'inherit', fontSize: '14px' }">{{ card.suffix }}</span>
          </template>
        </el-statistic>
        <el-progress :percentage="card.percent" :status="card.status" :show-text="false" style="margin-top: 10px" />
      </el-card>
      <el-card style="width: 220px" :body-style="{ padding: '16px' }">
        <el-countdown title="下轮转写倒计时" :duration="1000 * 60 * 12" format="HH:mm:ss" />
      </el-card>
    </div>
  </div>
  <div class="demo-section">
    <h3>加载骨架 → 数据卡片</h3>
    <el-switch v-model="loading" active-text="加载中" style="margin-bottom: 14px" />
    <el-skeleton :loading="loading" animated style="max-width: 560px">
      <template #template>
        <div class="demo-row">
          <el-skeleton-item variant="rect" style="width: 220px; height: 96px; border-radius: 10px" />
          <el-skeleton-item variant="rect" style="width: 220px; height: 96px; border-radius: 10px" />
        </div>
      </template>
      <div class="demo-row">
        <el-alert type="success" :closable="false" title="数据已加载" description="骨架屏切换为真实内容。" style="max-width: 460px" />
      </div>
    </el-skeleton>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const loading = ref(false)
const cards = [
  { title: '视频总数', value: 42, suffix: '个', percent: 84 },
  { title: '转写字符', value: 120930, suffix: '字', percent: 62 },
  { title: '失败任务', value: 2, suffix: '条', percent: 8, status: 'exception', color: 'var(--el-color-danger)' },
  { title: '平均耗时', value: 12.5, precision: 1, suffix: '分', percent: 50 },
]
</script>
