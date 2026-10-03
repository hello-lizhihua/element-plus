<template>
  <div class="demo-section">
    <h3>基础（默认右侧 30%）</h3>
    <el-button @click="basic = true">打开抽屉</el-button>
    <el-drawer v-model="basic" title="详情抽屉">
      <p>抽屉内容区,支持任意组件。</p>
    </el-drawer>
  </div>
  <div class="demo-section">
    <h3>方向（左 / 上 / 下）与尺寸</h3>
    <div class="demo-row">
      <el-button @click="set('rtl')">右侧</el-button>
      <el-button @click="set('ltr')">左侧</el-button>
      <el-button @click="set('ttb')">顶部</el-button>
      <el-button @click="set('btt')">底部</el-button>
    </div>
    <el-drawer v-model="open" :direction="direction" :size="direction === 'rtl' || direction === 'ltr' ? '420px' : '40%'"
      :title="`方向:${direction}`">
      <p>方向:{{ direction }}</p>
    </el-drawer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const basic = ref(false)
const open = ref(false)
const direction = ref('rtl')
const set = (value) => {
  direction.value = value
  open.value = true
}
</script>
