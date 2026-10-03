<template>
  <div class="demo-section">
    <h3>自定义内容区域（滚动 120px 后出现回到顶部按钮）</h3>
    <div class="backtop-box" ref="boxRef">
      <el-backtop target=".backtop-box" :visibility-height="120" :right="24" :bottom="24">
        <div class="backtop-inner">TOP</div>
      </el-backtop>
      <p v-for="i in 30" :key="i" class="fill-line">滚动内容 {{ i }},向下滚动后右下角出现回到顶部。</p>
    </div>
  </div>
  <div class="demo-section">
    <h3>页面级（滚动本页后出现在右下角）</h3>
    <el-backtop :visibility-height="200" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const boxRef = ref(null)
</script>

<style scoped>
.backtop-box {
  height: 240px;
  overflow: auto;
  border: 1px solid var(--el-border-color-lighter);
  border-radius: 8px;
  padding: 0 14px;
  position: relative;
}
.fill-line {
  font-size: 13px;
  color: var(--el-text-color-regular);
}
.backtop-inner {
  height: 100%;
  width: 100%;
  background: var(--el-bg-color-overlay);
  box-shadow: var(--el-box-shadow-light);
  border-radius: 8px;
  display: grid;
  place-items: center;
  font-size: 12px;
  color: var(--el-color-primary);
}
</style>
