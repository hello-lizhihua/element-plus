// 生成 packages/styles/components/*.css(每组件一个文件)。
// 规则:边框恒为 1px,容器圆角恒为 4px,色彩只用主色/次要色(由 skins 调色板承担)。
import { writeFileSync, mkdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const dir = join(dirname(fileURLToPath(import.meta.url)), '..', 'components')
mkdirSync(dir, { recursive: true })

const files = {
  'base.css': `/* 基础结构层:全局圆角与边框口径(所有组件继承)。 */
:root {
  --el-border-radius-base: 4px;
  --el-border-radius-small: 4px;
  --el-border-radius-round: 4px;
  --el-font-family: 'PingFang SC', 'Helvetica Neue', 'Microsoft YaHei', 'Source Han Sans SC',
    system-ui, -apple-system, sans-serif;
  --el-box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  --el-box-shadow-light: 0 2px 8px rgba(0, 0, 0, 0.06);
  --el-box-shadow-lighter: 0 1px 4px rgba(0, 0, 0, 0.05);
  --el-box-shadow-dark: 0 8px 24px rgba(0, 0, 0, 0.16);
  --el-border-width: 1px;
}
`,
  'button.css': `.el-button {
  border-width: 1px;
  border-radius: 4px;
  font-weight: 500;
}
.el-button.is-round,
.el-button.is-circle {
  border-radius: 4px;
}
`,
  'input.css': `.el-input__wrapper {
  border-radius: 4px;
  box-shadow: 0 0 0 1px var(--el-input-border-color) inset;
}
.el-input__wrapper.is-focus {
  box-shadow: 0 0 0 1px var(--el-color-primary) inset;
}
.el-textarea__inner {
  border-radius: 4px;
  border-width: 1px;
}
.el-input-group__prepend,
.el-input-group__append {
  padding: 0 12px;
}
`,
  'select.css': `.el-select__wrapper {
  border-radius: 4px;
  box-shadow: 0 0 0 1px var(--el-border-color) inset;
}
.el-select__wrapper.is-focused {
  box-shadow: 0 0 0 1px var(--el-color-primary) inset;
}
.el-select-dropdown {
  border-radius: 4px;
  border: 1px solid var(--el-border-color-light);
}
.el-select-dropdown__item.is-selected {
  color: var(--el-color-primary);
  font-weight: 600;
}
`,
  'select-v2.css': `.el-select-v2__wrapper {
  border-radius: 4px;
  box-shadow: 0 0 0 1px var(--el-border-color) inset;
}
.el-select-dropdown {
  border-radius: 4px;
}
`,
  'input-number.css': `.el-input-number {
  border-radius: 4px;
}
.el-input-number__decrease,
.el-input-number__increase {
  border: 1px solid var(--el-border-color-light);
}
`,
  'input-tag.css': `.el-input-tag {
  border-radius: 4px;
  box-shadow: 0 0 0 1px var(--el-border-color) inset;
}
.el-input-tag__item {
  border-radius: 4px;
}
`,
  'input-otp.css': `.el-input-otp__item {
  border-radius: 4px;
  border: 1px solid var(--el-border-color);
}
`,
  'radio.css': `.el-radio__inner {
  border: 1px solid var(--el-border-color);
  border-radius: 4px;
}
.el-radio-button__inner {
  border: 1px solid var(--el-border-color);
  border-radius: 0;
}
.el-radio-button:first-child .el-radio-button__inner {
  border-radius: 4px 0 0 4px;
}
.el-radio-button:last-child .el-radio-button__inner {
  border-radius: 0 4px 4px 0;
}
`,
  'checkbox.css': `.el-checkbox__inner {
  border: 1px solid var(--el-border-color);
  border-radius: 4px;
}
.el-checkbox-button__inner {
  border-width: 1px;
  border-radius: 0;
}
.el-checkbox-button:first-child .el-checkbox-button__inner {
  border-radius: 4px 0 0 4px;
}
.el-checkbox-button:last-child .el-checkbox-button__inner {
  border-radius: 0 4px 4px 0;
}
`,
  'switch.css': `.el-switch,
.el-switch__core {
  border-radius: 999px;
  border-width: 1px;
}
`,
  'slider.css': `.el-slider__runway,
.el-slider__bar {
  border-radius: 4px;
}
.el-slider__button {
  border: 1px solid var(--el-color-primary);
  border-radius: 4px;
}
`,
  'date-picker.css': `.el-date-editor.el-input__wrapper,
.el-range-editor.el-input__wrapper {
  border-radius: 4px;
  box-shadow: 0 0 0 1px var(--el-border-color) inset;
}
.el-picker-panel {
  border-radius: 4px;
  border: 1px solid var(--el-border-color-light);
}
.el-date-table td.today .el-date-table-cell__text {
  color: var(--el-color-primary);
}
`,
  'date-picker-panel.css': `.el-date-picker-panel {
  border-radius: 4px;
  border: 1px solid var(--el-border-color-light);
}
`,
  'datetime-picker.css': `.el-date-editor.el-input__wrapper {
  border-radius: 4px;
  box-shadow: 0 0 0 1px var(--el-border-color) inset;
}
`,
  'time-picker.css': `.el-time-panel {
  border-radius: 4px;
  border: 1px solid var(--el-border-color-light);
}
`,
  'time-select.css': `.el-time-select__item {
  border-radius: 4px;
}
.el-time-select__item.selected {
  color: var(--el-color-primary);
  font-weight: 600;
}
`,
  'color-picker.css': `.el-color-picker__trigger {
  border: 1px solid var(--el-border-color);
  border-radius: 4px;
}
.el-color-dropdown {
  border-radius: 4px;
}
`,
  'color-picker-panel.css': `.el-color-picker-panel {
  border-radius: 4px;
  border: 1px solid var(--el-border-color-light);
}
`,
  'cascader.css': `.el-cascader__dropdown {
  border-radius: 4px;
  border: 1px solid var(--el-border-color-light);
}
.el-cascader-node.is-active {
  color: var(--el-color-primary);
  font-weight: 600;
}
.el-cascader__search-input {
  border-radius: 4px;
}
`,
  'autocomplete.css': `.el-autocomplete__popper {
  border-radius: 4px;
}
`,
  'mention.css': `.el-mention__popper {
  border-radius: 4px;
}
`,
  'transfer.css': `.el-transfer-panel {
  border: 1px solid var(--el-border-color-lighter);
  border-radius: 4px;
}
.el-transfer-panel__header {
  padding: 8px 12px;
}
.el-transfer-panel__body {
  padding: 12px;
}
.el-transfer-panel__filter {
  padding: 15px;
}
.el-transfer__button {
  border-radius: 4px;
}
`,
  'tree-select.css': `.el-tree-select__popper {
  border-radius: 4px;
}
`,
  'form.css': `.el-form-item__error {
  font-size: 12px;
}
.el-form--inline .el-form-item {
  margin-right: 14px;
}
`,
  'upload.css': `.el-upload {
  border-radius: 4px;
}
.el-upload--picture-card {
  border: 1px dashed var(--el-border-color);
  border-radius: 4px;
}
.el-upload-dragger {
  border: 1px dashed var(--el-border-color);
  border-radius: 4px;
}
.el-upload-list--picture-card .el-upload-list__item {
  border: 1px solid var(--el-border-color);
  border-radius: 4px;
}
`,
  'rate.css': `.el-rate__icon {
  font-size: 18px;
}
`,
  'table.css': `.el-table {
  --el-table-border-color: var(--el-border-color-lighter);
  font-size: 13px;
}
.el-table--border {
  border: 1px solid var(--el-table-border-color);
}
.el-table--border .el-table__cell {
  border-right: 1px solid var(--el-table-border-color);
  border-bottom: 1px solid var(--el-table-border-color);
}
.el-table th.el-table__cell {
  font-weight: 600;
}
`,
  'table-v2.css': `.el-table-v2 {
  --el-table-border-color: var(--el-border-color-lighter);
  font-size: 13px;
}
.el-table-v2__header-cell {
  border: 1px solid var(--el-table-border-color);
}
`,
  'tag.css': `.el-tag {
  border-width: 1px;
  border-radius: 4px;
}
`,
  'avatar.css': `.el-avatar {
  border-radius: 4px;
  --el-avatar-bg-color: var(--el-fill-color-darker);
}
.el-avatar--circle {
  border-radius: 50%;
}
`,
  'badge.css': `.el-badge__content {
  border-radius: 4px;
  border: 1px solid var(--el-bg-color);
}
.el-badge__content--dot {
  border-radius: 50%;
}
`,
  'card.css': `.el-card {
  --el-card-border-radius: 4px;
  --el-card-padding: 12px;
  border: 1px solid var(--el-border-color-lighter);
  box-shadow: none;
}
.el-card__header {
  padding: 8px 12px;
}
.el-card__body {
  padding: 12px;
}
.el-card.is-always-shadow {
  box-shadow: var(--el-box-shadow-light);
}
`,
  'carousel.css': `.el-carousel__item {
  border-radius: 4px;
}
.el-carousel__indicator.is-active button {
  background: var(--el-color-primary);
}
`,
  'collapse.css': `.el-collapse {
  border-width: 1px;
}
.el-collapse-item__header {
  border-bottom: 1px solid var(--el-border-color-lighter);
}
.el-collapse-item__wrap {
  border-bottom: 1px solid var(--el-border-color-lighter);
}
.el-collapse-item__content {
  padding-bottom: 12px;
}
`,
  'descriptions.css': `.el-descriptions__body {
  background: var(--el-bg-color);
}
.el-descriptions__cell {
  border: 1px solid var(--el-border-color-lighter);
}
`,
  'image.css': `.el-image {
  border-radius: 4px;
}
`,
  'progress.css': `.el-progress-bar__outer,
.el-progress-bar__inner {
  border-radius: 4px;
}
.el-progress-bar__inner {
  background: var(--el-color-primary);
}
.el-progress__text {
  font-size: 12px;
}
`,
  'result.css': `.el-result {
  padding: 16px 12px;
}
`,
  'skeleton.css': `.el-skeleton__item {
  border-radius: 4px;
}
.el-skeleton__circle {
  border-radius: 50%;
}
`,
  'statistic.css': `.el-statistic__head {
  font-size: 12px;
  color: var(--el-text-color-secondary);
}
.el-statistic__number {
  font-weight: 600;
}
`,
  'timeline.css': `.el-timeline-item__wrapper {
  border-left: 1px solid var(--el-border-color-lighter);
}
.el-timeline-item__node {
  border-radius: 50%;
}
`,
  'calendar.css': `.el-calendar {
  border: 1px solid var(--el-border-color-lighter);
  border-radius: 4px;
}
.el-calendar__body {
  padding: 12px;
}
.el-calendar-table td.is-selected {
  background: var(--el-color-primary-light-9);
}
`,
  'watermark.css': `.el-watermark {
  display: block;
}
`,
  'empty.css': `.el-empty__image {
  width: 128px;
}
`,
  'alert.css': `.el-alert {
  border-radius: 4px;
  border: 1px solid var(--el-border-color-lighter);
  background: var(--el-fill-color-light);
}
.el-alert .el-alert__title {
  color: var(--el-text-color-primary);
}
`,
  'dialog.css': `.el-dialog {
  --el-dialog-padding-primary: 12px;
  border-radius: 4px;
  border: 1px solid var(--el-border-color-lighter);
  box-shadow: var(--el-box-shadow-dark);
}
`,
  'drawer.css': `.el-drawer {
  --el-drawer-padding-primary: 12px;
  box-shadow: var(--el-box-shadow-dark);
}
.el-drawer__header {
  margin-bottom: 12px;
}
`,
  'message.css': `.el-message {
  border-radius: 4px;
  border: 1px solid var(--el-border-color-lighter);
  background: var(--el-bg-color-overlay);
}
`,
  'message-box.css': `.el-message-box {
  padding: 12px 16px;
  border-radius: 4px;
  border: 1px solid var(--el-border-color-lighter);
}
`,
  'notification.css': `.el-notification {
  padding: 12px 16px;
  border-radius: 4px;
  border: 1px solid var(--el-border-color-lighter);
}
`,
  'popover.css': `.el-popover.el-popper {
  border-radius: 4px;
  border: 1px solid var(--el-border-color-lighter);
}
`,
  'tooltip.css': `.el-popper.is-dark {
  border-radius: 4px;
}
.el-popper.is-light {
  border-radius: 4px;
  border: 1px solid var(--el-border-color-lighter);
}
`,
  'popconfirm.css': `.el-popconfirm__main {
  font-size: 13px;
}
`,
  'affix.css': `.el-affix--fixed {
  position: fixed;
}
`,
  'anchor.css': `.el-anchor {
  --el-anchor-bg-color: transparent;
}
.el-anchor__link {
  border-left: 1px solid var(--el-border-color-lighter);
  max-width: 100%;
}
.el-anchor__link.is-active {
  color: var(--el-color-primary);
  border-left: 1px solid var(--el-color-primary);
}
`,
  'backtop.css': `.el-backtop {
  border-radius: 4px;
  box-shadow: var(--el-box-shadow-light);
  border: 1px solid var(--el-border-color-lighter);
}
`,
  'breadcrumb.css': `.el-breadcrumb__inner {
  font-weight: 400;
}
`,
  'dropdown.css': `.el-dropdown-menu {
  border-radius: 4px;
  border: 1px solid var(--el-border-color-lighter);
}
.el-dropdown-menu__item {
  border-radius: 4px;
}
`,
  'menu.css': `.el-menu {
  border-right: 1px solid var(--el-border-color-lighter);
}
.el-menu--horizontal {
  border-bottom: 1px solid var(--el-border-color-lighter);
}
.el-menu-item.is-active {
  color: var(--el-color-primary);
}
`,
  'page-header.css': `.el-page-header__back {
  border: none;
}
`,
  'steps.css': `.el-step__head.is-process .el-step__icon {
  border: 1px solid var(--el-color-primary);
}
.el-step__line {
  height: 1px;
  border: none;
  background: var(--el-border-color-lighter);
}
.el-step__icon {
  border-radius: 4px;
}
`,
  'tabs.css': `.el-tabs__active-bar {
  height: 1px;
}
.el-tabs__nav-wrap::after {
  height: 1px;
}
.el-tabs--card > .el-tabs__header .el-tabs__item {
  border: 1px solid var(--el-border-color-lighter);
  border-radius: 4px 4px 0 0;
}
.el-tabs--border-card {
  border: 1px solid var(--el-border-color-lighter);
  box-shadow: none;
}
`,
  'pagination.css': `.el-pagination {
  --el-pagination-border-radius: 4px;
}
.el-pagination.is-background .el-pager li,
.el-pagination.is-background .btn-prev,
.el-pagination.is-background .btn-next {
  border: 1px solid var(--el-border-color-lighter);
  border-radius: 4px;
  background: var(--el-bg-color);
}
`,
  'divider.css': `.el-divider--horizontal {
  border-top: 1px solid var(--el-border-color-lighter);
  height: 0;
}
.el-divider--vertical {
  border-left: 1px solid var(--el-border-color-lighter);
  width: 0;
}
`,
  'scrollbar.css': `.el-scrollbar__bar,
.el-scrollbar__thumb {
  border-radius: 4px;
}
`,
  'splitter.css': `.el-splitter-bar__dragger {
  border-radius: 4px;
  border: 1px solid var(--el-border-color-lighter);
}
`,
  'segmented.css': `.el-segmented {
  border-radius: 4px;
  --el-segmented-item-selected-bg-color: var(--el-color-primary);
  --el-segmented-item-selected-color: #fff;
}
.el-segmented__item {
  border-radius: 4px;
}
`,
  'loading.css': `.el-loading-mask {
  border-radius: 0;
}
`,
  'infinite-scroll.css': `/* 无限滚动为指令,无组件形态,文件保持口径完整。 */
`,
  'config-provider.css': `/* 全局配置为逻辑组件,无形态,文件保持口径完整。 */
`,
  'icon.css': `.el-icon {
  height: 1em;
  width: 1em;
  line-height: 1em;
}
`,
  'text.css': `.el-text {
  font-size: inherit;
}
`,
  'space.css': `.el-space {
  vertical-align: top;
}
`,
  'layout.css': `.el-header,
.el-footer,
.el-aside {
  flex-shrink: 0;
}
`,
  'container.css': `.el-container {
  min-height: 0;
}
`,
  'link.css': `.el-link {
  font-weight: 400;
}
.el-link.is-underline:hover::after {
  border-bottom: 1px solid currentColor;
}
`,
  'tour.css': `.el-tour {
  border-radius: 4px;
  border: 1px solid var(--el-border-color-lighter);
}
`,
}

let count = 0
for (const [name, body] of Object.entries(files)) {
  const label = name.replace('.css', '')
  writeFileSync(join(dir, name), `/* ${label} 组件样式重置:边框恒为 1px,容器圆角恒为 4px,色彩只用主色/次要色(见 skins)。 */\n${body}\n`)
  count += 1
}
console.log('生成组件样式文件:', count)
