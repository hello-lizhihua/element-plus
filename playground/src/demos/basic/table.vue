<template>
  <div class="demo-section">
    <h3>基础表格（边框 / 斑马纹 / 固定表头与列）</h3>
    <el-table :data="rows" border stripe height="240" style="width: 100%">
      <el-table-column type="index" width="56" label="#" />
      <el-table-column prop="name" label="名称" width="140" fixed />
      <el-table-column prop="type" label="类型" width="120" />
      <el-table-column prop="desc" label="描述" />
      <el-table-column prop="status" label="状态" width="100">
        <template #default="{ row }">
          <el-tag size="small" :type="row.status === '完成' ? 'success' : 'info'">{{ row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="140" fixed="right">
        <template #default="{ row }">
          <el-button link type="primary" size="small">编辑</el-button>
          <el-button link type="danger" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
  <div class="demo-section">
    <h3>选择 / 排序 / 展开行 / 合计</h3>
    <el-table :data="rows" @selection-change="(v) => (picked = v.length)">
      <el-table-column type="selection" width="44" />
      <el-table-column prop="name" label="名称" sortable />
      <el-table-column prop="count" label="数量" sortable />
      <el-table-column type="expand">
        <template #default="{ row }">
          <p style="padding: 0 20px; margin: 0; font-size: 13px">{{ row.name }} 的详情:{{ row.desc }}</p>
        </template>
      </el-table-column>
    </el-table>
    <p style="font-size: 13px; color: var(--el-text-color-secondary)">已勾选 {{ picked }} 行</p>
  </div>
  <div class="demo-section">
    <h3>空数据</h3>
    <el-table :data="[]" empty-text="暂无转写记录" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const picked = ref(0)
const rows = [
  { name: '开场白', type: '原始', desc: '各位网友大家好', status: '完成', count: 12 },
  { name: '自我介绍', type: '原始', desc: '嘉宾介绍自己的经历', status: '完成', count: 8 },
  { name: '话题引入', type: '洗稿', desc: '从 Muse 的爆火聊起', status: '进行中', count: 21 },
]
</script>
