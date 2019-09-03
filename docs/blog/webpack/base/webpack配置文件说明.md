---
title: webpack配置文件说明
date: 2018-04-28 23:53:25
tags: 
- webpack
- webpack配置文件
---

> 官网教程 [Webpack](https://www.webpackjs.com/concepts/)

## `npm run dev` 究竟做了什么？

首先，我们找到  `webpack` 的配置文件，即根目录下面的 `package.json` 文件，我们找到 `scripts` 这个位置，内容如下：

```json
"scripts": {
    "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
    "start": "npm run dev",
    "lint": "eslint --ext .js,.vue src",
    "build": "node build/build.js"
  }
```

当执行 `npm run dev`  的时候，实际执行了 `webpack-dev-server` ，然后我们进入目录 `build >> webpack-dev-server` 文件，找到其 `bin` 目录，看看它做了什么，以及又依赖了什么？

## 入口和出口

在 `build >> webpack.base.conf.js` 文件中，我们可以看到

```js
module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
```

- 入口为 ` app: './src/main.js'` 
- 出口为 ` path: config.build.assetsRoot` ，而我们在 `config >> index.js` 文件中我们可以看到

```js
 // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
```

`assetsRoot: path.resolve(__dirname, '../dist')` 在编译打包文件的时候，会在当前目录的上一级目录(根目录)中生成一个名字为 `dist` 的目录，此目录内的文件是可以完美在浏览器跑起来的。 

## Loader

Loader 实际上是在文件编译中所依赖的一些配置文件，比如，我们在写项目过程中使用的是 `ES6` 语法，但是考虑到浏览器兼容性的问题不能在所有浏览器中跑起来，所以使用 `Babel.js` 来将 `ES6` 代码转换为 `ES5` ，从而所有的浏览器都能够很好的支持我们的代码。

同理，为了高效，我们使用了 `SCSS` ，使用了 `ESLint.js` 进行语法检查，以及兼容性问题，自动将给一些特殊的 `CSS` 代码添加前缀，这些都是需要用到一些工具插件，这些都集成了在 `NPM` 包中，直接安装即可。

相关的 Loader 举例如下：

- `post-scss.js`  将 `SCSS` 代码转换为 `CSS ` 代码
- `ESLint.js`  限制 `JS` 书写规范
- `Babel.js` 将 `ES6` 代码转换成 `ES5` 

更多用法请看 [Webpack-Loader](https://www.webpackjs.com/concepts/loaders/)



## `webpack.base.conf.js` 文件

这里需要说明的一个，是 `url-loader`，对于图片，视频，以及字体素材，他们的 `Loader` 是如何工作的呢？我们来看下对应的 `Loader`

在 `build >> webpack.base.conf.js` 文件中

```js
    {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
```

我们分析，它们的一个共同特征： `utils.assetsPath` ，这个是啥东西呢？有啥作用？

在 `build >> utils.js` 文件中，我们看到：

```js
exports.assetsPath = function (_path) {
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory

  return path.posix.join(assetsSubDirectory, _path)
}
```

如果是不是生产环境下的情况， `utils.assetsPath` 结果为  `config.dev.assetsSubDirectory` ，然后我们在 `config >> index.js` 文件中找到如下：

```js
 build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/'
    }
```

此时，基本上就知道答案了，它得到的就是一个路径 `static` ，上面的方法绕老绕去**就是字符串拼接成一个路径，最终生成的就是一个形如 `img/[name].[hash:7].[ext]` 的字符串**，就是素材路径。需要解释的是，`[hash:7].[ext]` 

- `[hash:7]` 长度为 7 的哈希串
- `[ext]` 文件后缀名

所以，上面的 几个 `Loader` 就是将图片素材加工一下放到了合适的地方，能够被正确使用，对于视频素材和 字体素材，依然是同样的原理。

其实，从下面的代码可知，**上面的 `loader` 都是对 `Vue` 文件内的 `CSS` 使用了 `loader`**

`webpack.base.conf.js` 文件

```
  {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
```

参数 ` options: vueLoaderConfig` 为  `build >> vue-loader.js` 文件中的这些代码：

```js
module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: sourceMapEnabled,
    extract: isProduction
  }),
  cssSourceMap: sourceMapEnabled,
  cacheBusting: config.dev.cacheBusting,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}

```

然而 `utils.cssLoaders` 在文件 `build >> utils.js` 文件中可知，其中的 `cssLoaders` 里面的 `sourceMap` 中含有的 `Loader `就是上面我们说过的所有 `Loader` ，即，他们都被应用在了 `Vue` 文件中。

但是，我们知道，在开发过程中我们不仅仅会在 `Vue` 文件中使用 `Loader` 来处理 `CSS`，依然会使用其他的或者从外部引入 `CSS` 样式来使用，那么，此时的 `CSS`  又是谁来处理呢？

答案是 ： `webpack.dev.conf.js` 



## `webpack.dev.conf.js` 文件

**上面，基本就是描述了 `build >> webpack.base.conf.js`  文件的作用**，接下来，我们继续说说 `build >> webpack.dev.conf.js` 文件

首先，通过以下代码我们可以知道，在编译过程中，通过`merge` 方法， `webpack.base.conf.js` 和 `webpack.dev.conf.js` 会合并共同作用在所有的文件上

```js
const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  }
}
```

同时，我们可以看到 ，这里出现了一个 `utils.styleLoaders` ，参数为 一个对象，其中含有 `sourceMap` 和 `usePostCSS` ，我们看看它做了什么

我们找到 `build >> utils.js` 文件

```js
// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  const output = []
  const loaders = exports.cssLoaders(options)

  for (const extension in loaders) {
    const loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }

  return output
}
```

其实，上面传进来的那个对象，就是各种 `Loader` ，最后传入 `cssLoaders` 共同作用在所有文件中

此外，我们继续来看看 `webpack.dev.conf.js` 这个 文件还做了什么

- `devServer` 模块热替换，具体细节可以看文档 [webpack-dev-server](https://www.webpackjs.com/concepts/hot-module-replacement/)

它主要有几个作用：

（1） 在开发过程中实时更新代码（或者说使用各种`Loader`实时转换成可以使用的代码）

（2）把所有的代码都作用在 `index.html` 文件中，从而我们可以在浏览器中实时预览。

（3） 当然，它还会开启一个 `node server` ，从而我们可以在 `http://localhost:8080` 预览啦。

- `plugins` 各种插件

  ```js
  plugins: [
      new webpack.DefinePlugin({
        'process.env': require('../config/dev.env')
      }),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
      new webpack.NoEmitOnErrorsPlugin(),
      // https://github.com/ampedandwired/html-webpack-plugin
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',
        inject: true
      }),
      // copy custom static assets
      new CopyWebpackPlugin([
        {
          from: path.resolve(__dirname, '../static'),
          to: config.dev.assetsSubDirectory,
          ignore: ['.*']
        }
      ])
    ]
  ```

  - `webpack.HotModuleReplacementPlugin()`  热加载的插件
  - `NamedModulesPlugin()` 在热加载的时候显示错误文件夹的名字
  - `webpack.NoEmitOnErrorsPlugin()` 当编译出现错误时，跳过编译错误的代码
  - `HtmlWebpackPlugin` 
    -  `filename`：可以通过 `filename` 指定生成的文件的文件名
    -  `template`：指定我们要处理的模板
    -  `inject` :参数为`true`，表示在编译过程中，`css` 文件会自动插入到 `<head></head>`  标签中，`js` 文件会自动插入到 `<body></body>` 里面


 综上所述，我们在项目中使用 `webpack` 的时候，实际上是通过编译将编译好的文件暂存在内存中，展示在 `localhost:8080` 页面中。