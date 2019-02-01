

## 知识点

- Ecmascript 6
- 在线教育项目

## Ecmascript 6

- ECMAScript 6.0（以下简称ES6）是JavaScript语言的下一代标准，已经在2015年6月正式发布了。
- Ecmascript 是 JavaScript 语言的标注规范
- JavaScript 是 Ecmascript 规范的具体实现
  + 具体实现取决于各大浏览器厂商的支持进度
- Ecmascript 6 也被称作 Ecmascript 2015
- 各大浏览器厂商对于最新的 Ecmascript 6 标准支持可以参照：
  + http://kangax.github.io/compat-table/es6/
- 对于不支持 ES6 的环境，可以使用一些编译转码工具做转换处理再使用
  + 例如 babel

### let 和 const

let：

- let 类似于 var，用来声明变量
- 通过 let 声明的变量不同于 var，只在 let 命令所在的代码块内有效（块级作用域）
- let 声明的变量不存在变量提升
- let不允许在相同作用域内，重复声明同一个变量

const：

- const声明一个只读的常量。一旦声明，常量的值就不能改变
- const 声明必须初始化
- const的作用域与let命令相同：只在声明所在的块级作用域内有效
- const命令声明的常量也是不提升，必须先声明后使用
- const声明的常量，也与let一样不可重复声明

### 解构赋值

ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。

数组解构：

```js
let [a, b, c] = [123, 456, 789]
console.log(a, b, c) 123 456 789
```

对象解构：

```js
let { name, age } = { name: 'Jack', age: 18 }
console.log(name, age) Jack 18
```

函数参数解构：

```js
function f (p1, { p2 = 'aa', p3 = 'bb' }) {
  console.log(p1, p2, p3)
}

f('p1', { p2: 'p2' }) p1 p2 bb
```

字符串解构：

```js
let [a, b, c, d, e] = 'hello'
console.log(a, b, c, d, e) h e l l o
```

### 字符串

实用方法：

```js
includes(String)：返回布尔值，表示是否找到了参数字符串。
startsWith(String)：返回布尔值，表示参数字符串是否在源字符串的头部。
endsWith(String)：返回布尔值，表示参数字符串是否在源字符串的尾部。
repeat(Number)：repeat方法需要指定一个数值，然后返回一个新字符串，表示将原字符串重复Number次。
```

模板字符串：

```js
let basket = { count: 5, onSale: true }
$('#result').append(`
  There are <b>${basket.count}</b> items
   in your basket, <em>${basket.onSale}</em>
  are on sale!
`);
```

- 模板字符串（template string）是增强版的字符串，用反引号（`）标识
- 它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量
- 如果使用模板字符串表示多行字符串，所有的空格和缩进都会被保留在输出之中
- 模板字符串中嵌入变量，需要将变量名写在 `${}` 之中
  + 大括号内部可以放入任意的JavaScript表达式，可以进行运算，以及引用对象属性
  + 大括号内部还可以调用函数


### 数组

方法：

```js
Array.from() 将一个伪数组转为一个真正的数组
              实际应用中，常见的类似数组的对象是DOM操作返回的NodeList集合，
              以及函数内部的arguments对象。Array.from都可以将它们转为真正的数组。
Array.of() Array.of方法用于将一组值，转换为数组
           这个方法的主要目的，是弥补数组构造函数Array()的不足。
           因为参数个数的不同，会导致Array()的行为有差异。
find() 查找数组中某个元素
findIndex() 查找数组中某个元素的索引下标
includes() 返回一个布尔值，表示某个数组是否包含给定的值，与字符串的includes方法类似
```

实例方法：

ES6提供三个新的方法——entries()，keys()和values()——用于遍历数组.
可以用 `for...of` 循环进行遍历，唯一的区别是 `keys()` 是对键名的遍历、
`values()` 是对键值的遍历，`entries()` 是对键值对的遍历。

```js
entries() 
keys()
values()
```

### 函数的扩展

函数参数的默认值：

```js
ES6 允许为函数的参数设置默认值，即直接写在参数定义的后面。

function log(x, y = 'World') {
  console.log(x, y);
}

log('Hello') Hello World
log('Hello', 'China') Hello China
log('Hello', '') Hello
```

- 通常情况下，定义了默认值的参数，应该是函数的尾参数
  + 因为这样比较容易看出来，到底省略了哪些参数
  + 如果非尾部的参数设置默认值，实际上这个参数是没法省略的。
- 指定了默认值以后，函数的length属性，将返回没有指定默认值的参数个数
  + 也就是说，指定了默认值后，length属性将失真

rest 参数：

```js
function add(...values) {
  let sum = 0;

  for (var val of values) {
    sum += val;
  }

  return sum;
}

add(2, 5, 3) 10
```

扩展运算符：

```js
console.log(...[1, 2, 3]) 1 2 3
console.log(1, ...[2, 3, 4], 5) 1 2 3 4 5
```

箭头函数：

```js
var f = v => v

上面的箭头函数等同于：

var f = function(v) {
  return v
}
```

- 箭头函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象
- 箭头函数不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误
- 箭头函数内部不可以使用arguments对象，该对象在函数体内不存在
  + 如果要用，可以用Rest参数代替


### 对象

属性的简洁表示法：

```js
var foo = 'bar';
var baz = {foo};
baz {foo: "bar"}

等同于
var baz = {foo: foo}

除了属性简写，方法也可以简写:
var o = {
  method() {
    return "Hello!"
  }
}

等同于

var o = {
  method: function() {
    return "Hello!"
  }
}
```

### babel

详细配置使用方式请见：http://es6.ruanyifeng.com/#docs/intro#Babel转码器

---

## 在线教育项目

### npm scripts

请参考：[阮一峰 - npm scripts 使用指南](http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html)

---

## 目标

1. 能掌握 let 和 const 的用法并解释它们的作用
2. 能掌握解构赋值的基本使用（数组、对象、函数参数）
3. 能掌握模板字符串的基本使用
4. 能掌握数组中扩展的新方法（Array.from()、Array.of()、find、findIndex、includes）
5. 能掌握ES6中函数的一些特性使用方法（参数默认值、rest参数、扩展运算符、箭头函数）
6. 能掌握ES6中模块化的基本用法（import、export、export default）
7. 能掌握 babel 的基本使用（配置完成对在线教育项目中由开发环境代码到生产环境代码的转换）



## 复习

- Ecmascript 6 + Babel
- npm scripts
- Express

### Babel Register

第一：在项目根目录下创建一个 `.babelrc` 文件，写入以下内容：

```json
{
  "presets": [
  ]
}
```

第二：安装对应的转码规则：

```bash
# ES2015转码规则
$ npm install --save-dev babel-preset-es2015

# react转码规则
$ npm install --save-dev babel-preset-react

# ES7不同阶段语法提案的转码规则（共有4个阶段），选装一个
$ npm install --save-dev babel-preset-stage-0
$ npm install --save-dev babel-preset-stage-1
$ npm install --save-dev babel-preset-stage-2
$ npm install --save-dev babel-preset-stage-3
```

第三：将 `.babelrc` 文件中修改为以下内容：

```json
{
  "presets": [
    "es2015"
  ]
}
```

第四步（从第四步开始，前三部必不可少）：

- babel-cli：命令行转码
- babel-node：babel-cli工具自带一个babel-node命令，提供一个支持ES6的REPL环境
- babel-register：实时转码，所以只适合在开发环境使用
- babel-core：如果某些代码需要调用Babel的API进行转码，就要使用babel-core模块

babel-cli：

一种使用方式就是全局安装：`npm install -g babel-cli`（可以通过 `npm root -g` 查看全局包安装目录），
只要全局安装了 `babel-cli`，则会在命令行中多出一个命令：`babel`。

这里如果使用全局安装的 `babel-cli` 进行转码是没有问题的，但是问题是如果一旦项目给了别人，
别人不知道你使用了这个转码工具，所以解决方式就是将 `babel-cli` 安装到本地项目中：

```bash
npm install --save-dev babel-cli
```

这种第三方命令行工具如果安装到本地项目，会在 `node_modules` 中生成一个目录：`.bin`，
然后第三方命令行工具会将对应的可执行文件放到该目录中。

这样的话，就可以直接在本地项目中使用该第三方命令行工具了。

对于如何使用，则可以通过配置 `package.json` 文件中的 `scripts` 字段来配置使用：

```json
{
  "name": "babel-demo",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "babel demo1.js"
  },
  "devDependencies": {
    "babel-cli": "^6.22.2",
    "babel-preset-es2015": "^6.22.0",
    "babel-preset-react": "^6.22.0"
  }
}
```

babel-register（适合开发阶段，实时编码转换）:

第一：安装 babel-register

```bash
npm install --save-dev babel-register
```

第二：添加一个傀儡文件(main.js)：

```js
require('babel-register')
require('你的核心功能代码入口文件模块')
```

第三：使用 node 执行 `main.js`，而不是你的入口文件.

### --save 和 --save-dev

通过 `--save` 参数安装的包，是将依赖项保存到 package.json 文件中的 dependencies 选项中。
通过 `--save-dev` 参数安装的包，是将依赖项保存到 package.json 文件中的 devDependencies 选项中。

无论是 `--save` 或者 `--save-dev` 安装的包，通过执行 `npm install` 都会将对应的依赖包安装进来。

但是，在开发阶段会有一些仅仅用来辅助开发的一些第三方包或是工具，然后最终上线运行（到了生产环境），
这些开发依赖项就不再需要了，就可以通过 `npm install --production` 命令仅仅安装 `dependencies` 中的
依赖项。

---

## Express

### hello world

### 基本路由

根据不同的请求路径分发到具体的请求处理函数

### 处理静态资源

### 模板引擎

### 中间件

### Express API

- express()
- Application
- Request
- Response
- Router

---

## 知识点

- Nunjucks 模板引擎
- Mongoose ORM 对象模型映射

## 在线教育项目

### 使用 Nunjucks 模板引擎抽取模板页

### 广告管理

### 路由设计

| 请求方法 |   请求路径  | 查询字符串 |                                请求体                                | 路径参数 |        作用        |
|----------|-------------|------------|----------------------------------------------------------------------|----------|--------------------|
| GET      | /advert     |            |                                                                      |          | 渲染广告管理列表页 |
| GET      | /advert/add |            |                                                                      |          | 渲染添加广告页面   |
| POST     | /advert/add |            | image、link、start_time、end_time、title、create_time、last_modified |          | 处理添加广告请求   |
|          |             |            |                                                                      |          |                    |

## 晚自习补课

- jsonp
- nvm
- nrm
- Yarn

### jsonp

### nvm

Node Version Management

- nvm list 查看所有已安装的 node 版本
- nvm install 版本号 安装指定版本的 node
- nvm use 版本号 切换到指定版本号
- nvm proxy 代理地址 配置代理进行下载

### nrm（node registry manager）

使用淘宝的 cnpm 镜像源下载：

```
npm install --save express --registry=https://registry.npm.taobao.org
```

第一：

```
npm install -g nrm
```

基本使用：

```

```


### Yarn

Yarn 是一个 Facebook 开源的一个类似于 npm 的一个包管理工具，也就是 npm 能做的，
yarn 也能做。

安装：

```bash
npm install -g yarn
```

使用：

```bash
# npm init
yarn init

# npm install --save 包名
yarn add 包名

# 离线安装
yarn add 包名@版本号 --offline

# npm install
yarn install

# npm uninstall 包名
yarn remove 包名

# npm install -g 包名
yarn global add 包名

# npm uninstall -g 包名
yarn global remove 包名
```


## 目标

1. 能掌握理解 Express 中间件执行机制并举例
2. 能掌握利用 Express 中间件处理网站 404
3. 能掌握 Express 中间件统一处理全局错误
4. 能掌握 Nunjucks 模板引擎的基本使用（布局功能）
5. 能掌握利用 Express 中间件解析表单 POST 请求体



## 知识点

- MongoDB
- Mongoose
- 广告管理

## MongoDB

### 存储结构

- 一个计算机上可以有一个数据库服务实例
- 一个数据服务实例上可以有多个数据库
- 一个数据库中可以有多个集合
  + 集合根据数据的业务类型划分
  + 例如用户数据、商品信息数据、广告信息数据。。。
  + 对数据进行分门别类的存储
  + 集合在 MongoDB 中就类似于数组
- 一个集合中可以有多个文档
  + 文档在 MongoDB 中就是一个 类似于 JSON 的数据对象
  + 文档对象是动态的，可以随意的生成
  + 为了便于管理，最好一个集合中存储的数据一定要保持文档结构的统一（数据完整性）


```json
{
  collection1: [
    { a: { age: 18, name: '', lsit: [], is: true } },
    { 文档2 },
    { 文档3 }
  ],

  collection2: [

  ],

  collection3: [

  ],

  collection4: [

  ],
}
```

## Mongoose

- http://mongoosejs.com/

安装：

```bash
# npm install --save mongoose
yarn add mongoose
```





