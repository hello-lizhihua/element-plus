<template>
  <div class="demo-section">
    <el-breadcrumb separator="/" style="margin-bottom: 12px">
      <el-breadcrumb-item>资料库</el-breadcrumb-item>
      <el-breadcrumb-item>转写产物</el-breadcrumb-item>
    </el-breadcrumb>
    <div style="display: flex; justify-content: space-between; margin-bottom: 12px">
      <el-space>
        <el-input placeholder="搜索文件名" :prefix-icon="Search" clearable style="width: 220px" />
        <el-tooltip content="新建文件夹" placement="top">
          <el-button :icon="FolderAdd" />
        </el-tooltip>
        <el-dropdown>
          <el-button :icon="More" />
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>刷新</el-dropdown-item>
              <el-dropdown-item>排序:按时间</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-space>
      <el-upload action="#" :auto-upload="false" :show-file-list="false">
        <el-button type="primary" :icon="Upload">上传</el-button>
      </el-upload>
    </div>
    <el-table :data="files" @row-click="toggle">
      <el-table-column width="44">
        <template #default="{ row }">
          <el-checkbox :model-value="row.picked" @change="toggle(row)" @click.stop />
        </template>
      </el-table-column>
      <el-table-column label="名称" min-width="280">
        <template #default="{ row }">
          <el-icon style="vertical-align: -2px; margin-right: 6px" :color="row.dir ? 'var(--el-color-warning)' : 'var(--el-color-primary)'">
            <component :is="row.dir ? Folder : Document" />
          </el-icon>
          <span :style="{ cursor: row.dir ? 'pointer' : 'default' }">{{ row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="size" label="大小" width="110" />
      <el-table-column prop="time" label="修改时间" width="160" />
      <el-table-column label="操作" width="150">
        <template #default="{ row }">
          <el-tooltip content="下载" placement="top">
            <el-button link type="primary" :icon="Download" @click.stop />
          </el-tooltip>
          <el-tooltip content="预览" placement="top">
            <el-button link type="primary" :icon="View" @click.stop />
          </el-tooltip>
          <el-popconfirm title="删除该文件?">
            <template #reference>
              <el-button link type="danger" :icon="Delete" @click.stop />
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog v-model="dialog" title="新建文件夹" width="380px">
      <el-input v-model="newName" placeholder="文件夹名称" />
      <template #footer>
        <el-button @click="dialog = false">取消</el-button>
        <el-button type="primary" @click="create">创建</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { Search, FolderAdd, More, Upload, Download, View, Delete, Folder, Document } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'

const dialog = ref(false)
const newName = ref('')
const files = reactive([
  { name: 'BV1mwaP6gE3y.txt', size: '182 KB', time: '2026-10-03 12:03', picked: false },
  { name: 'BV1mwaP6gE3y.srt', size: '96 KB', time: '2026-10-03 12:03', picked: false },
  { name: 'BV1Jgaa6BECD.json', size: '24 KB', time: '2026-10-02 22:40', picked: false },
])
const toggle = (row) => {
  row.picked = !row.picked
}
const create = () => {
  if (!newName.value.trim()) return
  files.unshift({ name: newName.value.trim(), size: '—', time: '刚刚', dir: true })
  dialog.value = false
  newName.value = ''
  ElMessage.success('文件夹已创建')
}
</script>
