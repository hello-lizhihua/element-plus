<template>
  <div class="demo-section">
    <h3>基础时间线（时间戳 + 内容）</h3>
    <el-timeline>
      <el-timeline-item v-for="item in items" :key="item.time" :timestamp="item.time" :type="item.type">
        {{ item.text }}
      </el-timeline-item>
    </el-timeline>
  </div>
  <div class="demo-section">
    <h3>自定义节点（图标 / 颜色 / 尺寸 / 居中）</h3>
    <el-timeline>
      <el-timeline-item timestamp="09:00" color="#fb7299" :hollow="true">空心节点</el-timeline-item>
      <el-timeline-item timestamp="10:00" :icon="Star" type="primary">图标节点</el-timeline-item>
      <el-timeline-item timestamp="12:00" placement="top">时间戳在上</el-timeline-item>
    </el-timeline>
  </div>
</template>

<script setup>
import { Star } from '@element-plus/icons-vue'

const items = [
  { time: '2026-10-03 09:00', text: '下载音频完成', type: 'primary' },
  { time: '2026-10-03 09:12', text: '开始转写（并行 4 块）', type: '' },
  { time: '2026-10-03 09:26', text: '转写完成,产出 1057 段', type: 'success' },
]
</script>
