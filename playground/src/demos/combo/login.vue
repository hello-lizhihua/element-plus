<template>
  <div class="demo-section" style="display: flex; justify-content: center; padding: 24px 0">
    <el-card style="width: 400px">
      <template #header>
        <div style="display: flex; align-items: center; gap: 8px">
          <el-icon :size="18" color="var(--el-color-primary)"><UserFilled /></el-icon>
          <span style="font-weight: 600">登录 open-video</span>
        </div>
      </template>
      <el-form :model="form" :rules="rules" ref="formRef" label-position="top">
        <el-form-item label="用户名" prop="user">
          <el-input v-model="form.user" placeholder="用户名或邮箱" :prefix-icon="User" clearable />
        </el-form-item>
        <el-form-item label="密码" prop="pwd">
          <el-input v-model="form.pwd" type="password" placeholder="密码" :prefix-icon="Lock" show-password />
        </el-form-item>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px">
          <el-checkbox v-model="remember">记住我</el-checkbox>
          <el-link type="primary" :underline="false">忘记密码?</el-link>
        </div>
        <el-button type="primary" style="width: 100%" :loading="loading" @click="submit">登 录</el-button>
        <el-divider>或</el-divider>
        <el-button style="width: 100%" plain @click="guest">游客模式进入</el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { UserFilled, User, Lock } from '@element-plus/icons-vue'

const formRef = ref(null)
const loading = ref(false)
const remember = ref(true)
const form = reactive({ user: '', pwd: '' })
const rules = {
  user: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  pwd: [{ required: true, message: '请输入密码', trigger: 'blur' }, { min: 6, message: '至少 6 位', trigger: 'blur' }],
}
const submit = () => {
  formRef.value?.validate((valid) => {
    if (!valid) return
    loading.value = true
    setTimeout(() => {
      loading.value = false
      ElMessage.success('登录成功')
    }, 900)
  })
}
const guest = () => ElMessage.info('以游客身份进入')
</script>
