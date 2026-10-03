<template>
  <div class="demo-section">
    <h3>卡片化标签页（card + 增加/关闭）</h3>
    <el-tabs v-model="cardTab" type="card" closable @tab-remove="removeTab">
      <el-tab-pane v-for="t in cardTabs" :key="t.name" :name="t.name">
        <template #label>
          <span><el-icon style="vertical-align: -2px"><Calendar /></el-icon> {{ t.title }}</span>
        </template>
        {{ t.content }}
      </el-tab-pane>
      <el-tab-pane disabled label="禁用页" name="disabled">不可点击</el-tab-pane>
    </el-tabs>
  </div>
  <div class="demo-section">
    <h3>位置（上下左右）/ 边框模式 / 懒渲染</h3>
    <div class="demo-col">
      <el-radio-group v-model="position" size="small">
        <el-radio-button value="top">top</el-radio-button>
        <el-radio-button value="right">right</el-radio-button>
        <el-radio-button value="bottom">bottom</el-radio-button>
        <el-radio-button value="left">left</el-radio-button>
      </el-radio-group>
      <el-tabs v-model="posTab" :tab-position="position" type="border-card" style="min-height: 160px">
        <el-tab-pane label="原始文本">原始文本内容</el-tab-pane>
        <el-tab-pane label="洗稿文本" lazy>懒渲染:切换到才创建</el-tab-pane>
        <el-tab-pane label="设置">设置内容</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Calendar } from '@element-plus/icons-vue'

const cardTab = ref('raw')
let seq = 3
const cardTabs = ref([
  { name: 'raw', title: '原始文本', content: '原始文本页签内容' },
  { name: 'polished', title: '洗稿文本', content: '洗稿文本页签内容' },
  { name: 'export', title: '导出', content: '导出设置内容' },
])
const removeTab = (name) => {
  cardTabs.value = cardTabs.value.filter((t) => t.name !== name)
}
const position = ref('top')
const posTab = ref('0')
</script>
