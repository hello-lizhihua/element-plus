<template>
  <div class="demo-section">
    <h3>手风琴模式 accordion</h3>
    <el-collapse v-model="accordion" accordion>
      <el-collapse-item title="一致性 Consistency" name="1">
        <p>与现实生活一致：与真实流程保持一致，遵循用户语言与习惯。</p>
      </el-collapse-item>
      <el-collapse-item title="反馈 Feedback" name="2">
        <p>通过界面样式与交互效果让用户清晰感知操作结果。</p>
      </el-collapse-item>
      <el-collapse-item title="效率 Efficiency" name="3">
        <p>简化操作流程，界面语言清晰明确。</p>
      </el-collapse-item>
    </el-collapse>
  </div>
  <div class="demo-section">
    <h3>自定义标题 / 图标 / 禁用项 / 右侧额外内容</h3>
    <el-collapse v-model="custom">
      <el-collapse-item name="a">
        <template #title>
          自定义标题 <el-tag size="small" style="margin-left: 8px">推荐</el-tag>
        </template>
        <p>标题可以是任意内容。</p>
      </el-collapse-item>
      <el-collapse-item title="禁用项" name="b" disabled>
        <p>被禁用的面板无法展开。</p>
      </el-collapse-item>
      <el-collapse-item name="c">
        <template #title>
          右侧图标自定义
          <el-icon style="margin-left: auto"><MoreFilled /></el-icon>
        </template>
        <p>icon-position 可调整展开箭头位置。</p>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { MoreFilled } from '@element-plus/icons-vue'

const accordion = ref('1')
const custom = ref(['a'])
</script>
