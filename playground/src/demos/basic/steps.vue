<template>
  <div class="demo-section">
    <h3>基础步骤条（simple / 普通）</h3>
    <el-steps :active="active" align-center>
      <el-step title="下载" description="拉取音频" />
      <el-step title="采样" description="提取声纹样本" />
      <el-step title="转写" description="并行识别" />
      <el-step title="完成" description="产出文本" />
    </el-steps>
    <div class="demo-row" style="justify-content: center; margin-top: 14px">
      <el-button @click="active = Math.max(0, active - 1)">上一步</el-button>
      <el-button type="primary" @click="active = Math.min(4, active + 1)">下一步</el-button>
    </div>
  </div>
  <div class="demo-section">
    <h3>状态（process/finish/wait/error）与简洁模式</h3>
    <div class="demo-col">
      <el-steps :active="2">
        <el-step title="已完成" />
        <el-step title="进行中" />
        <el-step title="出错" description="音频不存在" />
      </el-steps>
      <el-steps simple :active="1">
        <el-step title="下载" :icon="Download" />
        <el-step title="校准" :icon="Microphone" />
        <el-step title="导出" :icon="Share" />
      </el-steps>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Download, Microphone, Share } from '@element-plus/icons-vue'

const active = ref(1)
</script>
