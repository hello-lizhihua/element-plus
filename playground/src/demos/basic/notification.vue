<template>
  <div class="demo-section">
    <h3>四种类型 + 关闭按钮</h3>
    <div class="demo-row">
      <el-button plain @click="open1">success</el-button>
      <el-button plain @click="open2">warning</el-button>
      <el-button plain @click="open3">info</el-button>
      <el-button plain @click="open4">error</el-button>
    </div>
  </div>
  <div class="demo-section">
    <h3>不带图标 / 隐藏关闭 / 位置(右下) / VNode</h3>
    <div class="demo-row">
      <el-button plain @click="plain">纯文本</el-button>
      <el-button plain @click="position">右下角</el-button>
      <el-button plain @click="vnode">VNode 内容</el-button>
    </div>
  </div>
</template>

<script setup>
import { h } from 'vue'
import { ElNotification } from 'element-plus'

const open1 = () => ElNotification({ title: '成功', message: '转写任务已完成', type: 'success', duration: 2500 })
const open2 = () => ElNotification({ title: '警告', message: '音频时长超过限制', type: 'warning', duration: 2500 })
const open3 = () => ElNotification({ title: '信息', message: '有一条新回复', type: 'info', duration: 2500 })
const open4 = () => ElNotification({ title: '错误', message: '模型加载失败', type: 'error', duration: 2500 })
const plain = () => ElNotification({ title: '纯文本', message: '不带类型图标的 Notification' })
const position = () => ElNotification({ title: '右下角', message: 'position 为 bottom-right', position: 'bottom-right' })
const vnode = () => ElNotification({ message: h('b', { style: 'color: var(--el-color-primary)' }, 'VNode 通知内容') })
</script>
