<template>
  <div class="demo-section">
    <h3>类型 type</h3>
    <div class="demo-row">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </div>
  </div>
  <div class="demo-section">
    <h3>朴素 plain / 圆角 round / 圆形 circle</h3>
    <div class="demo-row">
      <el-button plain>Plain</el-button>
      <el-button type="primary" plain>Plain</el-button>
      <el-button type="success" plain>Plain</el-button>
      <el-button type="info" plain>Plain</el-button>
      <el-button type="warning" plain>Plain</el-button>
      <el-button type="danger" plain>Plain</el-button>
    </div>
    <div class="demo-row">
      <el-button round>Round</el-button>
      <el-button type="primary" round>Round</el-button>
      <el-button type="primary" :icon="Search" circle />
      <el-button type="success" :icon="Check" circle />
      <el-button type="info" :icon="Message" circle />
      <el-button type="warning" :icon="Star" circle />
      <el-button type="danger" :icon="Delete" circle />
    </div>
  </div>
  <div class="demo-section">
    <h3>尺寸 size</h3>
    <div class="demo-row">
      <el-button>Default</el-button>
      <el-button size="small">Small</el-button>
    </div>
  </div>
  <div class="demo-section">
    <h3>禁用 / 加载中</h3>
    <div class="demo-row">
      <el-button disabled>Default</el-button>
      <el-button type="primary" disabled>Primary</el-button>
      <el-button type="primary" loading>Loading</el-button>
      <el-button type="primary" :loading-icon="Eleme" loading>Loading</el-button>
    </div>
  </div>
  <div class="demo-section">
    <h3>文字 button / 图标按钮</h3>
    <div class="demo-row">
      <el-button type="primary" icon="Edit" />
      <el-button type="primary" icon="Share" />
      <el-button type="primary" icon="Delete" />
      <el-button type="primary" icon="Search">Search</el-button>
      <el-button type="primary">
        Upload<el-icon class="el-icon--right"><Upload /></el-icon>
      </el-button>
    </div>
  </div>
  <div class="demo-section">
    <h3>自定义标签(a 链接)与颜色</h3>
    <div class="demo-row">
      <el-button link>链接按钮</el-button>
      <el-button style="
        --el-button-bg-color: rgb(239, 240, 253);
        --el-button-text-color: #626aef;
        --el-button-border-color: rgb(177, 181, 247);
        --el-button-hover-bg-color: #626aef;
        --el-button-hover-text-color: var(--el-color-white);
        --el-button-hover-border-color: #626aef;
        --el-button-active-bg-color: rgb(82, 89, 195);
        --el-button-active-border-color: rgb(82, 89, 195);
        --el-button-active-text-color: var(--el-color-white);
      " plain>自定义紫</el-button>
      <el-button style="
        --el-button-bg-color: #fb7299;
        --el-button-text-color: var(--el-color-white);
        --el-button-border-color: #fb7299;
        --el-button-hover-bg-color: rgb(252, 156, 184);
        --el-button-hover-text-color: var(--el-color-white);
        --el-button-hover-border-color: rgb(252, 156, 184);
        --el-button-active-bg-color: rgb(205, 95, 126);
        --el-button-active-border-color: rgb(205, 95, 126);
        --el-button-active-text-color: var(--el-color-white);
     ">B 站粉</el-button>
    </div>
  </div>
</template>

<script setup>
import { Search, Check, Message, Star, Delete, Upload, Eleme } from '@element-plus/icons-vue'
</script>
