import type { App } from 'vue';
import * as components from './components';
import { version } from './package.json';

if (typeof window !== 'undefined') {
  import('./iconfont');
}
// import './iconfont';
const install = function (app: App): void {
  Object.entries(components).forEach(([key, value]) => {
    app.component(key, value);
  });
};

export default {
  install,
  version
};
