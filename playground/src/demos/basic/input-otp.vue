<template>
  <div class="demo-section">
    <h3>验证码输入（四位数字）</h3>
    <el-input-otp v-model="code" length="4" style="width: 280px" />
    <p>当前输入:<code>{{ code || '（空）' }}</code></p>
  </div>
  <div class="demo-section">
    <h3>带分隔符的六位</h3>
    <el-input-otp v-model="code2" length="6" style="width: 420px" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const code = ref('')
const code2 = ref('')
</script>
