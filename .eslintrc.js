module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
    'cypress/globals': true
  },
  plugins: [
    'cypress'
  ],
  extends: [
    //vue
    // 'plugin:vue/vue3-essential', // Lv1
    'plugin:vue/vue3-strongly-recommended', //Lv2
    // 'plugin:vue/vue3-recommended', //Lv3

    //js
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },

  // 추가적인 코드 규칙 설정
  rules: {
    'vue/html-self-closing': ['error', {
      html: {
        void: 'always',
        normal: 'never',
        component: 'always'
      },
      svg: 'always',
      math: 'always'
    }],
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'never'
    }]
  }
}