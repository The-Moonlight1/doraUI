import { ElementPlusContainer } from '@vitepress-demo-preview/component';
import '@vitepress-demo-preview/component/dist/style.css';

import '@dora-ui/theme-chalk/src/index.scss';

import Theme from 'vitepress/theme';
import './style/index.css';

import DoraUI from '@dora-ui/components';
import entity from '../../components/icon/entity.vue';
import wireframe from '../../components/icon/wireframe.vue';
export default {
  ...Theme, // 默认主题
  enhanceApp({ app }) {
    app.use(DoraUI);
    app.component('demo-preview', ElementPlusContainer);
    app.component('entity', entity);
    app.component('wireframe', wireframe);
  }
};
