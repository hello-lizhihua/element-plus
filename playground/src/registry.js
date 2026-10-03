// 组件注册表:基础用法(官方 docs 全部 82 个组件,按章节分组)+ 复合用法(组合场景)
import { defineAsyncComponent } from 'vue'

const lazy = (loader) => defineAsyncComponent(loader)

const zh = {
  affix: '固钉', alert: '警告', anchor: '锚点', autocomplete: '自动补全', avatar: '头像',
  backtop: '回到顶部', badge: '徽章', border: '边框', breadcrumb: '面包屑', button: '按钮',
  calendar: '日历', card: '卡片', carousel: '走马灯', cascader: '级联选择器', checkbox: '多选框',
  collapse: '折叠面板', 'color-picker-panel': '取色器面板', 'color-picker': '取色器', color: '色彩',
  'config-provider': '全局配置', container: '容器', 'date-picker-panel': '日期面板',
  'date-picker': '日期选择器', 'datetime-picker': '日期时间选择器', descriptions: '描述列表',
  dialog: '对话框', divider: '分割线', drawer: '抽屉', dropdown: '下拉菜单', empty: '空状态',
  form: '表单', icon: '图标', image: '图片', 'infinite-scroll': '无限滚动', 'input-number': '数字输入框',
  'input-otp': '验证码输入', 'input-tag': '标签输入', input: '输入框', layout: '布局', link: '链接',
  loading: '加载', mention: '提及', menu: '导航菜单', 'message-box': '弹框', message: '消息',
  notification: '通知', 'page-header': '页头', pagination: '分页', popconfirm: '气泡确认框',
  popover: '弹出框', progress: '进度条', radio: '单选框', rate: '评分', result: '结果',
  scrollbar: '滚动条', segmented: '分段控制器', 'select-v2': '选择器(虚拟列表)', select: '选择器',
  skeleton: '骨架屏', slider: '滑块', space: '间距', splitter: '分割面板', statistic: '统计数值',
  steps: '步骤条', switch: '开关', 'table-v2': '表格(虚拟化)', table: '表格', tabs: '标签页',
  tag: '标签', text: '文本', 'time-picker': '时间选择器', 'time-select': '时间选择(固定)',
  timeline: '时间线', tooltip: '文字提示', tour: '漫游指南', transfer: '穿梭框',
  'tree-select': '树选择', 'tree-v2': '树(虚拟化)', tree: '树控件', typography: '字体', upload: '上传',
  watermark: '水印',
}

// 章节:同一族组件归入同一章,展示站侧栏按章节分组
const chapters = {
  通用样式: ['color', 'border', 'typography', 'icon', 'divider', 'space', 'layout', 'container', 'scrollbar', 'text', 'config-provider'],
  按钮组: ['button', 'link', 'radio', 'checkbox', 'switch', 'segmented'],
  输入组: ['input', 'input-number', 'input-otp', 'input-tag', 'select', 'select-v2', 'cascader', 'autocomplete', 'mention', 'transfer', 'tree-select', 'upload', 'form', 'slider', 'rate', 'date-picker', 'date-picker-panel', 'datetime-picker', 'time-picker', 'time-select', 'color-picker', 'color-picker-panel'],
  数据展示组: ['table', 'table-v2', 'tag', 'badge', 'avatar', 'card', 'carousel', 'collapse', 'descriptions', 'image', 'progress', 'result', 'skeleton', 'statistic', 'timeline', 'tree', 'tree-v2', 'calendar', 'watermark', 'empty', 'infinite-scroll'],
  反馈组: ['alert', 'dialog', 'drawer', 'message', 'message-box', 'notification', 'popover', 'tooltip', 'popconfirm', 'loading', 'tour'],
  导航组: ['menu', 'tabs', 'breadcrumb', 'dropdown', 'page-header', 'steps', 'pagination', 'anchor', 'affix', 'backtop', 'splitter'],
}

const basic = Object.entries(chapters).flatMap(([chapter, keys]) =>
  keys.map((key) => ({
    key,
    chapter,
    label: `${zh[key]} ${key}`,
    comp: lazy(() => import(`./demos/basic/${key}.vue`)),
  })),
)

const combo = [
  { key: 'combo-login', chapter: '组合场景', label: '登录页', comp: lazy(() => import('./demos/combo/login.vue')) },
  { key: 'combo-filter-table', chapter: '组合场景', label: '列表筛选页', comp: lazy(() => import('./demos/combo/filter-table.vue')) },
  { key: 'combo-detail-drawer', chapter: '组合场景', label: '详情抽屉', comp: lazy(() => import('./demos/combo/detail-drawer.vue')) },
  { key: 'combo-settings', chapter: '组合场景', label: '设置中心', comp: lazy(() => import('./demos/combo/settings.vue')) },
  { key: 'combo-dashboard', chapter: '组合场景', label: '数据看板', comp: lazy(() => import('./demos/combo/dashboard.vue')) },
  { key: 'combo-message-center', chapter: '组合场景', label: '消息中心', comp: lazy(() => import('./demos/combo/message-center.vue')) },
  { key: 'combo-wizard', chapter: '组合场景', label: '向导流程', comp: lazy(() => import('./demos/combo/wizard.vue')) },
  { key: 'combo-file-manager', chapter: '组合场景', label: '文件管理', comp: lazy(() => import('./demos/combo/file-manager.vue')) },
  { key: 'combo-app-layout', chapter: '组合场景', label: '主布局', comp: lazy(() => import('./demos/combo/app-layout.vue')) },
  { key: 'combo-help-center', chapter: '组合场景', label: '帮助中心', comp: lazy(() => import('./demos/combo/help-center.vue')) },
]

export const groups = [
  { title: '基础用法', items: basic },
  { title: '复合用法', items: combo },
]

export const allItems = [...basic, ...combo]
