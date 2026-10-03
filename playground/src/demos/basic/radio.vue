<template>
  <div class="demo-section">
    <h3>基础 / 禁用</h3>
    <div class="demo-col">
      <el-radio-group v-model="city">
        <el-radio value="sh">上海</el-radio>
        <el-radio value="bj">北京</el-radio>
        <el-radio value="gz" disabled>广州</el-radio>
      </el-radio-group>
      <el-radio-group v-model="disabledChoice" disabled>
        <el-radio value="a">选项 A</el-radio>
        <el-radio value="b">选项 B</el-radio>
      </el-radio-group>
    </div>
  </div>
  <div class="demo-section">
    <h3>按钮形态 / 带边框 / 尺寸</h3>
    <div class="demo-col">
      <el-radio-group v-model="tab">
        <el-radio-button value="all">全部</el-radio-button>
        <el-radio-button value="done">已完成</el-radio-button>
        <el-radio-button value="pending">进行中</el-radio-button>
      </el-radio-group>
      <el-radio-group v-model="bordered">
        <el-radio value="1" border>边框一</el-radio>
        <el-radio value="2" border>边框二</el-radio>
        <el-radio value="3" border size="small">边框三(small)</el-radio>
      </el-radio-group>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const city = ref('sh')
const disabledChoice = ref('a')
const tab = ref('all')
const bordered = ref('1')
</script>
