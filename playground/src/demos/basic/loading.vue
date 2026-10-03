<template>
  <div class="demo-section">
    <h3>指令方式（v-loading）与全屏 / 局部服务方式</h3>
    <div class="demo-row">
      <div v-loading="local" class="loading-box">局部 loading(指令)</div>
      <div v-loading.fullscreen.lock="full" class="loading-box">全屏 loading(点按钮体验)</div>
    </div>
    <div class="demo-row">
      <el-button @click="local = !local">切换局部 loading</el-button>
      <el-button type="primary" @click="openFull">全屏 loading 2 秒</el-button>
    </div>
  </div>
  <div class="demo-section">
    <h3>自定义文案 / 图标 / 背景色 / SVG</h3>
    <div v-loading="true" element-loading-text="转写中,请稍候…" element-loading-background="rgba(0, 0, 0, 0.35)"
      element-loading-spinner="<svg width='36' height='36' viewBox='0 0 36 36'><circle cx='18' cy='18' r='14' stroke='white' stroke-width='3' fill='none' stroke-dasharray='60' stroke-linecap='round'><animateTransform attributeName='transform' type='rotate' from='0 18 18' to='360 18 18' dur='1s' repeatCount='indefinite'/></circle></svg>"
      class="loading-box dark-box">
      自定义加载层
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ElLoading } from 'element-plus'

const local = ref(true)
const full = ref(false)
const openFull = () => {
  const inst = ElLoading.service({ lock: true, text: '全屏加载中…', background: 'rgba(0, 0, 0, 0.6)' })
  setTimeout(() => inst.close(), 2000)
}
</script>

<style scoped>
.loading-box {
  height: 140px;
  flex: 1;
  min-width: 200px;
  display: grid;
  place-items: center;
  border: 1px solid var(--el-border-color-lighter);
  border-radius: 8px;
  font-size: 13px;
  color: var(--el-text-color-secondary);
}
.dark-box {
  background: var(--el-fill-color-dark);
  color: #fff;
}
</style>
