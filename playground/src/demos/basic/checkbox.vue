<template>
  <div class="demo-section">
    <h3>类型：多选 / 按钮 / 带边框</h3>
    <div class="demo-col">
      <el-checkbox-group v-model="plain">
        <el-checkbox value="a">选项 A</el-checkbox>
        <el-checkbox value="b">选项 B</el-checkbox>
        <el-checkbox value="c" disabled>禁用 C</el-checkbox>
      </el-checkbox-group>
      <el-checkbox-group v-model="button" @change="onChange">
        <el-checkbox-button value="sh">上海</el-checkbox-button>
        <el-checkbox-button value="bj">北京</el-checkbox-button>
        <el-checkbox-button value="gz">广州</el-checkbox-button>
      </el-checkbox-group>
      <el-checkbox-group v-model="bordered">
        <el-checkbox value="1" border>带边框 1</el-checkbox>
        <el-checkbox value="2" border>带边框 2</el-checkbox>
      </el-checkbox-group>
    </div>
  </div>
  <div class="demo-section">
    <h3>全选 / 中间态</h3>
    <div class="demo-col">
      <el-checkbox v-model="checkAll" :indeterminate="indeterminate" @change="onCheckAll">全选</el-checkbox>
      <el-checkbox-group v-model="checked" @change="onChecked">
        <el-checkbox v-for="city in cities" :key="city" :value="city">{{ city }}</el-checkbox>
      </el-checkbox-group>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const plain = ref(['a'])
const button = ref(['sh'])
const bordered = ref(['1'])
const cities = ['上海', '北京', '广州', '深圳']
const checked = ref(['上海', '北京'])
const checkAll = ref(false)
const indeterminate = ref(true)
const sizes = ref(['m'])

const onCheckAll = (val) => {
  checked.value = val ? cities : []
  indeterminate.value = false
}
const onChecked = (value) => {
  const count = value.length
  checkAll.value = count === cities.length
  indeterminate.value = count > 0 && count < cities.length
}
const onChange = (value) => console.log(value)
</script>
