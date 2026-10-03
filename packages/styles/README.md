# @ep-skin/styles

Element Plus 适配皮肤样式包：**两色体系 + 全组件结构重置**。

## 两条铁律（所有组件强制）

1. **边框恒为 1px**——禁止出现任何粗于 1px 的边框线。
2. **容器圆角恒为 4px**——禁止非 4px 的 border-radius（圆形语义元素除外：头像圆形、开关、滑块按钮、时间线节点、徽章圆点）。

## 两色体系（配套声明）

皮肤只保留**主色（primary）**与**次要色（secondary）**两种颜色，禁止 success / warning / danger / info 等语义色值。Element Plus 的全部功能色变量被强制映射：

| Element Plus 变量 | 映射到 |
| --- | --- |
| `--el-color-success` / `--el-color-danger` / `--el-color-error` | 主色及其梯度 |
| `--el-color-warning` / `--el-color-info` | 次要色及其梯度 |

所有梯度（light-3/5/7/8/9、dark-2）由 `color-mix()` 从主色 / 次要色实时派生，浅色向白混合、深色向暗底混合，无需手写色值。

## 皮肤

| 文件 | 说明 |
| --- | --- |
| `skins/white-light.css` | 淡雅白 · 浅（灰白基调） |
| `skins/white-dark.css` | 淡雅白 · 深 |
| `skins/pink-light.css` | 清新粉 · 浅（加深偏红的粉 `#e5486c`） |
| `skins/pink-dark.css` | 清新粉 · 深 |

## 用法

```js
// 全部引入(推荐,运行时以 html[data-skin] 与 .dark 切换)
import '@ep-skin/styles/skins/white-light.css'
import '@ep-skin/styles/skins/white-dark.css'
import '@ep-skin/styles/skins/pink-light.css'
import '@ep-skin/styles/skins/pink-dark.css'
import '@ep-skin/styles/components/index.css'
```

`components/` 下每个组件一个 css 文件（button.css、input.css、table.css……共 78 个），是唯一的样式源，直接手改即生效；只做该组件的结构重置（1px 边框、4px 圆角、内距紧凑化），色彩一律引用皮肤变量，组件文件内不出现具体色值。
