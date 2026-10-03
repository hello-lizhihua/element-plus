<template>
  <div class="demo-section">
    <div style="position: relative">
      <el-affix target=".help-wrap .help-scroll" :offset="0">
        <el-alert type="info" :closable="false" title="帮助中心:滚动时锚点导航保持可见" style="border-radius: 0" />
      </el-affix>
      <div class="help-wrap" style="display: flex; gap: 16px; margin-top: 12px">
        <div class="help-scroll" ref="scrollRef" style="flex: 1; height: 300px; overflow: auto; padding: 0 16px; border: 1px solid var(--el-border-color-lighter); border-radius: 8px">
          <h4 id="h-install">安装</h4>
          <p v-for="i in 5" :key="'a' + i" class="help-p">安装步骤说明 {{ i }}</p>
          <h4 id="h-voice">讲述人校准</h4>
          <p v-for="i in 5" :key="'b' + i">校准流程说明 {{ i }}</p>
          <h4 id="h-glossary">词汇表</h4>
          <p v-for="i in 5" :key="'c' + i">词汇表说明 {{ i }}</p>
          <h4 id="h-export">导出</h4>
          <p v-for="i in 5" :key="'d' + i">导出说明 {{ i }}</p>
        </div>
        <div style="width: 160px">
          <el-anchor :container="scrollContainer" direction="vertical" :offset="10">
            <el-anchor-link href="#h-install" title="安装" />
            <el-anchor-link href="#h-voice" title="讲述人校准" />
            <el-anchor-link href="#h-glossary" title="词汇表" />
            <el-anchor-link href="#h-export" title="导出" />
          </el-anchor>
        </div>
      </div>
    </div>
    <el-divider />
    <div class="demo-row" style="align-items: flex-start">
      <el-collapse style="flex: 1">
        <el-collapse-item title="为什么转写结果是乱码?" name="1">
          <p>语音模型偶发生僻字在解码层变成替换符,系统已统一清洗。</p>
        </el-collapse-item>
        <el-collapse-item title="为什么播放器不显示?" name="2">
          <p>音频文件缺失时不会显示播放器,重新下载即可。</p>
        </el-collapse-item>
      </el-collapse>
      <el-empty description="没有找到答案?" :image-size="80" />
    </div>
    <el-watermark :content="['帮助中心']" :gap="[80, 80]" :font="{ fontSize: 12 }">
      <div class="watermark-pad">水印保护的页脚区域</div>
    </el-watermark>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const scrollRef = ref(null)
const scrollContainer = computed(() => scrollRef.value)
</script>

<style scoped>
.help-p {
  font-size: 13px;
  color: var(--el-text-color-regular);
}
.watermark-pad {
  height: 90px;
  display: grid;
  place-items: center;
  color: var(--el-text-color-secondary);
  font-size: 13px;
  border: 1px solid var(--el-border-color-extra-light);
  border-radius: 8px;
}
</style>
