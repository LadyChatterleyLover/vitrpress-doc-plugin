import DefaultTheme from "vitepress/theme"
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import "prismjs/themes/prism-funky.min.css"
// import "../styles/index.scss"
import "vitepress-doc-plugin/style.css"
import {Demo} from "vitepress-doc-plugin"
// import Demo from '../src/vp-demo.vue'

export default {
  ...DefaultTheme,
  enhanceApp: ({ app }) => {
    app.use(ElementPlus)
    app.component("Demo", Demo)
  },
}
