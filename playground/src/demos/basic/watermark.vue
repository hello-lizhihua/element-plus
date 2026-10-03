<template>
  <div class="demo-section">
    <h3>全屏水印（页面右下区块演示）</h3>
    <div class="watermark-box">
      <el-watermark :content="['open-video', '皮肤测试']" :font="{ fontSize: 14 }" :gap="[60, 60]">
        <div style="height: 200px; display: grid; place-items: center; color: var(--el-text-color-secondary)">
          这块区域被水印覆盖
        </div>
      </el-watermark>
    </div>
  </div>
  <div class="demo-section">
    <h3>自定义内容插槽 + 旋转角度</h3>
    <div class="watermark-box">
      <el-watermark :rotate="-22" :gap="[40, 40]">
        <template #content>
          <div style="display: flex; gap: 4px; align-items: center; color: var(--el-color-danger)">
            <span>内部资料</span>
          </div>
        </template>
        <div style="height: 120px; display: grid; place-items: center; color: var(--el-text-color-secondary)">
          倾斜的红色水印
        </div>
      </el-watermark>
    </div>
  </div>
</template>

<style scoped>
.watermark-box {
  max-width: 560px;
  border: 1px solid var(--el-border-color-lighter);
  border-radius: 8px;
  overflow: hidden;
}
</style>
