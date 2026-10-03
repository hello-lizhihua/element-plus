<template>
  <div class="demo-section">
    <h3>水平菜单（选中高亮 / 禁用 / 子菜单）</h3>
    <el-menu :default-active="horizontal" mode="horizontal" @select="(k) => (horizontal = k)">
      <el-menu-item index="home">首页</el-menu-item>
      <el-sub-menu index="library">
        <template #title>视频文本中心</template>
        <el-menu-item index="library-list">视频文本</el-menu-item>
        <el-menu-item index="library-cases">测试用例</el-menu-item>
        <el-menu-item index="library-glossary">词汇表</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="settings" disabled>设置(禁用)</el-menu-item>
      <el-menu-item index="about">关于</el-menu-item>
    </el-menu>
  </div>
  <div class="demo-section">
    <h3>垂直菜单（深色模式样式 + 分组）</h3>
    <el-menu :default-active="vertical" class="vertical-menu" @select="(k) => (vertical = k)">
      <el-menu-item index="overview">
        <el-icon><DataBoard /></el-icon> 总览
      </el-menu-item>
      <el-menu-item index="videos">
        <el-icon><VideoPlay /></el-icon> 视频
      </el-menu-item>
      <el-menu-item-group title="设置组">
        <el-menu-item index="voice">
          <el-icon><Microphone /></el-icon> 声纹
        </el-menu-item>
        <el-menu-item index="glossary">
          <el-icon><Collection /></el-icon> 词汇表
        </el-menu-item>
      </el-menu-item-group>
    </el-menu>
  </div>
  <div class="demo-section">
    <h3>折叠模式（collapse 收窄为图标）</h3>
    <el-switch v-model="collapsed" style="margin-bottom: 10px" active-text="折叠" />
    <el-menu :collapse="collapsed" :default-active="vertical" class="vertical-menu">
      <el-menu-item index="overview"><el-icon><DataBoard /></el-icon><span>总览</span></el-menu-item>
      <el-menu-item index="videos"><el-icon><VideoPlay /></el-icon><span>视频</span></el-menu-item>
      <el-sub-menu index="settings-sub">
        <template #title><el-icon><Setting /></el-icon><span>设置</span></template>
        <el-menu-item index="voice"><span>声纹</span></el-menu-item>
        <el-menu-item index="glossary"><span>词汇表</span></el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { DataBoard, VideoPlay, Microphone, Collection, Setting } from '@element-plus/icons-vue'

const horizontal = ref('home')
const vertical = ref('videos')
const collapsed = ref(false)
</script>

<style scoped>
.vertical-menu {
  width: 216px;
}
</style>
