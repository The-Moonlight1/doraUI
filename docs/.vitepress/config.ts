import { componentPreview, containerPreview } from '@vitepress-demo-preview/plugin';
const sidebar = [
  {
    text: '开始',
    items: [
      { text: '简介', link: '/guide/' },
      { text: '快速开始', link: '/guide/start' }
    ]
  },
  {
    text: '通用组件',
    items: [
      { text: 'Button 按钮', link: '/components/button/' },
      { text: 'Icon 图标', link: '/components/icon/' }
    ]
  },
  {
    text: '布局',
    items: [
      { text: 'Divider 分割线', link: '/components/divider/' },
      { text: 'Grid 栅格', link: '/components/grid/' },
      { text: 'Layout 布局', link: '/components/layout/' },
      { text: 'Space 间距', link: '/components/space/' }
    ]
  },
  {
    text: '数据展示',
    items: [{ text: 'Table 表格', link: '/components/table/' }]
  }
];
// const config = {
//   // 网站标题
//   title: "Dora UI",
//   themeConfig: {
//     // logo
//     logo: "/dora.jpeg",
//     // 系统标题
//     siteTitle: "Dora UI",
//     // 链接
//     socialLinks: [
//       { icon: 'github', link: 'https://github.com/The-Moonlight1/doraUI' },
//       {
//         icon: {
//           svg: '<svg t="1690377699706" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2378" width="200" height="200"><path d="M228.7 643.9c-0.1 0.1-0.2 0.3-0.3 0.4 3.9-4.4 8-9 12-13.5-7.5 8.4-11.7 13.1-11.7 13.1z" fill="#1590E9" p-id="2379"></path><path d="M894 298.1l25.6-15.1c10.4-6.1 9.1-21.5-2.1-25.9l-12.3-4.8c-18-7.1-34.2-18.2-46.7-33-15.7-18.5-44.7-45.1-90.9-60.8-52.7-18-142.9-14.4-193.2-10.5-15.9 1.2-25 18.4-17.4 32.5 42.6 78.6 16.7 114.3-5.7 140.7-34.3 40.4-97.4 112.2-160.7 183.6 21.9-24.5 41.8-46.8 58.1-65.1 36.4-40.8 91.3-61.5 145.1-51.7 171.5 31.3 191 253.4-9.2 385.6 26.1-1.4 52.6-3.3 79.2-6 252.6-26 272.6-232.1 218-333.9-19.4-36.1-22.2-60.5-20.1-83.9 2-21.5 13.8-40.8 32.3-51.7z" fill="#99C236" p-id="2380"></path><path d="M212.8 704.5C241.1 672.9 316 589 390.7 504.7c-54.6 61.2-121.8 136.7-177.9 199.8z" fill="#1590E9" p-id="2381"></path><path d="M216.3 758.6c-19.5-2.5-28.2-25.6-15.5-40.6-51.7 58.3-91.7 103.5-99.1 112.6-24.1 29.5 247.7 97.9 482.6-56.8 0.1-0.1 0.3-0.2 0.4-0.3-156.5 8.2-298.5-5.9-368.4-14.9z" fill="#CAC134" p-id="2382"></path><path d="M593.9 387.9c-53.8-9.8-108.7 10.9-145.1 51.7-16.3 18.2-36.2 40.5-58.1 65.1C316 589 241.1 672.9 212.8 704.5c-4.1 4.6-8.1 9.1-12 13.5-12.7 14.9-4 38 15.5 40.6 69.9 9 211.9 23.1 368.3 15 200.2-132.3 180.8-354.4 9.3-385.7z" fill="#029F40" p-id="2383"></path></svg>'
//         },
//         link: "https://www.yuque.com/yangaoqi"
//       }
//     ],
//     // 侧边栏
//     sidebar,
//     // 底部
//     footer: {
//       message: '其实我也不知道写啥注脚',
//       copyright: '那我就随便写个吧',
//     }
//   }
// }
// export default config

import { defineConfig } from 'vitepress';
export default defineConfig({
  title: 'Dora UI',
  lastUpdated: true,
  // github Pages 配置
  base: '/doraUI/',
  themeConfig: {
    // logo
    logo: '/dora.jpeg',
    // 系统标题
    siteTitle: 'Dora UI',
    // 链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/The-Moonlight1/doraUI' },
      {
        icon: {
          svg: '<svg t="1690377699706" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2378" width="200" height="200"><path d="M228.7 643.9c-0.1 0.1-0.2 0.3-0.3 0.4 3.9-4.4 8-9 12-13.5-7.5 8.4-11.7 13.1-11.7 13.1z" fill="#1590E9" p-id="2379"></path><path d="M894 298.1l25.6-15.1c10.4-6.1 9.1-21.5-2.1-25.9l-12.3-4.8c-18-7.1-34.2-18.2-46.7-33-15.7-18.5-44.7-45.1-90.9-60.8-52.7-18-142.9-14.4-193.2-10.5-15.9 1.2-25 18.4-17.4 32.5 42.6 78.6 16.7 114.3-5.7 140.7-34.3 40.4-97.4 112.2-160.7 183.6 21.9-24.5 41.8-46.8 58.1-65.1 36.4-40.8 91.3-61.5 145.1-51.7 171.5 31.3 191 253.4-9.2 385.6 26.1-1.4 52.6-3.3 79.2-6 252.6-26 272.6-232.1 218-333.9-19.4-36.1-22.2-60.5-20.1-83.9 2-21.5 13.8-40.8 32.3-51.7z" fill="#99C236" p-id="2380"></path><path d="M212.8 704.5C241.1 672.9 316 589 390.7 504.7c-54.6 61.2-121.8 136.7-177.9 199.8z" fill="#1590E9" p-id="2381"></path><path d="M216.3 758.6c-19.5-2.5-28.2-25.6-15.5-40.6-51.7 58.3-91.7 103.5-99.1 112.6-24.1 29.5 247.7 97.9 482.6-56.8 0.1-0.1 0.3-0.2 0.4-0.3-156.5 8.2-298.5-5.9-368.4-14.9z" fill="#CAC134" p-id="2382"></path><path d="M593.9 387.9c-53.8-9.8-108.7 10.9-145.1 51.7-16.3 18.2-36.2 40.5-58.1 65.1C316 589 241.1 672.9 212.8 704.5c-4.1 4.6-8.1 9.1-12 13.5-12.7 14.9-4 38 15.5 40.6 69.9 9 211.9 23.1 368.3 15 200.2-132.3 180.8-354.4 9.3-385.7z" fill="#029F40" p-id="2383"></path></svg>'
        },
        link: 'https://www.yuque.com/yangaoqi'
      }
    ],
    // 侧边栏
    sidebar,
    // 底部
    footer: {
      message: '其实我也不知道写啥注脚',
      copyright: '那我就随便写个吧'
    }
  },
  markdown: {
    config(md) {
      md.use(containerPreview);
      md.use(componentPreview);
    }
  }
});