---
title: Hexo 更新博客多端同步问题
date: 2018-04-07 11:33:17
copyright: true
comments: true
post: true
tags: 
- hexo
- 多端同步
- hexo-输入密码
---

近期，想写写博客，但是我当前使用的是 Ubuntu 系统，而我最初配置 `hexo` 的时候是在 `windows` 上配置的（双系统）， 因此我每次更新博客的都要重启，进入 `win`，然后写好文章以后再上传到 `github` 上，非常麻烦 ，因此，猜想是否可以像管理`git`  仓库一样直接使用  `SSH` 进行多平台同步呢？

需求：

- `hexo` 如何实现多平台同步
- `hexo` 博客更新需要输入密码变更为使用 `SSH` 管理

遇到问题：

- `github` 灰色文件夹

### 正文：

首先,参照[教程](https://blog.csdn.net/Monkey_LZL/article/details/60870891) 操作。

#### 步骤一

因为我之前已经配置好了基本 的`hexo` 配置，所以我就直接从第2点开始

1. 在桌面新建一个 `hexo` 文件夹，将原来的配置文件夹 `yourname.github.io` 里面的内容（注意：不是从`github`上`clone` 下来的文件）全部拷贝至 `hexo` 文件夹下

2. 然后在  `hexo` 文件夹下按照教程执行如下命令

   ```
   git init  //初始化本地仓库
   git add source //将必要的文件依次添加，有些文件夹如npm install产生的node_modules由于路径过长不好处理，所以这里没有用`git add .`命令了，而是依次添加必要文件，如下图所示
   git commit -m "Blog Source Hexo"
   git branch hexo  //新建hexo分支
   git checkout hexo  //切换到hexo分支上
   git remote add origin git@github.com:yourname/yourname.github.io.git  //将本地与Github项目对接
   git push origin hexo  //push到Github项目的hexo分支上
   ```

3. 这个时候我们打开  `github` 就会发现在 `yourname.github.io` 仓库上就会多出一个 `hexo` 分支，同时刚才的所有配置文件都在这个分支上。

#### 步骤二

另一个终端完成 `clone` 和更新

```
git clone -b hexo git@github.com:yourname/yourname.github.io.git  //将Github中hexo分支clone到本地
cd  yourname.github.io  //切换到刚刚clone的文件夹内
npm install    //注意，这里一定要切换到刚刚clone的文件夹内执行，安装必要的所需组件，不用再init
hexo new post "new blog name"   //新建一个.md文件，并编辑完成自己的博客内容
git add source  //经测试每次只要更新sorcerer中的文件到Github中即可，因为只是新建了一篇新博客
git commit -m "XX"
git push origin hexo  //更新分支
hexo d -g   //push更新完分支之后将自己写的博客对接到自己搭的博客网站上，同时同步了Github中的master
```

注意：执行 `hexo new "xxx"` 命令要是提示没有  `hexo` 这个命令，需要全局安装`hexo`

`npm install -g hexo-cli` 

#### 步骤三

不同终端之间自由切换 

```
git pull origin hexo  //先pull完成本地与远端的融合
hexo new post " new blog name"
git add source
git commit -m "XX"
git push origin hexo
hexo d -g
```

#### 新平台日常使用命令

在上面三个步骤都完成以后，稳定在一个平台上就基本和正常的`git`仓库管理方式差不多了

1. `hexo new post " new blog name"`
2. `git add source`
3. `git commit -m "XX"`
4. `git push origin hexo`
5. `hexo d -g`

#### 遇到问题：github 灰色文件夹

按道理，完成上述操作就完成了多平台博客操作，但是还有个新问题，就是我 根目录下的 `themes` 里面的主题文件夹颜色是灰色的 ，看不到里面的文件

怎么办？

网上搜索关键词 【github 灰色文件夹】，得到答案是我里面的主题含有 `.git` 目录，即里面的主题是我从别的仓库拷贝下来的，也是一个仓库。即`git`仓库里面有其他其他的`git`仓库，因而引起了冲突。

解决办法：

删除主题文件夹里面的所有 `.git,.gitignore` 等目录，然后更改主题的名字和以前不一样（也有说法是删除 git 缓冲区的git仓库无需改名字，目的都一样的啦）

退到`hexo` 根目录，执行 

 `git  add .`

`git commit -m "xxx"`

`git push origin hexo`

然后就可以看到灰色文件夹变成了正常的文件夹了。 

#### 遇到问题二：无法实现使用 `SSH` 

在更新文章的时候，执行  `hexo d` 的时候，需要输入密码上传文件 ，我就很奇怪，我明明之前就配置好了  `SSH` ，为啥没有作用呢？

搜索资料得知，需要调整根目录下的 `.deploy` 文件的设置，但是我在根目录没有找到这个文件

后面再次查找资料发现，应该是我根目录的 `.config.yml` 文件的设置问题，仔细一看，果然：

原来的 `.deploy`

```js
deploy:
  type: git
  repo: https://jsmond2016@github.com/jsmond2016/jsmond2016.github.io.git
```

新的 `.deploy` 

```js
deploy:
  type: git
  repo: git@github.com:jsmond2016/jsmond2016.github.io.git
```

 此时，再次更新博客就不用输入密码啦！

搞定！！

### 原理

完成上述操作以后，我在思考，为什么新建一个分支用来存放配置文件以后就可以实现多平台同步文章呢？

在新建名字为 `yourname.github.io` 仓库目的是为了能够绑定域名，同时利用 `github pages` 功能实现预览

但是，配置 `Hexo` 的时候，`.gitignore` 会忽略一些文件，同时，使用 `hexo d` 命令只会在`yourname.github.io` 仓库中生成一些配置文件配合 `github pages` 预览使用，因此仓库 `yourname.github.io` 上的文件只是被处理以后的文件而不是原来配置的 `hexo` 文件

由此，新建一个分支（或者是新建一个仓库）来存放我们的配置文件，作为一个 `git` 仓库使用 `SSH` 来管理，从而实现多平台更新博客的目的。

-----

备注1：在使用过程中执行 `hexo d` 报错： `Error: Deployer not found：git` 

解决办法： `npm install --save hexo-deployer-git` 

备注2：在执行 `hexo g -d` 以后，页面无法显示，执行 `hexo s` 也是如此

解决办法： `sudo npm install`

参考资料： 

- [如何解决github+Hexo的博客多终端同步问题](https://blog.csdn.net/Monkey_LZL/article/details/60870891)
- [github 灰色文件夹-解决办法](https://blog.csdn.net/xiaozhuxmen/article/details/51536967)
- [ hexo和github page联合搭建博客过程中，github上出现灰色文件的问题](https://blog.csdn.net/sinat_27088253/article/details/54314742)
- [设置 SSH 使用 hexo deploy 时免输用户名密码](https://segmentfault.com/a/1190000005125610)

