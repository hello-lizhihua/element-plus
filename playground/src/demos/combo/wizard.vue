<template>
  <div class="demo-section" style="max-width: 640px">
    <el-steps :active="step" align-center finish-status="success">
      <el-step title="基本信息" description="名称与类型" />
      <el-step title="上传素材" description="音频文件" />
      <el-step title="完成" description="确认创建" />
    </el-steps>

    <el-card style="margin-top: 20px" :body-style="{ padding: '24px' }">
      <el-form v-show="step === 0" :model="form" :rules="rules" ref="formRef" label-width="100px">
        <el-form-item label="任务名称" prop="name">
          <el-input v-model="form.name" placeholder="例如:十月播客转写" />
        </el-form-item>
        <el-form-item label="视频类型" prop="type">
          <el-radio-group v-model="form.type">
            <el-radio value="live">直播连麦</el-radio>
            <el-radio value="solo">个人录屏</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-alert type="info" :closable="false" title="直播连麦会做声纹采样与说话人分离" />
      </el-form>

      <el-upload v-show="step === 1" drag action="#" :auto-upload="false" multiple style="width: 100%">
        <el-icon class="el-icon--upload"><UploadFilled /></el-icon>
        <div class="el-upload__text">拖拽音频文件到此处</div>
        <template #tip>
          <div class="el-upload__tip">支持 m4a / wav / mp3,单文件 ≤ 2GB</div>
        </template>
      </el-upload>

      <el-result v-show="step === 2" icon="success" title="配置就绪" sub-title="点击「完成创建」开始任务">
        <template #extra>
          <el-descriptions :column="1" border size="small" style="text-align: left">
            <el-descriptions-item label="任务名称">{{ form.name || '（未命名）' }}</el-descriptions-item>
            <el-descriptions-item label="视频类型">{{ form.type === 'solo' ? '个人录屏' : '直播连麦' }}</el-descriptions-item>
          </el-descriptions>
        </template>
      </el-result>
    </el-card>

    <div style="display: flex; justify-content: center; gap: 12px; margin-top: 18px">
      <el-button v-if="step > 0" @click="step -= 1">上一步</el-button>
      <el-button v-if="step < 2" type="primary" @click="next">下一步</el-button>
      <el-button v-if="step === 2" type="primary" @click="done">完成创建</el-button>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { UploadFilled } from '@element-plus/icons-vue'

const step = ref(0)
const formRef = ref(null)
const form = reactive({ name: '', type: 'live' })
const rules = {
  name: [{ required: true, message: '请输入任务名称', trigger: 'blur' }],
}
const next = () => {
  if (step.value === 0) {
    formRef.value?.validate((valid) => {
      if (valid) step.value = 1
      else ElMessage.warning('请先完善基本信息')
    })
    return
  }
  step.value += 1
}
const done = () => ElMessage.success('任务已创建')
</script>
