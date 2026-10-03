<template>
  <div class="demo-section">
    <h3>基础 / 可清空 / 尺寸</h3>
    <div class="demo-col">
      <el-input v-model="text" placeholder="请输入内容" clearable style="width: 320px" />
      <el-input size="small" placeholder="small" style="width: 320px" />
      <el-input disabled placeholder="disabled" style="width: 320px" />
      <el-input readonly model-value="readonly 只读" style="width: 320px" />
    </div>
  </div>
  <div class="demo-section">
    <h3>前后置（图标 / 文本 / 按钮）与组合</h3>
    <div class="demo-col">
      <el-input v-model="kw" placeholder="搜索" style="width: 320px">
        <template #prefix><el-icon><Search /></el-icon></template>
      </el-input>
      <el-input placeholder="https://example.com" style="width: 320px">
        <template #prepend>https://</template>
        <template #append>.com</template>
      </el-input>
      <el-input placeholder="金额" style="width: 320px">
        <template #append>元</template>
      </el-input>
      <el-input placeholder="验证码" style="width: 320px">
        <template #append>
          <el-button>获取验证码</el-button>
        </template>
      </el-input>
    </div>
  </div>
  <div class="demo-section">
    <h3>文本域 / 自适应 / 字数统计 / 密码框</h3>
    <div class="demo-col">
      <el-input type="textarea" :rows="3" placeholder="固定 3 行" style="width: 420px" />
      <el-input type="textarea" autosize placeholder="自适应高度" style="width: 420px" />
      <el-input type="textarea" maxlength="30" show-word-limit placeholder="最多 30 字" style="width: 420px" />
      <el-input type="password" v-model="pwd" show-password placeholder="密码" style="width: 320px" />
    </div>
  </div>
  <div class="demo-section">
    <h3>校验状态</h3>
    <div class="demo-col">
      <el-input placeholder="error 状态" status="error" style="width: 320px" />
      <el-input placeholder="warning 状态" status="warning" style="width: 320px" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'

const text = ref('')
const kw = ref('')
const pwd = ref('')
</script>
