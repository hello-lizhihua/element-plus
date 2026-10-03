<template>
  <div class="demo-section">
    <h3>四种类型 + 可关闭</h3>
    <div class="demo-col">
      <el-alert title="成功提示:转写任务已完成" type="success" show-icon closable />
      <el-alert title="消息提示:正在并行转写 4 个分块" type="info" show-icon />
      <el-alert title="警告提示:音频时长超过 4 小时" type="warning" show-icon />
      <el-alert title="错误提示:语音模型未就绪" type="error" show-icon />
    </div>
  </div>
  <div class="demo-section">
    <h3>辅助描述 / 居中 / 关闭事件</h3>
    <div class="demo-col">
      <el-alert type="success" show-icon center title="居中显示的提示">
        <template #default>
          <p style="margin: 0; font-size: 13px">带辅助描述的正文内容。</p>
        </template>
      </el-alert>
      <el-alert title="不可关闭的提示" :closable="false" />
      <el-alert type="warning" title="slot 图标" show-icon>
        <template #icon>
          <el-icon><WarningFilled /></el-icon>
        </template>
      </el-alert>
    </div>
  </div>
</template>

<script setup>
import { WarningFilled } from '@element-plus/icons-vue'
</script>
