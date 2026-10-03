<template>
  <div class="demo-section">
    <h3>不同大小与层级</h3>
    <div class="demo-col">
      <el-text>default 主文字</el-text>
      <el-text size="small">small 主文字</el-text>
      <el-text type="primary">primary 文本</el-text>
      <el-text type="success">success 文本</el-text>
      <el-text type="warning">warning 文本</el-text>
      <el-text type="danger">danger 文本</el-text>
      <el-text type="info">info 文本</el-text>
      <el-text disabled>disabled 文本</el-text>
    </div>
  </div>
  <div class="demo-section">
    <h3>文字省略（truncated / line-clamp）</h3>
    <div class="demo-col">
      <el-text truncated style="max-width: 320px">
        单行截断：这是一段很长的文本，超出容器宽度后末尾会显示省略号，鼠标悬停可看完整内容。
      </el-text>
      <el-text line-clamp="2" style="max-width: 420px">
        多行截断 line-clamp=2：这是一段很长的文本，超过两行后会被截断并显示省略号。这是一段很长的文本，超过两行后会被截断并显示省略号。
      </el-text>
    </div>
  </div>
  <div class="demo-section">
    <h3>混合使用（el-text + el-tag + el-link）</h3>
    <el-space :size="6">
      <el-text>发布于</el-text>
      <el-text type="info">2026-10-03</el-text>
      <el-tag size="small" type="success">已上线</el-tag>
      <el-link type="primary" :underline="false">查看详情</el-link>
    </el-space>
  </div>
</template>
