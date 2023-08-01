/* main.ts */
import { createApp } from 'vue';
import App from './App.vue';
import '@dora-ui/theme-chalk/src/index.scss';

import DoraUI from '@dora-ui/components';

const app = createApp(App);

app.use(DoraUI);
app.mount('#app');
