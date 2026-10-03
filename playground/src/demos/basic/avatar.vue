<template>
  <div class="demo-section">
    <h3>形状（圆 / 方）与尺寸</h3>
    <div class="demo-row">
      <el-avatar :size="48" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" />
      <el-avatar :size="48" shape="square" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" />
      <el-avatar :size="56">大</el-avatar>
      <el-avatar :size="44">中</el-avatar>
      <el-avatar :size="36">小</el-avatar>
    </div>
  </div>
  <div class="demo-section">
    <h3>图标头像 / 文字 / 加载失败回退</h3>
    <div class="demo-row">
      <el-avatar :icon="UserFilled" />
      <el-avatar style="background: var(--el-color-success)">字</el-avatar>
      <el-avatar src="https://broken.example.com/x.png" @error="onError">回退</el-avatar>
    </div>
  </div>
  <div class="demo-section">
    <h3>头像组（叠加）</h3>
    <el-avatar-group>
      <el-avatar v-for="i in 4" :key="i" :size="40" :style="{ background: ['#fb7299', '#5e6d82', '#67c23a', '#e6a23c'][i - 1] }">
        {{ i }}
      </el-avatar>
      <el-avatar :size="40">+8</el-avatar>
    </el-avatar-group>
  </div>
</template>

<script setup>
import { UserFilled } from '@element-plus/icons-vue'
const onError = () => true
</script>
