module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    '@nuxtjs'
  ],
  // required to lint *.vue files
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  // add your custom rules here
  rules: {}
};
