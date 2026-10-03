<template>
  <div class="demo-section">
    <h3>触发方式（hover / click / 手动）与位置</h3>
    <div class="demo-row">
      <el-popover placement="top-start" title="上左" width="200" trigger="hover" content="hover 触发的弹出内容">
        <template #reference>
          <el-button>hover 弹出</el-button>
        </template>
      </el-popover>
      <el-popover placement="bottom" title="下方" width="200" trigger="click" content="click 触发">
        <template #reference>
          <el-button>click 弹出</el-button>
        </template>
      </el-popover>
      <el-popover placement="right" title="右侧" width="200" trigger="manual" v-model:visible="manual" content="manual 触发">
        <template #reference>
          <el-button @click="manual = !manual">手动切换</el-button>
        </template>
      </el-popover>
    </div>
  </div>
  <div class="demo-section">
    <h3>嵌套信息（表格 / 按钮）</h3>
    <el-popover placement="bottom" width="320" trigger="click">
      <template #reference>
        <el-button>点击查看嵌套内容</el-button>
      </template>
      <el-table :data="rows" size="small">
        <el-table-column property="name" label="名称" width="100" />
        <el-table-column property="value" label="数值" />
      </el-table>
    </el-popover>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const manual = ref(false)
const rows = [
  { name: '段落', value: '1057' },
  { name: '章节', value: '71' },
]
</script>
