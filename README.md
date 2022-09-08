# 基于vitePress的文档库例子
## 功能
- element-plus样式
- 页面上显示例子
- 可查看源码  
## 怎么写文档？
- `docs/.vitepress/config.ts` 配置Nav和Sidebar
- 引入例子组建 如 `import basic from './basic.vue'`
- `:::demo [路径]`上编写组件路径如`:::demo button/basic`
- `:::demo [实例] :::` 包裹实例 如：`<basic></basic>`


### 完整例子如下
```
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
```

## 友情链接
- [配置Nav](https://vitepress.vuejs.org/guide/theme-nav)
- [配置Sidebar](https://vitepress.vuejs.org/guide/theme-sidebar)