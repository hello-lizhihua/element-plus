<template>
  <div class="demo-section">
    <h3>locale 中文化 + button 全局 autoInsertSpace</h3>
    <el-config-provider :locale="zhCn" :button="{ autoInsertSpace: true }">
      <div class="demo-col">
        <el-date-picker type="date" placeholder="locale 生效:中文占位" style="width: 240px" />
        <el-pagination :total="50" layout="total, prev, pager, next" />
        <el-button>确定</el-button>
      </div>
    </el-config-provider>
  </div>
</template>

<script setup>
import zhCn from 'element-plus/es/locale/lang/zh-cn'
</script>
