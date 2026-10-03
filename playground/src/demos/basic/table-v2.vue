<template>
  <div class="demo-section">
    <h3>虚拟化表格（5000 行,滚动流畅）</h3>
    <el-table-v2
      :columns="columns"
      :data="rows"
      :width="720"
      :height="320"
      fixed
    />
  </div>
</template>

<script setup>
const rows = Array.from({ length: 5000 }, (_, i) => ({
  id: i,
  name: `段落 ${i + 1}`,
  speaker: i % 2 ? '杜雨' : 'Davin',
  text: `这是第 ${i + 1} 段的转写内容,用于验证虚拟滚动性能。`,
}))
const columns = [
  { key: 'id', dataKey: 'id', title: '#', width: 60 },
  { key: 'name', dataKey: 'name', title: '名称', width: 120 },
  { key: 'speaker', dataKey: 'speaker', title: '讲述人', width: 100 },
  { key: 'text', dataKey: 'text', title: '内容', width: 420 },
]
</script>
