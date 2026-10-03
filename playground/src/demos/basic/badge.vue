<template>
  <div class="demo-section">
    <h3>数字 / 小红点 / 自定义最大值</h3>
    <div class="demo-row" style="gap: 28px">
      <el-badge :value="12"><el-button>评论</el-button></el-badge>
      <el-badge :value="200" :max="99"><el-button>回复</el-button></el-badge>
      <el-badge is-dot><el-button>红点</el-button></el-badge>
      <el-badge value="new"><el-button>文字标记</el-button></el-badge>
    </div>
  </div>
  <div class="demo-section">
    <h3>修饰（primary/success/warning/danger/info 自定义）与位置偏移</h3>
    <div class="demo-row" style="gap: 28px">
      <el-badge :value="1" type="primary"><el-button>primary</el-button></el-badge>
      <el-badge :value="2" type="success"><el-button>success</el-button></el-badge>
      <el-badge :value="3" type="warning"><el-button>warning</el-button></el-badge>
      <el-badge :value="4" type="danger"><el-button>danger</el-button></el-badge>
      <el-badge :value="5" type="info"><el-button>info</el-button></el-badge>
      <el-badge :value="6" type="danger" :offset="[6, -4]"><el-button>偏移</el-button></el-badge>
    </div>
  </div>
</template>
