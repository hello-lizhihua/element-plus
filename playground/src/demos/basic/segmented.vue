<template>
  <div class="demo-section">
    <h3>基础分段控制器（v-model + 块状 block）</h3>
    <div class="demo-col">
      <el-segmented v-model="theme" :options="themes" />
      <el-segmented v-model="size" :options="['default', 'small']" block />
      <p>主题:{{ theme }} · 尺寸:{{ size }}</p>
    </div>
  </div>
  <div class="demo-section">
    <h3>自定义选项（含禁用与图标内容）</h3>
    <el-segmented v-model="mode" :options="modeOptions">
      <template #option="{ item }">
        <span style="display: inline-flex; align-items: center; gap: 4px">
          <el-icon><component :is="item.icon" /></el-icon>{{ item.label }}
        </span>
      </template>
    </el-segmented>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { AlarmClock, Moon, Sunny } from '@element-plus/icons-vue'

const theme = ref('white-light')
const size = ref('default')
const mode = ref('day')
const themes = ['white-light', 'white-dark', 'pink-light', 'pink-dark']
const modeOptions = [
  { label: '日间', value: 'day', icon: Sunny },
  { label: '夜间', value: 'night', icon: Moon },
  { label: '定时', value: 'auto', icon: AlarmClock, disabled: true },
]
</script>
