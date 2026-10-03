<template>
  <div class="demo-section">
    <h3>基础（标题 + 内容 + 底部按钮）</h3>
    <el-button @click="basic = true">打开对话框</el-button>
    <el-dialog v-model="basic" title="提示" width="440px">
      <span>这是一段对话框内容,用于测试遮罩、圆角与按钮排版。</span>
      <template #footer>
        <el-button @click="basic = false">取消</el-button>
        <el-button type="primary" @click="basic = false">确定</el-button>
      </template>
    </el-dialog>
  </div>
  <div class="demo-section">
    <h3>配置组合（遮罩可点 / 居中 / 禁止ESC / 可拖拽）</h3>
    <el-button @click="configured = true">打开配置对话框</el-button>
    <el-dialog v-model="configured" title="配置对话框" width="460px" center draggable
      :close-on-click-modal="false" :show-close="true">
      <span>点击遮罩不会关闭;支持拖拽标题栏移动位置。</span>
      <template #footer>
        <el-button type="danger" @click="configured = false">我知道了</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const basic = ref(false)
const configured = ref(false)
</script>
