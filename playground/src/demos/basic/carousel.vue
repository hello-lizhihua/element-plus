<template>
  <div class="demo-section">
    <h3>基础（指示器 / 切换箭头 / 自动播放）</h3>
    <el-carousel height="180px" style="max-width: 640px">
      <el-carousel-item v-for="i in 4" :key="i">
        <div class="carousel-cell" :style="{ background: `var(--el-color-primary-light-${9 - i * 2})` }">
          第 {{ i }} 屏
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
  <div class="demo-section">
    <h3>卡片化 + 指示器在外 + 竖直方向</h3>
    <div class="demo-row" style="align-items: flex-start">
      <el-carousel type="card" height="160px" style="flex: 1; max-width: 520px">
        <el-carousel-item v-for="i in 5" :key="i">
          <div class="carousel-cell">卡片 {{ i }}</div>
        </el-carousel-item>
      </el-carousel>
      <el-carousel height="200px" direction="vertical" :autoplay="false" style="width: 120px">
        <el-carousel-item v-for="i in 3" :key="i">
          <div class="carousel-cell">竖 {{ i }}</div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<style scoped>
.carousel-cell {
  height: 100%;
  display: grid;
  place-items: center;
  color: #fff;
  font-size: 20px;
  background: var(--el-color-primary);
}
</style>
