import DefaultTheme from 'vitepress/theme'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'prismjs/themes/prism-funky.min.css'
import 'vitepress-doc-plugin/style.css'
import { Demo } from 'vitepress-doc-plugin'
import Api from '../src/vp-api.vue'
import DevUI from 'vue-devui'
import 'vue-devui/style.css'

export default {
  ...DefaultTheme,
  enhanceApp: ({ app }) => {
    app.use(ElementPlus)
    app.use(DevUI)
    app.component('Demo', Demo)
    app.component('Api', Api)
  },
}
