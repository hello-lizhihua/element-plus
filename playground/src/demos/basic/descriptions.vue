<template>
  <div class="demo-section">
    <h3>基础（带边框）</h3>
    <el-descriptions :column="3" border>
      <el-descriptions-item label="用户名">杜雨</el-descriptions-item>
      <el-descriptions-item label="身份">主持人</el-descriptions-item>
      <el-descriptions-item label="状态">
        <el-tag size="small">活跃</el-tag>
      </el-descriptions-item>
      <el-descriptions-item label="备注" :span="3">
        播客节目主持人,两小时对谈一期。
      </el-descriptions-item>
    </el-descriptions>
  </div>
  <div class="demo-section">
    <h3>无边框 / 居中 / 自定义尺寸与额外内容</h3>
    <el-descriptions :column="2" style="margin-bottom: 14px">
      <el-descriptions-item label="支付方式">微信支付</el-descriptions-item>
      <el-descriptions-item label="配送方式">同城闪送</el-descriptions-item>
    </el-descriptions>
    <el-descriptions :column="2" direction="vertical" border>
      <template #title>垂直排列的描述列表</template>
      <template #extra>
        <el-button type="primary" size="small">操作</el-button>
      </template>
      <el-descriptions-item label="订单号">202610030001</el-descriptions-item>
      <el-descriptions-item label="金额">¥ 128.00</el-descriptions-item>
      <el-descriptions-item label="创建时间">2026-10-03 12:00</el-descriptions-item>
      <el-descriptions-item label="状态">
        <el-tag size="small" type="success">已完成</el-tag>
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>
