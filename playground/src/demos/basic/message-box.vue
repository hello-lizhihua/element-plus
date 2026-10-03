<template>
  <div class="demo-section">
    <h3>alert 确认 / 输入框 / 提交校验</h3>
    <div class="demo-row">
      <el-button @click="alert">alert</el-button>
      <el-button @click="confirm">confirm(带取消)</el-button>
      <el-button @click="prompt">prompt 输入</el-button>
    </div>
  </div>
  <div class="demo-section">
    <h3>自定义按钮文字 / 错误图标 / draggable</h3>
    <div class="demo-row">
      <el-button @click="custom">自定义按钮</el-button>
      <el-button @click="withError">错误图标</el-button>
      <el-button @click="drag">可拖拽</el-button>
    </div>
  </div>
</template>

<script setup>
import { ElMessage, ElMessageBox } from 'element-plus'

const alert = () => ElMessageBox.alert('这是一段提示内容', '标题', { confirmButtonText: '知道了' })
const confirm = async () => {
  try {
    await ElMessageBox.confirm('删除后不可恢复,确定继续?', '删除确认', {
      confirmButtonText: '删除',
      cancelButtonText: '取消',
      type: 'warning',
    })
    ElMessage.success('已删除')
  } catch {
    ElMessage.info('已取消')
  }
}
const prompt = async () => {
  try {
    const { value } = await ElMessageBox.prompt('请输入项目名称', '新建项目', {
      inputPattern: /\S+/,
      inputErrorMessage: '名称不能为空',
    })
    ElMessage.success(`已创建:${value}`)
  } catch {
    // 取消
  }
}
const custom = () =>
  ElMessageBox.alert('自定义按钮文案与类型', '提示', { confirmButtonText: '好的', confirmButtonClass: 'el-button--primary' })
const withError = () => ElMessageBox.alert('出错了', '错误', { type: 'error' })
const drag = () => ElMessageBox.alert('拖拽标题栏试试', '可拖拽', { draggable: true })
</script>
