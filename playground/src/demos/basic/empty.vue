<template>
  <div class="demo-section">
    <h3>内置插图（data 为空 / 网络错误）与自定义描述</h3>
    <div class="demo-row">
      <el-empty description="暂无数据" />
      <el-empty image="https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6fddjpeg.jpeg" description="自定义图片" />
      <el-empty description="描述文字">
        <el-button type="primary">刷新</el-button>
        <el-button>返回</el-button>
      </el-empty>
    </div>
  </div>
  <div class="demo-section">
    <h3>尺寸与图片尺寸自定义</h3>
    <div class="demo-row">
      <el-empty description="small + 缩小图片" image-size="60" />
    </div>
  </div>
</template>
