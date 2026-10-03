<template>
  <div class="demo-section">
    <h3>行内表单（登录场景）</h3>
    <el-form :inline="true" :model="inline">
      <el-form-item label="用户名">
        <el-input v-model="inline.user" placeholder="用户名" />
      </el-form-item>
      <el-form-item label="城市">
        <el-select v-model="inline.city" placeholder="城市" style="width: 140px">
          <el-option label="上海" value="sh" />
          <el-option label="北京" value="bj" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
  </div>
  <div class="demo-section">
    <h3>校验（必填 / 长度 / 自定义校验器）</h3>
    <el-form ref="formRef" :model="ruleForm" :rules="rules" label-width="90px" style="max-width: 460px">
      <el-form-item label="活动名称" prop="name">
        <el-input v-model="ruleForm.name" />
      </el-form-item>
      <el-form-item label="活动区域" prop="region">
        <el-select v-model="ruleForm.region" placeholder="请选择" style="width: 100%">
          <el-option label="线上" value="online" />
          <el-option label="线下" value="offline" />
        </el-select>
      </el-form-item>
      <el-form-item label="人数" prop="count">
        <el-input-number v-model="ruleForm.count" :min="1" />
      </el-form-item>
      <el-form-item label="日期" prop="date">
        <el-date-picker v-model="ruleForm.date" type="date" placeholder="选择日期" style="width: 100%" />
      </el-form-item>
      <el-form-item label="即时配送" prop="delivery">
        <el-switch v-model="ruleForm.delivery" />
      </el-form-item>
      <el-form-item label="活动性质" prop="type">
        <el-checkbox-group v-model="ruleForm.type">
          <el-checkbox value="1">美食</el-checkbox>
          <el-checkbox value="2">外卖</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="备注" prop="desc">
        <el-input v-model="ruleForm.desc" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit(formRef)">立即创建</el-button>
        <el-button @click="reset(formRef)">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
  <div class="demo-section">
    <h3>对齐方式与标签位置</h3>
    <div class="demo-row">
      <el-radio-group v-model="labelPosition">
        <el-radio-button value="left">左</el-radio-button>
        <el-radio-button value="right">右</el-radio-button>
        <el-radio-button value="top">上</el-radio-button>
      </el-radio-group>
    </div>
    <el-form :label-position="labelPosition" label-width="80px" :model="demo" style="max-width: 380px">
      <el-form-item label="名称"><el-input v-model="demo.name" /></el-form-item>
      <el-form-item label="地址"><el-input v-model="demo.addr" /></el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'

const inline = reactive({ user: '', city: '' })
const formRef = ref(null)
const ruleForm = reactive({ name: '', region: '', count: 1, date: '', delivery: false, type: [], desc: '' })
const rules = {
  name: [
    { required: true, message: '请输入活动名称', trigger: 'blur' },
    { min: 3, max: 12, message: '长度 3 到 12 个字符', trigger: 'blur' },
  ],
  region: [{ required: true, message: '请选择活动区域', trigger: 'change' }],
  date: [{ type: 'date', required: true, message: '请选择日期', trigger: 'change' }],
  type: [{ type: 'array', required: true, message: '请至少选择一项', trigger: 'change' }],
}
const labelPosition = ref('right')
const demo = reactive({ name: '', addr: '' })

const submit = (formEl) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) ElMessage.success('校验通过')
  })
}
const reset = (formEl) => formEl?.resetFields()
const onSubmit = () => ElMessage.info('查询')
</script>
