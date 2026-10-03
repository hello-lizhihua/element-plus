<template>
  <div class="demo-section">
    <h3>主题（dark / light）与位置</h3>
    <div class="demo-row">
      <el-tooltip content="上方提示" placement="top">
        <el-button>上</el-button>
      </el-tooltip>
      <el-tooltip content="下方提示" placement="bottom">
        <el-button>下</el-button>
      </el-tooltip>
      <el-tooltip content="左侧提示" placement="left">
        <el-button>左</el-button>
      </el-tooltip>
      <el-tooltip content="右侧提示" placement="right" effect="light">
        <el-button>右(light 主题)</el-button>
      </el-tooltip>
    </div>
  </div>
  <div class="demo-section">
    <h3>多行内容 / 禁用 / 手动</h3>
    <div class="demo-row">
      <el-tooltip placement="top">
        <template #content>
          多行内容<br />第二行也支持
        </template>
        <el-button>多行</el-button>
      </el-tooltip>
      <el-tooltip content="被禁用的提示" disabled>
        <el-button disabled>禁用</el-button>
      </el-tooltip>
      <el-tooltip v-model:visible="visible" content="手动控制的提示" placement="top">
        <el-button @click="visible = !visible">手动切换</el-button>
      </el-tooltip>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const visible = ref(false)
</script>
