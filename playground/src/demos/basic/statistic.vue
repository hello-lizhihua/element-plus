<template>
  <div class="demo-section">
    <h3>带分隔线的统计（从 0 到值动画）</h3>
    <el-statistic group-separator="," :value="120930" :value-style="{ color: 'var(--el-color-primary)' }">
      <template #title>转写字符数</template>
    </el-statistic>
  </div>
  <div class="demo-section">
    <h3>统计卡片组（含小数位与后缀）</h3>
    <div class="demo-row" style="align-items: stretch">
      <el-card style="width: 180px" :body-style="{ padding: '16px' }">
        <el-statistic title="视频数" :value="42" />
      </el-card>
      <el-card style="width: 180px" :body-style="{ padding: '16px' }">
        <el-statistic title="完成率" :value="98.6" :precision="1" suffix="%" />
      </el-card>
      <el-card style="width: 180px" :body-style="{ padding: '16px' }">
        <el-statistic title="错误" :value="2" value-style="{ color: red }">
          <template #suffix>
            <span style="color: var(--el-color-danger)">条</span>
          </template>
        </el-statistic>
      </el-card>
    </div>
  </div>
  <div class="demo-section">
    <h3>倒计时（Countdown 与 Statistic 同族）</h3>
    <el-countdown title="距离下一轮转写" :duration="1000 * 60 * 5" format="HH:mm:ss" />
  </div>
</template>
