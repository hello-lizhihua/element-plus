<template>
  <div class="demo-section">
    <h3>基础（超过 7 页折叠页码）</h3>
    <el-pagination :total="200" />
  </div>
  <div class="demo-section">
    <h3>完整功能（每页条数 / 跳转 / 背景 / 全部页码）</h3>
    <el-pagination v-model:current-page="page" v-model:page-size="size" :total="400"
      :page-sizes="[10, 20, 50, 100]" layout="total, sizes, prev, pager, next, jumper" background
    />
  </div>
  <div class="demo-section">
    <h3>少量页码（prev/next 按钮）与尺寸</h3>
    <div class="demo-col">
      <el-pagination :total="40" layout="prev, pager, next" background size="small" />
      <el-pagination :total="40" layout="jumper, prev, pager, next" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const page = ref(1)
const size = ref(20)
</script>
