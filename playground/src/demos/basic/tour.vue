<template>
  <div class="demo-section">
    <h3>漫游指南（步骤引导,点击开始体验）</h3>
    <el-button type="primary" @click="start">开始漫游</el-button>
    <div style="display: flex; gap: 20px; margin-top: 24px">
      <el-button ref="ref1">第一步目标</el-button>
      <el-button ref="ref2">第二步目标</el-button>
      <el-button ref="ref3">第三步目标</el-button>
    </div>
    <el-tour v-model="open" :steps="steps" />
  </div>
</template>

<script setup>
import { customRef, ref } from 'vue'

const open = ref(false)
const ref1 = ref(null)
const ref2 = ref(null)
const ref3 = ref(null)
const steps = [
  { target: ref1, title: '第一步', description: '这里演示目标按钮的介绍文案。' },
  { target: ref2, title: '第二步', description: '支持任意元素作为高亮目标。' },
  { target: ref3, title: '第三步', description: '按 ESC 或点击遮罩可提前结束。' },
]
const start = () => {
  open.value = true
}
</script>
