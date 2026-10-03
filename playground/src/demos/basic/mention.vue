<template>
  <div class="demo-section">
    <h3>@ 提及用户（输入 @ 触发建议）</h3>
    <el-mention v-model="value" :options="options" placeholder="输入 @ 唤起提及" style="width: 380px" />
  </div>
  <div class="demo-section">
    <h3>整体形式（type=avatar 展示成员）</h3>
    <el-mention v-model="value2" type="avatar" :options="avatarOptions" placeholder="输入 @ 选择成员" style="width: 380px" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref('感谢 @杜雨 的分享')
const value2 = ref('')
const options = ['杜雨', 'Davin', '独夫之心'].map((name) => ({ value: name }))
const avatarOptions = [
  { value: '杜雨', avatar: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg' },
  { value: 'Davin', avatar: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg' },
]
</script>
