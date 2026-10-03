<template>
  <div class="demo-section">
    <h3>基础（点击标题滚动到对应区域）</h3>
    <div class="anchor-wrap">
      <el-anchor :container="containerRef" direction="vertical" :offset="12" @click="onClick">
        <el-anchor-link href="#part-1" title="第一部分" />
        <el-anchor-link href="#part-2" title="第二部分">
          <el-anchor-link href="#part-2-1" title="子节 2.1" />
          <el-anchor-link href="#part-2-2" title="子节 2.2" />
        </el-anchor-link>
        <el-anchor-link href="#part-3" title="第三部分" />
      </el-anchor>
      <div ref="containerRef" class="anchor-body">
        <h4 id="part-1">第一部分</h4>
        <p v-for="i in 6" :key="'a' + i">第一部分内容行 {{ i }}</p>
        <h4 id="part-2">第二部分</h4>
        <h5 id="part-2-1">子节 2.1</h5>
        <p v-for="i in 5" :key="'b' + i">子节内容 {{ i }}</p>
        <h5 id="part-2-2">子节 2.2</h5>
        <p v-for="i in 5" :key="'c' + i">子节内容 {{ i }}</p>
        <h4 id="part-3">第三部分</h4>
        <p v-for="i in 6" :key="'d' + i">第三部分内容行 {{ i }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const containerRef = ref(null)
const onClick = (e) => e.preventDefault()
</script>

<style scoped>
.anchor-wrap {
  display: flex;
  gap: 16px;
}
.anchor-body {
  flex: 1;
  height: 260px;
  overflow: auto;
  padding: 0 16px;
  border: 1px solid var(--el-border-color-lighter);
  border-radius: 8px;
}
.anchor-body p {
  font-size: 13px;
  color: var(--el-text-color-regular);
}
</style>
