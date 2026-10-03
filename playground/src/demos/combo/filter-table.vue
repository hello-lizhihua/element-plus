<template>
  <div class="demo-section">
    <el-form :inline="true" :model="filter">
      <el-form-item label="讲述人">
        <el-select v-model="filter.speaker" clearable placeholder="全部" style="width: 140px">
          <el-option label="杜雨" value="杜雨" />
          <el-option label="Davin" value="davin" />
        </el-select>
      </el-form-item>
      <el-form-item label="日期">
        <el-date-picker v-model="filter.range" type="daterange" range-separator="至" start-placeholder="开始"
          end-placeholder="结束" style="width: 260px" />
      </el-form-item>
      <el-form-item label="关键词">
        <el-input v-model="filter.kw" placeholder="搜索内容" :prefix-icon="Search" clearable style="width: 200px" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" :icon="Search">查询</el-button>
        <el-button :icon="Refresh">重置</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="rows" border stripe height="300">
      <el-table-column type="selection" width="44" />
      <el-table-column prop="time" label="时间" width="90" />
      <el-table-column prop="speaker" label="讲述人" width="110">
        <template #default="{ row }">
          <el-tag size="small" :type="row.speaker === '杜雨' ? 'success' : 'primary'" effect="plain">{{ row.speaker }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="text" label="内容" min-width="300" show-overflow-tooltip />
      <el-table-column label="操作" width="130" fixed="right">
        <template #default>
          <el-button link type="primary" size="small">试听</el-button>
          <el-popconfirm title="删除该段落?">
            <template #reference>
              <el-button link type="danger" size="small">删除</el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 12px">
      <el-text size="small" type="info">共 {{ rows.length }} 条,已选导出 0 条</el-text>
      <el-pagination background layout="total, prev, pager, next" :total="rows.length" :page-size="8" />
    </div>
  </div>
</template>

<script setup>
import { Search, Refresh } from '@element-plus/icons-vue'

const filter = { speaker: '', range: null, kw: '' }
const rows = Array.from({ length: 9 }, (_, i) => ({
  time: `00:${String(30 + i * 2).padStart(2, '0')}`,
  speaker: i % 2 ? '杜雨' : 'Davin',
  text: `这是第 ${i + 1} 段的转写内容,点击时间戳可跳转音频对应位置。`,
}))
</script>
