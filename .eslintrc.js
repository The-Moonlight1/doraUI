module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    // 开启setup语法糖环境
    'vue/setup-compiler-macros': true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-essential',
    'plugin:prettier/recommended'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}', '*.vue'],
      parserOptions: {
        sourceType: 'script'
      },
      rules: {
        'vue/multi-word-component-names': 'off',
        '@typescript-eslint/no-unused-vars': ['off'],
        'vue/no-setup-props-destructure': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/ban-types': 'off'
      }
    }
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'vue', 'prettier'],
  rules: {}
};
