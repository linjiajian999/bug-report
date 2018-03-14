// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    'space-before-function-paren': 'off',
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    //  ignore the next line
    'eslint-disable-next-line': 0,
    'no-multi-spaces': [2, {
      "ignoreEOLComments": true,
      'exceptions': {
        'Property': true,           // 允许对象属性 ‘:’ 后有多个空格
        'VariableDeclarator': true, // 允许 ’=‘ 后有多个空格
        'ImportDeclaration': true   // 允许 from 前有多个空格
      }
    }]
  }
}
