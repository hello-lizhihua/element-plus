<template>
  <div class="demo-section">
    <h3>月历（默认展示当月）</h3>
    <el-calendar v-model="date" style="max-width: 720px" />
  </div>
  <div class="demo-section">
    <h3>周历模式 + 自定义单元格</h3>
    <el-calendar v-model="weekDate" style="max-width: 720px">
      <template #date-cell="{ data }">
        <div style="text-align: center">
          {{ data.day.split('-')[2] }}
          <div v-if="data.isSelected" style="font-size: 10px; color: var(--el-color-danger)">选中</div>
        </div>
      </template>
    </el-calendar>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const date = ref(new Date())
const weekDate = ref(new Date())
</script>
