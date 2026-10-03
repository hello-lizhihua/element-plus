<template>
  <div class="demo-section">
    <h3>可勾选 / 默认展开 / 获取选中</h3>
    <el-tree
      ref="treeRef"
      :data="data"
      show-checkbox
      node-key="id"
      :default-expanded-keys="[1, 2]"
      :default-checked-keys="[3]"
      :props="{ label: 'name', children: 'children' }"
      @node-click="onClick"
    />
    <el-button size="small" style="margin-top: 10px" @click="getChecked">获取选中节点</el-button>
    <p style="font-size: 13px">当前选中:{{ checkedInfo }}</p>
  </div>
  <div class="demo-section">
    <h3>手风琴 / 自定义节点内容 / 懒加载</h3>
    <el-tree :data="data" accordion>
      <template #default="{ data: node }">
        <span style="display: flex; align-items: center; gap: 8px; font-size: 13px">
          <span>{{ node.name }}</span>
          <el-tag v-if="!node.children" size="small" type="info">叶子</el-tag>
        </span>
      </template>
    </el-tree>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

const treeRef = ref(null)
const checkedInfo = ref('（点击按钮查询）')
const data = [
  {
    id: 1,
    name: '项目',
    children: [
      { id: 2, name: '视频一', children: [{ id: 3, name: '段落一' }, { id: 4, name: '段落二' }] },
      { id: 5, name: '视频二' },
    ],
  },
]
const onClick = (node) => console.log(node)
const getChecked = () => {
  const nodes = treeRef.value?.getCheckedNodes() || []
  checkedInfo.value = nodes.map((n) => n.name).join('、') || '（空）'
  ElMessage.info(`选中 ${nodes.length} 个节点`)
}
</script>
