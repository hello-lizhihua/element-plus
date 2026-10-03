<template>
  <div class="demo-section">
    <h3>即时补全 + 自定义模板</h3>
    <el-autocomplete
      v-model="state"
      :fetch-suggestions="querySearch"
      placeholder="输入 open / element / video 试试"
      clearable
      style="width: 320px"
      @select="onSelect"
    />
  </div>
  <div class="demo-section">
    <h3>尺寸与状态</h3>
    <div class="demo-col">
      <el-autocomplete placeholder="default" :fetch-suggestions="empty" style="width: 320px" />
      <el-autocomplete size="small" placeholder="small" :fetch-suggestions="empty" style="width: 320px" />
      <el-autocomplete disabled placeholder="disabled" :fetch-suggestions="empty" style="width: 320px" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const state = ref('')
const pool = ['open-video 视频转文本', 'element-plus 组件库', 'vite 构建工具', 'vue 渐进式框架']

const querySearch = (text, cb) => {
  const results = text ? pool.filter((item) => item.toLowerCase().includes(text.toLowerCase())) : pool
  cb(results.map((item) => ({ value: item })))
}
const empty = (text, cb) => cb([])
const onSelect = (item) => console.log(item)
</script>
