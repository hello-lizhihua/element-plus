<template>
  <div class="demo-section" style="max-width: 640px">
    <el-tabs v-model="tab">
      <el-tab-pane label="通用" name="general">
        <el-form label-width="120px">
          <el-form-item label="皮肤">
            <el-segmented v-model="form.skin" :options="skins" />
          </el-form-item>
          <el-form-item label="启动页">
            <el-radio-group v-model="form.home">
              <el-radio value="projects">项目列表</el-radio>
              <el-radio value="cases">测试用例</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="并行转写块数">
            <el-slider v-model="form.workers" :min="1" :max="8" show-input />
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="转写" name="transcribe">
        <el-form label-width="120px">
          <el-form-item label="自动采样">
            <el-switch v-model="form.autoSample" />
          </el-form-item>
          <el-form-item label="截断开头(秒)">
            <el-input-number v-model="form.trim" :min="0" :max="3600" />
          </el-form-item>
          <el-form-item label="分块长度(秒)">
            <el-select v-model="form.chunk" style="width: 140px">
              <el-option :value="120" label="2 分钟" />
              <el-option :value="300" label="5 分钟" />
              <el-option :value="600" label="10 分钟" />
            </el-select>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="外观" name="appearance">
        <el-form label-width="120px">
          <el-form-item label="强调色">
            <el-color-picker v-model="form.color" show-alpha :predefine="['#fb7299', '#5e6d82']" />
          </el-form-item>
          <el-form-item label="表格密度">
            <el-radio-group v-model="form.density">
              <el-radio-button value="default">默认</el-radio-button>
              <el-radio-button value="compact">紧凑</el-radio-button>
            </el-radio-group>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
    <el-button type="primary">保存设置</el-button>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const tab = ref('general')
const skins = ['white-light', 'white-dark', 'pink-light', 'pink-dark']
const form = reactive({ skin: 'white-light', home: 'projects', workers: 4, autoSample: true, trim: 9, chunk: 300, color: '#fb7299', density: 'default' })
</script>
