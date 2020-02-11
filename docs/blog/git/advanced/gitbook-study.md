# gitbook-study

之前，想将博客换成 gitbook 的模式来记录，然后遇到gitbook 的版本问题失败，后面好不容易解决了，决定记录一下。

## Gitbook 官网和文档

- 官网 [gitbook](https://www.gitbook.com/)
- 文档 [GitbookIO/gitbook](https://github.com/GitbookIO/gitbook)

## Gitbook 的下载和安装

- 安装 `gitbook-cli` 工具

```bash
npm install gitbook-cli -g
```

- 创建目录

```bash
mkdir gitbook-test && cd gitbook-test
```

- 初始化

```bash
gitbook init
```

- 开启本地服务预览书籍

```bash
gitbook serve
```

- 构建本地书籍文件

```bash
gitbook build
```

- 安装之前的 gitbook 版本

```bash
gitbook fetch beta
```

## 遇到问题

在执行 `git init` 时，遇到如下问题：

```js
Error loading version latest: Error: Cannot find module 'internal/util/types'

at Function.Module._resolveFilename (module.js:536:15)

at Function.Module._load (module.js:466:25)

at Module.require (module.js:579:17)

at require (internal/module.js:11:18)

at evalmachine.<anonymous>:31:26

at Object.<anonymous> (C:\Users\SunXG\.gitbook\versions\2.6.7\node_modules\graceful-fs\fs.js:11:1)

at Module._compile (module.js:635:30)

at Object.Module._extensions..js (module.js:646:10)
```

原因：参考 [gitbook build --gitbook=2.6.7 error?](https://www.zhihu.com/question/270284604)

>  graceful-fs引入了node模块internal/util/types，此模块用处是给vm引入内置js文件，具体作用不可知也不想去考究了，重点在于此法已被废除，只有低版本nodejs和npm可用。
>
> gitbook-cli默认的版本是2.6.9，最新的版本3.2.2，推测是旧版本没有使用最新版本的graceful-fs导致的问题

解决办法：

```bash
gitbook fetch 3.2.2
```



## Gitbook 常用命令

- 安装 gitbook 依赖 

```bash
gitbook install
```

- 开启 gitbook 服务

```bash
gitbook serve
```

- 打包 gitbook 项目

```bash
gitbook build
```

- gitbook 命令行查看

```bash
gitbook -help
```

- gitbook 版本查看

```bash
gitbook -V
```



## 安装插件

效果参考：[jsliang 的文档库](https://liangjunrong.github.io/)

在 文件的根目录中创建 `book.json` ，copy 以下内容

```json
{
  "title": "jsliang 的文档库",
  "author": "梁峻荣 - jsliang",
  "description": "jsliang 的文档库. 里面包含了个人撰写的所有前端文章，例如 Vue、React,、ECharts、微信小程序等……",
  "language": "zh-hans",
  "styles": {
    "website": "./public-repertory/css/gitbook-configure.css"
  },
  "plugins": [
    "theme-comscore",
    "prism",
    "-highlight",
    "copy-code-button",
    "search-pro",
    "-search",
    "-lunr",
    "expandable-chapters",
    "splitter",
    "-sharing",
    "github-buttons",
    "donate",
    "tbfed-pagefooter",
    "baidu-tongji",
    "anchor-navigation-ex"
  ],
  "pluginsConfig": {
    "github-buttons": {
      "buttons": [
        {
          "user": "LiangJunrong",
          "repo": "document-library", 
          "type": "star",
          "count": true,
          "size": "small"
        }, 
        {
          "user": "LiangJunrong",
          "width": "160", 
          "type": "follow", 
          "count": true,
          "size": "small"
        }
      ]
    },
    "donate": {
      "button": "打赏",
      "alipayText": "支付宝打赏",
      "wechatText": "微信打赏",
      "alipay": "https://github.com/LiangJunrong/document-library/blob/master/public-repertory/img/seek-reward.jpg?raw=true",
      "wechat": "https://github.com/LiangJunrong/document-library/blob/master/public-repertory/img/seek-reward.png?raw=true"
    },
    "prism": {
      "css": [
        "prismjs/themes/prism-solarizedlight.css"
      ],
      "lang": {
        "shell": "bash"
      }
    },
    "tbfed-pagefooter": {
      "copyright":"Copyright &copy jsliang.top 2019",
      "modify_label": "该文件修订时间：",
      "modify_format": "YYYY-MM-DD HH:mm:ss"
    },
    "baidu-tongji": {
      "token": "55e7dfe47f4dc1c018d4042fdfa62565"
    },
    "anchor-navigation-ex": {
      "showLevel": false
    }
  }
}

```

然后，执行：

```bash
gitbook install
```

然后，在浏览器打开预览：

```bash
gitbook serve
```

对于上述配置参数理解，参考博客 [GitBook - 快速打造可留言的博客](https://juejin.im/post/5ce51e126fb9a07ed440d7d0)



## 参考资料

- [Gitbook 入门教程](https://yuzeshan.gitbooks.io/gitbook-studying/content/index.html)
- [GitBook 使用教程](https://www.jianshu.com/p/421cc442f06c)
- [ GitBook 学习](http://gitbook.zhangjikai.com/commands.html)
- [gitbook问题解决](https://www.zhihu.com/question/270284604)
- [gitbook-getstart](https://github.com/GitbookIO/gitbook/blob/master/docs/setup.md)
- [GitBook - 快速打造可留言的博客](https://juejin.im/post/5ce51e126fb9a07ed440d7d0)