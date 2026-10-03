<template>
  <div class="demo-section" style="max-width: 560px">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px">
      <el-badge :value="unread" :hidden="unread === 0">
        <el-button :icon="Bell">消息中心</el-button>
      </el-badge>
      <el-space>
        <el-button size="small" @click="notify">系统通知</el-button>
        <el-button size="small" type="primary" @click="msg">普通消息</el-button>
        <el-button size="small" type="danger" @click="confirmClear">清空全部</el-button>
      </el-space>
    </div>
    <el-tabs v-model="tab">
      <el-tab-pane :label="`未读(${unread})`" name="unread">
        <el-empty v-if="unread === 0" description="没有未读消息" :image-size="72" />
        <div v-for="m in unreadList" :key="m.id" class="msg-row">
          <el-avatar :size="34" :style="{ background: m.color }">{{ m.who }}</el-avatar>
          <div style="flex: 1">
            <div style="font-size: 13px">{{ m.text }}</div>
            <el-text size="small" type="info">{{ m.time }}</el-text>
          </div>
          <el-tag v-if="m.important" size="small" type="danger">重要</el-tag>
          <el-button link size="small" @click="read(m)">标为已读</el-button>
        </div>
      </el-tab-pane>
      <el-tab-pane label="全部" name="all">
        <el-alert type="info" :closable="false" title="全部消息按时间倒序排列" style="margin-bottom: 10px" />
        <div v-for="m in all" :key="m.id" class="msg-row" :style="{ opacity: m.read ? 0.55 : 1 }">
          <el-avatar :size="34" :style="{ background: m.color }">{{ m.who }}</el-avatar>
          <div style="flex: 1; font-size: 13px">{{ m.text }}</div>
          <el-text size="small" type="info">{{ m.time }}</el-text>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { Bell } from '@element-plus/icons-vue'
import { ElMessage, ElNotification, ElMessageBox } from 'element-plus'

const tab = ref('unread')
const all = ref([
  { id: 1, who: '杜', color: '#fb7299', text: '转写任务「两小时播客」已完成', time: '12:03', read: false, important: true },
  { id: 2, who: 'D', color: '#5e6d82', text: '声纹样本已就绪,等待确认讲述人', time: '09:01', read: false },
  { id: 3, who: '系', color: '#67c23a', text: '词汇表「编辑器」分类新增 3 条词条', time: '昨天', read: true },
])
const unreadList = computed(() => all.value.filter((m) => !m.read))
const unread = computed(() => unreadList.value.length)
const read = (m) => {
  m.read = true
  ElMessage.success('已标为已读')
}
const notify = () => ElNotification({ title: '系统通知', message: '这是一条右上角通知', type: 'success' })
const msg = () => ElMessage.info('新消息已到达')
const confirmClear = async () => {
  try {
    await ElMessageBox.confirm('清空全部未读消息?', '确认', { type: 'warning' })
    all.value.forEach((m) => (m.read = true))
    ElMessage.success('已全部标记为已读')
  } catch {
    // 取消
  }
}
</script>

<style scoped>
.msg-row {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 4px;
  border-bottom: 1px solid var(--el-border-color-extra-light);
}
</style>
