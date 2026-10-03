<script setup lang="ts">
import { computed } from 'vue'
import { useStorage } from '@vueuse/core'
import { useLang } from '../../composables/lang'

// 皮肤四选项:明亮蓝 / 清新粉 × 浅深,与 @hello-lizhihua/element-plus 皮肤包一致
const skins = [
  { label: '明亮蓝 · 浅', value: 'blue-light' },
  { label: '明亮蓝 · 深', value: 'blue-dark' },
  { label: '清新粉 · 浅', value: 'pink-light' },
  { label: '清新粉 · 深', value: 'pink-dark' },
]

const current = useStorage('docs-skin', 'blue-light')

const currentLabel = computed(
  () => skins.find((s) => s.value === current.value)?.label ?? '明亮蓝 · 浅',
)

function apply(value: string) {
  current.value = value
  const [name, mode] = value.split('-')
  document.documentElement.dataset.skin = name
  document.documentElement.classList.toggle('dark', mode === 'dark')
}

apply(current.value)
</script>

<template>
  <div class="skin-container">
    <ClientOnly>
      <ElDropdown popper-class="skin-popup" role="navigation" @command="apply">
        <span class="skin-label" :aria-label="currentLabel">
          <i-ri-palette-line />
        </span>
        <template #dropdown>
          <ElDropdownMenu>
            <ElDropdownItem
              v-for="s in skins"
              :key="s.value"
              :command="s.value"
              :class="{ selected: s.value === current }"
            >
              {{ s.label }}
            </ElDropdownItem>
          </ElDropdownMenu>
        </template>
      </ElDropdown>
    </ClientOnly>
  </div>
</template>

<style lang="scss" scoped>
@use '../../styles/mixins' as *;

.skin-container {
  display: none;
  height: 24px;
  padding: 0 12px;
  cursor: pointer;

  @include respond-to('md') {
    display: block;
  }
}

.skin-label {
  display: inline-flex;
  font-size: 18px;
  color: var(--el-text-color-secondary);
  vertical-align: middle;
}
</style>

<style lang="scss">
.el-dropdown__popper.skin-popup {
  --el-bg-color-overlay: var(--bg-color);
  --el-popper-border-radius: 8px;

  padding: 7px 0;
  min-width: 150px;

  .el-dropdown-menu__item.selected {
    color: var(--brand-color);
    font-weight: 600;
  }
}
</style>
