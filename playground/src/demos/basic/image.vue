<template>
  <div class="demo-section">
    <h3>基础（大图预览）+ 加载失败回退</h3>
    <div class="demo-row">
      <el-image style="width: 160px; height: 100px" :src="okUrl" :preview-src-list="[okUrl]" fit="cover" preview-teleported />
      <el-image style="width: 160px; height: 100px" src="https://broken.example.com/x.png">
        <template #error>
          <div class="img-error">加载失败</div>
        </template>
      </el-image>
    </div>
  </div>
  <div class="demo-section">
    <h3>懒加载 / 填充模式 / 圆角</h3>
    <div class="demo-row">
      <el-image style="width: 160px; height: 100px" :src="okUrl" lazy loading="eager" fit="cover" />
      <el-image style="width: 160px; height: 100px" :src="okUrl" fit="contain" style-r="round" />
      <el-image style="width: 160px; height: 100px; border-radius: 10px" :src="okUrl" fit="cover" />
    </div>
  </div>
</template>

<script setup>
const okUrl = 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
</script>

<style scoped>
.img-error {
  display: grid;
  place-items: center;
  height: 100%;
  font-size: 12px;
  color: var(--el-text-color-secondary);
  background: var(--el-fill-color-light);
}
</style>
