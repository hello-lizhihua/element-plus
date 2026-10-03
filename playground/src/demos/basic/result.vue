<template>
  <div class="demo-section">
    <h3>内置插图（success / warning / error / info）</h3>
    <div class="demo-row" style="align-items: flex-start">
      <el-result icon="success" title="提交成功" sub-title="内容已保存并发布">
        <template #extra>
          <el-button type="primary">返回首页</el-button>
          <el-button>继续编辑</el-button>
        </template>
      </el-result>
      <el-result icon="warning" title="警告" sub-title="有 2 项配置未完成" />
      <el-result icon="error" title="提交失败" sub-title="请检查网络后重试" />
      <el-result icon="info" title="信息" sub-title="当前为预览模式" />
    </div>
  </div>
  <div class="demo-section">
    <h3>自定义插图</h3>
    <el-result title="自定义">
      <template #icon>
        <el-icon :size="56" color="var(--el-color-primary)"><Star /></el-icon>
      </template>
      <template #sub-title>
        <p>插槽完全自定义内容区域。</p>
      </template>
    </el-result>
  </div>
</template>

<script setup>
import { Star } from '@element-plus/icons-vue'
</script>
