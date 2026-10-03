<template>
  <div class="demo-section">
    <h3>基础（标题 + 返回 + 额外内容）</h3>
    <el-page-header @back="onBack">
      <template #content>
        <span style="font-size: 14px"> 转写设置 / 视频七 </span>
      </template>
      <template #extra>
        <el-button>取消</el-button>
        <el-button type="primary">保存</el-button>
      </template>
    </el-page-header>
  </div>
  <div class="demo-section">
    <h3>带面包屑的页头 + 内容区</h3>
    <el-page-header @back="onBack">
      <template #breadcrumb>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>设置</el-breadcrumb-item>
        </el-breadcrumb>
      </template>
      <template #header>
        <span>词汇表管理</span>
      </template>
      <template #default>
        <p style="margin: 12px 0 0; font-size: 13px; color: var(--el-text-color-regular)">
          页头的默认插槽是内容区,可放任意说明或表单。
        </p>
      </template>
    </el-page-header>
  </div>
</template>

<script setup>
import { ElMessage } from 'element-plus'

const onBack = () => ElMessage.info('返回上一页')
</script>
