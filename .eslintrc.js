module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: "eslint:recommended",
  // extends: "./src/test/.eslintrc.js",
  // extends: [
  //   // "eslint:recommended"
  //   // "standard"
  // ],
  globals: {
    document: true,
    window: true,
    $: true,
    process: true,
    __dirname: true
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      legacyDecorators: true,
      jsx: true
    },
    sourceType: "module",
    ecmaVersion: 7
  },
  plugins: ["react"],
  rules: {
    "constructor-super": 2,
    "no-case-declarations": 2,
    "no-class-assign": 2,
    "no-compare-neg-zero": 2,
    "no-cond-assign": 2,
    "no-console": 1,
    "no-const-assign": 2,
    "no-constant-condition": 2,
    "no-control-regex": 2,
    // "no-debugger": 2,
    "no-delete-var": 2,
    "no-dupe-args": 2,
    "no-dupe-class-members": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-empty-character-class": 2,
    "no-empty-pattern": 2,
    "no-empty": 2,
    "no-ex-assign": 2,
    "no-extra-boolean-cast": 2,
    "no-extra-semi": 2,
    "no-fallthrough": 2,
    "no-func-assign": 2,
    "no-global-assign": 2,
    "no-inner-declarations": 2,
    "no-invalid-regexp": 2,
    "no-irregular-whitespace": 2,
    "no-mixed-spaces-and-tabs": 2,
    "no-new-symbol": 2,
    "no-obj-calls": 2,
    "no-octal": 2,
    "no-redeclare": 2,
    "no-regex-spaces": 2,
    "no-self-assign": 2,
    "no-sparse-arrays": 2,
    "no-this-before-super": 2,
    "no-undef": 2,
    "no-unexpected-multiline": 2,
    "no-unreachable": 2,
    "no-unsafe-finally": 2,
    "no-unsafe-negation": 2,
    "no-unused-labels": 2,
    "no-unused-vars": 1,
    "no-useless-escape": 2,
    "require-yield": 2,
    "use-isnan": 2,
    "valid-typeof": 2,
    "no-use-before-define": 2,
    "quotes": [ 1, "double" ],
    // "no-useless-return": "error",
    "jsx-quotes": [2, "prefer-double"], //强制在JSX属性（jsx-quotes）中一致使用双引号
    "react/display-name": 0, //防止在React组件定义中丢失displayName
    "react/forbid-prop-types": [2, { "forbid": ["any"] }], //禁止某些propTypes
    "react/jsx-boolean-value": 2, //在JSX中强制布尔属性符号
    "react/jsx-closing-bracket-location": 1, //在JSX中验证右括号位置
    "react/jsx-curly-spacing": [2, { "when": "never", "children": true }], //在JSX属性和表达式中加强或禁止大括号内的空格。
    "react/jsx-indent-props": [2, 2], //验证JSX中的props缩进
    "react/jsx-key": 2, //在数组或迭代器中验证JSX具有key属性
    "react/jsx-max-props-per-line": [1, { "maximum": 1 }], // 限制JSX中单行上的props的最大数量
    "react/jsx-no-bind": 0, //JSX中不允许使用箭头函数和bind
    "react/jsx-no-duplicate-props": 2, //防止在JSX中重复的props
    "react/jsx-no-literals": 0, //防止使用未包装的JSX字符串
    "react/jsx-no-undef": 1, //在JSX中禁止未声明的变量
    "react/jsx-pascal-case": 0, //为用户定义的JSX组件强制使用PascalCase
    "react/jsx-sort-props": 0, //强化props按字母排序
    "react/jsx-uses-react": 1, //防止反应被错误地标记为未使用
    "react/jsx-uses-vars": 2, //防止在JSX中使用的变量被错误地标记为未使用
    "react/no-danger": 0, //防止使用危险的JSX属性
    "react/no-did-mount-set-state": 0, //防止在componentDidMount中使用setState
    "react/no-did-update-set-state": 1, //防止在componentDidUpdate中使用setState
    "react/no-direct-mutation-state": 2, //防止this.state的直接变异
    "react/no-multi-comp": 2, //防止每个文件有多个组件定义
    "react/no-set-state": 0, //防止使用setState
    "react/no-unknown-property": 2, //防止使用未知的DOM属性
    "react/prefer-es6-class": 2, //为React组件强制执行ES5或ES6类
    "react/prop-types": 0, //防止在React组件定义中丢失props验证
    "react/react-in-jsx-scope": 2, //使用JSX时防止丢失React
    "react/self-closing-comp": 1, //防止没有children的组件的额外结束标签
    "react/sort-comp": 1, //强制组件方法顺序
    "no-extra-boolean-cast": 0, //禁止不必要的bool转换
    "react/no-array-index-key": 1, //防止在数组中遍历中使用数组key做索引
    "react/no-deprecated": 1, //不使用弃用的方法
    "react/jsx-equals-spacing": 2, //在JSX属性中强制或禁止等号周围的空格
    "no-unreachable": 1, //不能有无法执行的代码
    "comma-dangle": 1, //对象字面量项尾不能有逗号
    "no-mixed-spaces-and-tabs": 0, //禁止混用tab和空格
    "prefer-arrow-callback": 0, //比较喜欢箭头回调
    "arrow-parens": 0, //箭头函数用小括号括起来
    "arrow-spacing": 0, //=>的前/后括号
    "no-useless-constructor": 1, //空的构造函数
    "no-inner-declarations": 1,//禁止在嵌套的块中出现变量声明或 function 声明
    "array-callback-return": 1,//强制数组方法的回调函数中有 return 语句
    "default-case": 2,//强制case必须有default
    "no-case-declarations": 1,//不允许在 case 子句中使用词法声明
    "no-else-return": 1,//禁止 if 语句中 return 语句之后有 else 块
    "no-magic-numbers": 0,//禁用魔术数字
    "no-return-assign": 1,//禁止在return下面使用赋值
    "require-await": 1,//禁止使用不带 await 表达式的 async 函数
    "max-params":[1,4], //最大4个参数
    "prefer-template":1, //使用es6的魔伴
  }
};
