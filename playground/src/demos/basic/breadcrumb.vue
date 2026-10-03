<template>
  <div class="demo-section">
    <h3>图标分隔 / 分隔符 / 状态页面包屑</h3>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="javascript:;">项目管理</a></el-breadcrumb-item>
      <el-breadcrumb-item>项目详情</el-breadcrumb-item>
      <el-breadcrumb-item>转写设置</el-breadcrumb-item>
    </el-breadcrumb>
    <el-breadcrumb separator="=>" style="margin-top: 14px">
      <el-breadcrumb-item>视频文本中心</el-breadcrumb-item>
      <el-breadcrumb-item>测试用例</el-breadcrumb-item>
      <el-breadcrumb-item>编辑器识别</el-breadcrumb-item>
    </el-breadcrumb>
    <el-breadcrumb :separator-icon="ArrowRight" style="margin-top: 14px">
      <el-breadcrumb-item>设置</el-breadcrumb-item>
      <el-breadcrumb-item>词汇表</el-breadcrumb-item>
      <el-breadcrumb-item>分类管理</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup>
import { ArrowRight } from '@element-plus/icons-vue'
</script>
