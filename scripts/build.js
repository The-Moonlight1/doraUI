/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const fs = require('fs-extra');
// 引入 vite 的 build 方法，进行编译构建
const { defineConfig, build } = require('vite');
const vue = require('@vitejs/plugin-vue');
const version = require('../package.json').version;

// 基础配置
const baseConfig = defineConfig({
  publicDir: false,
  plugins: [vue()]
});
const rollupOptions = defineConfig({
  // that shouldn't be bundled
  external: ['vue'],
  globals: {
    vue: 'Vue'
  }
});
// 组件库全局入口
const compontsDir = path.resolve(__dirname, '../packages/components');
// 输出目录
const outputDir = path.resolve(__dirname, '../build');
// 生成 package.json
const createPackageJson = name => {
  const fileStr = `{
    "name": "${name ? name : 'dora-ui'}",
    "version": "${version}",
    "description": "Vue3组件库",
    "main": "${name ? 'index.umd.js' : 'dora-ui.umd.js'}",
    "module":"${name ? 'index.mjs' : 'dora-ui.mjs'}",
    "repository": {
      "type": "git",
      "url": "git@github.com:The-Moonlight1/doraUI.git"
    },
    "keywords": ["vue3", "组件库", "UI"],
    "author": "yangaoqi",
    "license": "ISC"
  }
  `;
  // 单个组件 or 全量
  const filePath = path.resolve(outputDir, name ? `${name}/package.json` : `package.json`);

  fs.outputFile(filePath, fileStr, 'utf-8');
};

/** 单组件按需构建 */
const buildSingle = async name => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        lib: {
          entry: path.resolve(compontsDir, name),
          name: 'index',
          fileName: 'index',
          formats: ['es', 'umd']
        },
        rollupOptions,
        outDir: path.resolve(outputDir, name)
      }
    })
  );

  createPackageJson(name);
};

/** 全量构建 */
const buildAll = async () => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        lib: {
          entry: compontsDir,
          name: 'dora-ui',
          fileName: 'dora-ui',
          formats: ['es', 'umd']
        },
        rollupOptions,
        outDir: outputDir
      }
    })
  );

  createPackageJson();
};

const buildLib = async () => {
  await buildAll();

  // 按需打包
  fs.readdirSync(compontsDir)
    .filter(name => {
      // 获取组件的目录
      const componentDir = path.resolve(compontsDir, name);
      const isDir = fs.lstatSync(componentDir).isDirectory();
      return isDir && fs.readdirSync(componentDir).includes('index.ts');
    })
    .forEach(async name => {
      await buildSingle(name);
    });
};

buildLib();
