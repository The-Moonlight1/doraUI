
import '@dora-ui/theme-chalk/src/index.scss'

import Theme from 'vitepress/theme'
import './style/var.css'

import DoraUI from '@dora-ui/components'
import Home from '../../page/Home.vue'

export default {
  ...Theme, // 默认主题
  enhanceApp({ app }) {
    app.use(DoraUI)
    app.component('Home',Home)
  },
}