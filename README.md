<p align="center">
 <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.16pic.com%2F00%2F01%2F40%2F16pic_140904_b.jpg&refer=http%3A%2F%2Fpic1.16pic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1665233941&t=3f2a140f7f83e622b298cda0e0a3c1bf" height="150">
</p>

<h1 align="center">
 Vitepress Doc Plugin
</h1>
<p align="center">
快速搭建组件库文档示例
<p>

<p align="center">
  <a href="https://www.npmjs.com/package/vitepress-doc-plugin"><img src="https://img.shields.io/npm/v/vitepress-doc-plugin?color=729B1B&label="></a>
<p>

<h4 align="center">

</h4>

## 特性
- 开箱即用，无需配置
- 支持代码块展开与收起
- 支持复制代码
- 组件即示例，无需额外写示例代码
- 基于vitepress，速度更快

> vitepress版本需大于1.0

## 快速开始
``` js
// npm
npm i vitrepss-doc-plugin -S
// pnpm
pnpm i vitrepss-doc-plugin -S
```

``` js
// .vitepress/theme/index.js(ts)
import DefaultTheme from "vitepress/theme"
import "vitepress-doc-plugin/style.css"
import {Demo} from "vitepress-doc-plugin"

export default {
  ...DefaultTheme,
  enhanceApp: ({ app }) => {
    // 省略其他配置
    app.component("Demo", Demo)
  },
}
```

``` js
// .vitepress/config.js(ts)
import { markdownConfig } from "vitepress-doc-plugin"

export default {
  // 省略其他配置
  markdown: {
    config: markdownConfig,
  },
}
```

### 完整例子如下
``` vue
<script setup>
# 引入例子组件
import basic from './basic.vue';
</script>

# 按钮
## 基础用法
# button/basic是docs/component相对路径必填，否则查看不了源码
:::demo button/basic
# 组件例子显示，内部会以slot插入
<basic></basic>
::: 