<template>
  <div class="demo-section">
    <h3>触发方式（hover / click）与命令事件</h3>
    <div class="demo-row">
      <el-dropdown @command="onCommand">
        <el-button>
          更多操作(hover)<el-icon style="margin-left: 6px"><ArrowDown /></el-icon>
        </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="rename">重命名</el-dropdown-item>
            <el-dropdown-item command="download">下载文本</el-dropdown-item>
            <el-dropdown-item command="delete" divided>删除</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <el-dropdown trigger="click" @command="onCommand">
        <span class="dropdown-link">点击展开<el-icon><ArrowDown /></el-icon></span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item :icon="Plus" command="add">新增</el-dropdown-item>
            <el-dropdown-item :icon="Edit" command="edit">编辑</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
  <div class="demo-section">
    <h3>禁用项 / 分组标题 / 尺寸</h3>
    <el-dropdown>
      <el-button>大尺寸下拉</el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item-group title="文件操作">
            <el-dropdown-item>打开</el-dropdown-item>
            <el-dropdown-item disabled>导出(不可用)</el-dropdown-item>
          </el-dropdown-item-group>
          <el-dropdown-item-group title="其他">
            <el-dropdown-item divided>设置</el-dropdown-item>
          </el-dropdown-item-group>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup>
import { ElMessage } from 'element-plus'
import { ArrowDown, Plus, Edit } from '@element-plus/icons-vue'

const onCommand = (command) => ElMessage.info(`命令:${command}`)
</script>

<style scoped>
.dropdown-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  color: var(--el-color-primary);
  font-size: 14px;
  outline: none;
}
</style>
