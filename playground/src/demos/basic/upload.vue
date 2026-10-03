<template>
  <div class="demo-section">
    <h3>点击上传 / 拖拽上传 / 头像裁剪式</h3>
    <div class="demo-row" style="align-items: flex-start">
      <el-upload action="#" :auto-upload="false" :limit="3">
        <el-button type="primary">点击上传</el-button>
        <template #tip>
          <div class="el-upload__tip">不超过 500KB 的文件</div>
        </template>
      </el-upload>
      <el-upload drag action="#" :auto-upload="false" style="width: 320px">
        <el-icon class="el-icon--upload"><UploadFilled /></el-icon>
        <div class="el-upload__text">拖拽文件到此处或<em>点击上传</em></div>
      </el-upload>
      <el-upload class="avatar-uploader" action="#" :auto-upload="false" :show-file-list="false">
        <img v-if="avatar" :src="avatar" class="avatar-preview" />
        <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
      </el-upload>
    </div>
  </div>
  <div class="demo-section">
    <h3>照片墙 / 文件列表控制</h3>
    <el-upload v-model:file-list="fileList" action="#" list-type="picture-card" :auto-upload="false" :on-preview="onPreview">
      <el-icon><Plus /></el-icon>
    </el-upload>
    <el-button size="small" style="margin-top: 10px" @click="fileList = []">清空列表</el-button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { UploadFilled, Plus } from '@element-plus/icons-vue'
import { ElMessageBox } from 'element-plus'

const avatar = ref('')
const fileList = ref([
  { name: '示例图.png', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg' },
])
const onPreview = (file) => ElMessageBox.alert(file.name, '预览文件')
</script>

<style scoped>
.avatar-uploader :deep(.el-upload) {
  border: 1px dashed var(--el-border-color);
  border-radius: 8px;
  width: 96px;
  height: 96px;
  display: grid;
  place-items: center;
}
.avatar-preview {
  width: 96px;
  height: 96px;
  object-fit: cover;
}
.avatar-uploader-icon {
  font-size: 24px;
  color: var(--el-text-color-secondary);
}
</style>
