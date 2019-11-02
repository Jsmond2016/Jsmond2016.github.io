# 其他

本专栏主要介绍放一些其他东西

- 工作相关
- 备忘或者记录



## 博客撰写和备份

博客搭建教程：

- [VuePress从零开始搭建自己专属博客](https://segmentfault.com/a/1190000015237352?utm_source=tag-newest)
- [利用vuePress搭建个人博客](https://juejin.im/post/5cc6b52ae51d456e537ef395)

### 前置知识

当前目录（根目录）：

```bash
.
├── docs # 每次写文章在这里面，有个 blog 文件夹
├── node_modules
├── package.json # 全局配置文件
├── README.md	# 说明文件
├── scripts	# 内含自动化部署的bash脚本，内容在 deploy-gh.sh 中
├── vuepress # duild 之后的文件在这里，也是传入 github master 分支的内容 
└── yarn.lock
```

docs 目录结构：

```bash
.         
├── about 
├── archiv
├── blog  # 内容在这里面写
├── friend
├── projec
├── README
├── share 
├── tags  
├── timeLi
└── views 
```

以 blog/git 文件夹为例：

```bash
git
├── advanced   # 分类文件夹 advanced
├── base # 分类文件夹 base
├── README.md  # git 模块默认显示的 reademe
└── sideBar.js # 路由文件，每次编写博客必须再此添加
```

- 每次写博客，首先在 docs/blog/xxx 文件夹内编写对应的 md 文件，然后在其对应的 `sideBar` 中添加文件名字和路由
- 编写完成博客，退回到根目录，执行

```bash
# 启动预览
yarn dev  
```

- 说明下

```bash
# 编译成对应的可预览页面，文件在 vuepress 中，localhost 跑起来可以看到效果
yarn build
```

实际上，yarn dev 的效果就是 在 vuepress 中本地跑的预览效果是一致的

- 博客编写完成，预览确认没有问题，此时，即可运行自动化部署脚本

  - 切换到 script 文件夹，执行

  ```bash
  sh deploy-gh.sh # 将 vuepress 文件夹的内容部署到 github pages 上，也就是 master 分支
  ```

  - 部署完成以后，回到根目录，此时，执行

  ```bash
  git add .
  git commit -m "update blog"
  git push origin gh-bak # 将文件推到 gh-bak 分支上
  ```

  此时，就结束了 **博客编写，部署，工作区备份** 三件事



### 如果在新电脑

在新电脑，就需要把所有博客文件 clone 到本地编辑

```bash
# clone 工作区分支
git clone -b gh-bak git@github.com:Jsmond2016/Jsmond2016.github.io.git 
```

然后，流程和上面一样