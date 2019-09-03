---
title: wepack学习
date: 2019-07-08 11:33:17
copyright: true
comments: true
post: true
tags: 
- webpack
---

# Webpack 学习

> 待完成，参考教程 https://www.bilibili.com/video/av58725971/?p=1

## 安装与基本命令

## 配置文件-入口-出口

## 加载器 url-loader

## babel-loader

将 ES6 语法转换成 ES5 语法

同时，安装 jsx 支持 react

- react

[@babel/plugin-transform-react-jsx](https://www.npmjs.com/package/@babel/plugin-transform-react-jsx)

安装：`npm install @babel/plugin-transform-react-jsx`

- npm init -y
- npm install xxx-loader -S 表示安装的同时写入 package.json 文件中

需要先安装 react : `npm install react -S` 

同时需要安装 react-dom：`npm install react-dom -S`

两者通常为配合使用

第一个坑！！—— 运行 webpack 后，报错

```bash
ERROR in ./src/react.jsx 7:3
Module parse failed: Unexpected token (7:3)
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
       render(){
              return (
                       <div>
                        <h2>hello, react!</h2>
                       </div>
```

需要更改下 package.config.js 中的扩展名，识别 `js` 和 `jsx` 。

```json
// 修改前
{
     test: /\.m?js$/,   // 修改这里
}

// 修改后
{
     test: /\.(m?js|jsx)$/,   // 修改这里
}
     
//完整代码：
{
    test: /\.(m?js|jsx)$/,
    exclude: /(node_modules|bower_components)/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-object-rest-spread','@babel/plugin-transform-react-jsx']
                 }
        }
}
```

修改之后，我们再次运行： webpack，即可获得正确效果



## sass-loader

- [sass-loader 文档](https://webpack.docschina.org/loaders/sass-loader/#src/components/Sidebar/Sidebar.jsx)
- 安装： `npm install sass-loader node-sass webpack --save-dev` 

> [webpack](https://github.com/webpack) 是 sass-loader 的 [`peerDependency`](https://docs.npmjs.com/files/package.json#peerdependencies)， 并且还需要你预先安装 [Node Sass](https://github.com/sass/node-sass) 或 [Dart Sass](https://github.com/sass/dart-sass)。 这可以控制所有依赖的版本， 并选择要使用的 Sass 实现

copy 配置代码：

```json
// webpack.config.js
module.exports = {
    ...
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                "style-loader", // 将 JS 字符串生成为 style 节点
                "css-loader", // 将 CSS 转化成 CommonJS 模块
                "sass-loader" // 将 Sass 编译成 CSS，默认使用 Node Sass
            ]
        }]
    }
};
```

此时，我们需要安装另外两个 loader  `npm install style-loader css-loader -D`



## 插件 minCssExtract

前面，我们使用 sass-loader ，将 scss 文件编译成 css 打包到 js 文件中，这样是不好的，容易导致 js 文件中出现很多 css 代码，不便于将来 debug，甚至，不是很规范。

我们想要的是：

- js 和 js 文件合并在一起
- css 和 css 文件合并在一起

此时，使用 minCssExtract 可以将 scss 文件转成 css 文件，然后将 css 输出到其他文件中

步骤：

- 文档 [MiniCssExtractPlugin](https://webpack.docschina.org/plugins/mini-css-extract-plugin/#src/components/Sidebar/Sidebar.jsx)
- 安装 `npm install --save-dev mini-css-extract-plugin` 
- 引入 `const MiniCssExtractPlugin = require("mini-css-extract-plugin");` 
- 拷贝以下文件：

```json
module.exports = {
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
}
```

此时，我们需要对前面 sass-loader 中的 rules 改变一下，参考 [sass-loader 文档](https://webpack.docschina.org/loaders/sass-loader/#src/components/Sidebar/Sidebar.jsx) ，而不是 minCssExtractPlugin 文档！！！

```json
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    ...
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                // fallback to style-loader in development
                process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                "css-loader",
                "sass-loader"
            ]
        }]
    }
    ...
};
```

因为我们在开发中，通常都是在一种模式（开发模式）下进行的，所以我们修改为：

```json
 module: {
        rules: [{
            test: /\.scss$/,
            use: [
                // 删掉冒号前面部分
               MiniCssExtractPlugin.loader,
                "css-loader",
                "sass-loader"
            ]
        }]
    }
```

此时，运行 webpack 即可



## DefinePlugin

使用场景：

在不同模式下，前后端分离的时候，不同模式（生产环境和开发环境）下前端向后端请求的路径是不同的，虽然我们可以使用简单的 if...else... 来根据不同的模式请求不同的路径，但是代码太过丑陋以及不便于维护。

使用 DefinePlugin 后，在配置文件中定义一个路径，当请求路径变更的时候，只需要修改配置文件即可

- [DefinePlugin](https://webpack.docschina.org/plugins/define-plugin/#src/components/Sidebar/Sidebar.jsx)
- 使用：

```js
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new webpack.DefinePlugin({
      'SERVICE_URL': JSON.stringify('http://sina.com') // 将配置拷贝至此处
    });
  ],
```

那么，我们怎么使用它呢？

直接用！

在 index.js 文件中：

```js
async function sayHello() {
  const result = await fetch(SERVICE_URL) // 此处直接使用
  console.log(result)
}
sayHello()
```

当生产环境或者开发环境发生变更后，index.js 文件中的 `SERVICE_URL` 不需要改变，只需要 改变配置文件即可

遇到问题：

```js
ReferenceError: webpack is not defined
```

解决办法：在配置文件中加入

```js
const webpack = require("webpack")
```



## HtmlPlugin

应用场景：

使用 webpack 编译 index.js 文件，因为是js 文件，不能直接显示。需要一个 html 文件，引用生成的 js 文件作为显示。

- 文档： [HtmlPlugin](https://webpack.docschina.org/plugins/html-webpack-plugin/#src/components/Sidebar/Sidebar.jsx)

- 安装：`npm install --save-dev html-webpack-plugin` 

- 使用： 

  - 引入： `var HtmlWebpackPlugin = require('html-webpack-plugin');` 
  - 创建对象：

  ```js
  var HtmlWebpackPlugin = require('html-webpack-plugin');
  var path = require('path');
  
  module.exports = {
    entry: 'index.js',
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'index_bundle.js'
    },
    plugins: [new HtmlWebpackPlugin()] // 此处创建对象
  };
  ```

以上，就可以直接运行 webpack ，然后在 dist 目录下即可看到 index.html 文件了，里面引用了生成的 js 文件。

新的需求：

- 在项目中如果要使用到 jQuery，以及自定义 html 文件中的 title，或者是引用自己写的一些 js，如何做？

看文档： [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)

在 new 的时候可以做如下配置项：

```js
{
  entry: 'index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'index_bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My App',
      filename: 'assets/admin.html'
    })
  ]
}
```

接着，我们对自己的文件进行自定义更改：

```js
new HtmlWebpackPlugin({
       title: 'good morning',
       filename: 'index.html',
       template: 'template.html' // 需要自己定义 template.html
    })
```

在 template.html  文件中引用自定义 title 等设置，方法如下：

- 更换 title

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8"/>
    <title> <%= htmlWebpackPlugin.options.title %> </title>
  </head>
  <body>
  </body>
</html>
```

此 template 文件中的 title 会被替换为 "good morning"

- 更换 jQuery

```js
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8"/>
    <title> <%= htmlWebpackPlugin.options.title %> </title>
  </head>
  <body>
  </body>
</html>
```

出现bug ，没有报错，但是没有实现视频老师演示的效果

https://www.bilibili.com/video/av58725971/?p=9



## 热更新

前面，我们每一次安装新的 loader 或者更改配置的时候，都需要重新 webpack 编译，那么，可不可以有什么方式可以监听配置的变化自动编译呢？

文档：

- [webpack-dev-server](https://webpack.js.org/configuration/dev-server/)
- [webpack-dev-server-github](https://github.com/webpack/webpack-dev-server)

修改 webpack.config.js 文件

```js
var path = require('path');

module.exports = {
  //...
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080
  }
};
```

修改 package.json

```js
"scripts": {
  "start": "webpack-dev-server"
}
```

输入命令  `npm run dev` 即可

- 添加 热替换

```js
module.exports = {
  //...
  devServer: {
    hot: false
  }
};
```

这里有一个坑！当状态为 false 表示 可以热替换，实际上，我们可以不需要写这个 option 依然可以支持热替换



## webpack 实战

使用 vue-cli 生成一个 webpack 项目（此 webpack 不是最新版），将该 webpack 升级成为最新版

更多学习，参考 https://www.bilibili.com/video/av58725971/?p=11





遇到报错和解决办法：

配置 React 环境的时候：

```js
Plugin/Preset files are not allowed to export objects, only functions.
```

解决办法：

```js
Are you stil gettnig the same error?
Is your .babelrc like this:

{
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react"
    ]
}
My OS is Windows 10, so maybe is this problem?

Babel should work on any OS that supports node.
```





参考文档：https://juejin.im/post/5b3daf2ee51d451962727fbe