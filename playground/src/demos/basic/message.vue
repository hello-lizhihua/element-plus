<template>
  <div class="demo-section">
    <h3>四种类型（message 触发）</h3>
    <div class="demo-row">
      <el-button @click="show('success')">成功</el-button>
      <el-button @click="show('warning')">警告</el-button>
      <el-button @click="show('info')">消息</el-button>
      <el-button @click="show('error')">错误</el-button>
    </div>
  </div>
  <div class="demo-section">
    <h3>可关闭 / 居中 / 分组消息合并</h3>
    <div class="demo-row">
      <el-button @click="closable">可关闭</el-button>
      <el-button @click="centered">文字居中</el-button>
      <el-button @click="grouped">分组合并(连点)</el-button>
      <el-button @click="rawVNode">VNode 消息</el-button>
    </div>
  </div>
</template>

<script setup>
import { h } from 'vue'
import { ElMessage } from 'element-plus'

const show = (type) => ElMessage({ type, message: `${type} 类型的消息提示`, duration: 2000 })
const closable = () => ElMessage({ message: '点右侧关闭按钮', showClose: true })
const centered = () => ElMessage({ message: '居中的消息', center: true })
const grouped = () => ElMessage({ message: '重复消息会合并', grouping: true })
const rawVNode = () => ElMessage({ message: h('span', null, [h('b', null, '加粗'), ' 的 VNode 消息']) })
</script>
