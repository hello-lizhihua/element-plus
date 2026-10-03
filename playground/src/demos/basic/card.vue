<template>
  <div class="demo-section">
    <h3>卡片（头部 + 内容 + 阴影时机）</h3>
    <div class="demo-row" style="align-items: stretch">
      <el-card style="width: 260px">
        <template #header>
          <div style="display: flex; justify-content: space-between; align-items: center">
            <span>卡片名</span>
            <el-button link type="primary">操作</el-button>
          </div>
        </template>
        <p style="margin: 0; font-size: 13px">always / hover / never 三种阴影时机，当前为默认 always。</p>
      </el-card>
      <el-card shadow="hover" style="width: 260px">
        <p style="margin: 0; font-size: 13px">hover 时才显示阴影的卡片。</p>
      </el-card>
      <el-card shadow="never" style="width: 260px">
        <p style="margin: 0; font-size: 13px">永远不显示阴影的卡片。</p>
      </el-card>
    </div>
  </div>
  <div class="demo-section">
    <h3>带图片的卡片</h3>
    <el-card style="width: 280px" :body-style="{ padding: '0' }">
      <img src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" style="width: 100%; display: block" />
      <div style="padding: 14px">
        <span>图片卡片</span>
        <div class="demo-row" style="margin-top: 10px; margin-bottom: 0">
          <el-button type="primary" size="small">立即查看</el-button>
          <el-button size="small">收藏</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>
