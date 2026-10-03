<template>
  <div class="demo-section">
    <h3>基础（确认 / 取消事件）</h3>
    <div class="demo-row">
      <el-popconfirm title="确定删除这条记录吗?" @confirm="onConfirm" @cancel="onCancel">
        <template #reference>
          <el-button type="danger" plain>删除</el-button>
        </template>
      </el-popconfirm>
      <el-popconfirm title="确定保存修改吗?" confirm-button-text="保存" cancel-button-text="放弃" width="220">
        <template #reference>
          <el-button type="primary" plain>保存(自定义按钮)</el-button>
        </template>
      </el-popconfirm>
    </div>
  </div>
  <div class="demo-section">
    <h3>图标与文字颜色</h3>
    <el-popconfirm title="确定要退出登录吗?" icon="WarningFilled" icon-color="var(--el-color-warning)" width="220">
      <template #reference>
        <el-button>退出登录</el-button>
      </template>
    </el-popconfirm>
  </div>
</template>

<script setup>
import { ElMessage } from 'element-plus'

const onConfirm = () => ElMessage.success('已删除')
const onCancel = () => ElMessage.info('已取消')
</script>
