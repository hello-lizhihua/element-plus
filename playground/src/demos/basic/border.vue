<template>
  <div class="demo-section">
    <h3>边框粗细</h3>
    <div class="demo-row">
      <div v-for="v in borders" :key="v.cls" class="border-box" :class="v.cls">{{ v.label }}</div>
    </div>
  </div>
  <div class="demo-section">
    <h3>边框颜色</h3>
    <div class="demo-row">
      <div v-for="c in colors" :key="c.cls" class="border-box" :class="c.cls">{{ c.label }}</div>
    </div>
  </div>
  <div class="demo-section">
    <h3>圆角</h3>
    <div class="demo-row">
      <div v-for="r in radii" :key="r.cls" class="radius-box" :class="r.cls">{{ r.label }}</div>
    </div>
  </div>
  <div class="demo-section">
    <h3>盒阴影</h3>
    <div class="demo-row">
      <div v-for="s in shadows" :key="s.cls" class="shadow-box" :class="s.cls">{{ s.label }}</div>
    </div>
  </div>
</template>

<script setup>
const borders = [{ cls: 'br-1', label: '1px' }]
const colors = [
  { cls: 'bc-base', label: 'base' },
  { cls: 'bc-light', label: 'light' },
  { cls: 'bc-lighter', label: 'lighter' },
]
const radii = [{ cls: 'rd-base', label: 'base 4px' }]
const shadows = [
  { cls: 'sh-dark', label: 'dark' },
  { cls: 'sh-base', label: 'base' },
  { cls: 'sh-light', label: 'light' },
  { cls: 'sh-lighter', label: 'lighter' },
]
</script>

<style scoped>
.border-box {
  width: 120px;
  height: 56px;
  display: grid;
  place-items: center;
  font-size: 13px;
}
.br-1 { border: 1px solid var(--el-border-color); }
.bc-base { border: 1px solid var(--el-border-color); }
.bc-light { border: 1px solid var(--el-border-color-light); }
.bc-lighter { border: 1px solid var(--el-border-color-lighter); }
.radius-box {
  width: 120px;
  height: 56px;
  display: grid;
  place-items: center;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
  font-size: 13px;
}
.rd-base { border-radius: var(--el-border-radius-base); }
.shadow-box {
  width: 120px;
  height: 56px;
  display: grid;
  place-items: center;
  background: var(--el-bg-color);
  font-size: 13px;
  border-radius: 6px;
}
.sh-dark { box-shadow: var(--el-box-shadow-dark); }
.sh-base { box-shadow: var(--el-box-shadow); }
.sh-light { box-shadow: var(--el-box-shadow-light); }
.sh-lighter { box-shadow: var(--el-box-shadow-lighter); }
</style>
