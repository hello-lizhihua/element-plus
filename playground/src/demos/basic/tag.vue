<template>
  <div class="demo-section">
    <h3>类型（success/info/warning/danger）与主题</h3>
    <div class="demo-row">
      <el-tag>默认</el-tag>
      <el-tag type="success">成功</el-tag>
      <el-tag type="info">信息</el-tag>
      <el-tag type="warning">警告</el-tag>
      <el-tag type="danger">危险</el-tag>
    </div>
    <div class="demo-row">
      <el-tag effect="dark">dark</el-tag>
      <el-tag effect="light">light</el-tag>
      <el-tag effect="plain">plain</el-tag>
    </div>
  </div>
  <div class="demo-section">
    <h3>可移除 / 动态编辑（新增与删除）</h3>
    <div class="demo-row">
      <el-tag v-for="tag in tags" :key="tag" closable @close="remove(tag)">{{ tag }}</el-tag>
      <el-input v-if="inputVisible" ref="inputRef" v-model="inputValue" size="small" style="width: 90px"
        @keyup.enter="add" @blur="add" />
      <el-button v-else size="small" @click="showInput">+ 新标签</el-button>
    </div>
  </div>
  <div class="demo-section">
    <h3>圆角</h3>
    <div class="demo-row">
      <el-tag round>圆角</el-tag>
      <el-tag size="small">small</el-tag>
    </div>
  </div>
</template>

<script setup>
import { nextTick, ref } from 'vue'

const tags = ref(['标签一', '标签二'])
const inputVisible = ref(false)
const inputValue = ref('')
const inputRef = ref(null)

const remove = (tag) => {
  tags.value = tags.value.filter((t) => t !== tag)
}
const showInput = () => {
  inputVisible.value = true
  nextTick(() => inputRef.value?.input?.focus())
}
const add = () => {
  if (inputValue.value.trim()) tags.value.push(inputValue.value.trim())
  inputVisible.value = false
  inputValue.value = ''
}
</script>
