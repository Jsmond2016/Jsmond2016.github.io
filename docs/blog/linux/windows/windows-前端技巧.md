---
title: Windows 高效写前端技巧
date: 2018-03-28 22:57:32
copyright: true
comments: true
post: true
categories:
- windows
tags:
- windows
---


# c


## 1.在 .bashrc 引用 `z.sh` 库

- 下载 [z.sh](https://github.com/rupa/z)

> 注意 git 习惯：在下载自己的git项目时，使用 SSH，在下载别人的项目时，最好直接下载 或者是 使用 htps

- 配置到 `.bashrc`

  - 首先拷贝到 `z.sh` d 目录位置，假设为 `C:\Users\jin\z`
  - 打开 `.bashrc`，写入如下代码：

  ```bash
  . ~/z/z.sh  # 注意，这里开头的 点后面有一个空格，表示在打开 bash 的时候就开启了z.sh
  alias j='z'
  ```

  完成

## 2.在 .bashrc 设置 alias 

- alias  open='start'

`open file == start file`

- 在 bash 中输入命令时，如何改成其他命令

  - `Ctr + A` 快速回到开头位置
  - `Ctr + K` 删除改行内容

  ![1555569740248](https://i.loli.net/2019/04/18/5cb8264d309ec.png)

- glog

```bash
alias glog="git log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit -- | less"
```

-  所有 alias

```bash

. ~/GitHub/z/z.sh


export PYTHONIOENCODING=UTF-8
export LANG='en_US.UTF-8'
export LC_ALL='en_US.UTF-8'

alias j='z'
alias gst="git status -sb"
alias ga="git add"
alias gc="git commit -v"
alias gcc="git commit . -m update"
alias gp="git push"
alias gl="git pull"
alias open="start"
alias ll="ls -la"
alias start='explorer.exe'
alias glog="git log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit -- | less"

```



## 3.如何让 gitbash 外观更好看

> 字体已下载备份至文件夹 `H:\1.电脑常用软件安装\E：开发软件\1.前端软件开发\01 前端开发配置\` 便于下次在 windows 设置

- 下载所有字体 [SourceCodePro](https://github.com/powerline/fonts/tree/master/SourceCodePro) ，然后双击下载的字体进行安装，接着可以在 gitbash 中设置字体里进行选择
- 设置 gitbash 的宽度为 100 * 40
- 设置自己喜欢的主题



## 4.安装 Curl 和 Tree

### 安装 Curl

> 安装 curl 的前提是安装 scoop。

- 首先，参考 [scoop 官网](https://scoop.sh/) ,在 windows 的 powershell 中运行如下命令

```bash
iex (new-object net.webclient).downloadstring('https://get.scoop.sh')
```

安装过程可能会遇到问题：

- ` Set-ExecutionPolicy RemoteSigned -scope CurrentUser`
- 输入 Y
- `iex (new-object net.webclient).downloadstring('https://get.scoop.sh')`

![遇到问题](https://i.loli.net/2019/04/18/5cb82d208a5f8.png)

### 安装 Tree

- 下载 [GnuTree.exe](https://newcontinuum.dl.sourceforge.net/project/gnuwin32/tree/1.5.2.2/tree-1.5.2.2-setup.exe) 双击安装，一路下一步（注意安装路径里不要有空格，建议安装在 C:\Software\GnuWin32
- 将 C:\Software\GnuWin32\bin 添加到 PATH 里，添加方法如下：
  1. Git Bash 添加方法
     1. 运行 `touch ~/.bashrc; echo 'export PATH="$PATH:/c/Software/GnuWin32/bin/"' >> ~/.bashrc`
     2. 重启 Git Bash
  2. 图形界面添加方法（推荐使用上面一种方法）
     1. 在 Windows 的环境变量 PATH 里添加 C:\Software\GnuWin32\bin
     2. 如果不知道 Windows 怎么添加环境变量 PATH，百度『Windows 环境变量 PATH』即可
- 然后你就可以运行 tree 命令了

## 5.命令行快捷翻译

1. `npm i -g fanyi`
2. `echo "alias yd='fanyi'" >> ~/.bashrc`

如果提示 commond not found，就需要更新 PATH

```
export PATH="xxx:$PATH" 
```

其中 xxx 的示例为 `/c/Users/Fang/AppData/Roaming/npm`

参考如图：

![1555575095320](https://i.loli.net/2019/04/18/5cb8513c47c90.png)

如果出现乱码，就修改 gitbash 的编码格式，如还有问题，则继续尝试其他编码格式，知道没有问题为止

![1555574841180](https://i.loli.net/2019/04/18/5cb8515af19f3.png)



## 6.命令行中的快捷键

1. Ctrl + R 搜索历史，再次 Ctrl + R 切换

具体使用：

- 首先，按下 ctrl + r ，进入搜索模式，输入模糊的命令，此时 bash 中会提示相关的命令作为选择
- 如果没有自己想要的命令，则继续按下 ctrl + r，如果 bash 显示的是自己想要的命令，则按下 **左右键**，表示 **选中该提示命令，然后退出提示**，若果还是没有想要的命令，则继续按下 ctrl + r

2. Ctrl + A 行首
3. Ctrl + E 行尾 :end
4. Ctrl + B 退后 : back
5. Ctrl + F 前进 : front
6. Ctrl + W 删一个单词 : word
7. Ctrl + Kill 干掉这一行: kill
8. Ctrl + Cancel 中断
9. Ctrl + Go 退出搜索

更多快捷键技巧，请谷歌 [bash 快捷键](https://www.google.com/search?q=bash+%E5%BF%AB%E6%8D%B7%E9%94%AE&oq=bash+%E5%BF%AB%E6%8D%B7%E9%94%AE&aqs=chrome..69i57j0.6011j0j1&sourceid=chrome&ie=UTF-8) ，[让你提升命令行效率的 Bash 快捷键 [完整版]](https://linuxtoy.org/archives/bash-shortcuts.html)

## 7.快速复制粘贴

### 在 GitBash 中

1. 选中复制 或者 Ctrl+ Insert, 若是笔记本，没有 insert，需要按 Fn +Ctrl + Insert
2. 中键粘贴 或者 shift + Insert, 若是笔记本，没有 insert，需要按 Fn + Shift + Insert

### 在CMD中

1. 选中再回车复制
2. 右键粘贴

### 推荐的 windows 软件

1. [ClipboardFusion](https://www.clipboardfusion.com/Download/) 主要设置 【显示历史复制】为 Ctrl + Shift + V
2. Snipaste

## 8. ConEmu 的使用

> 有了 ConEmu 以后，就可以抛弃 gitbash 了

- 下载地址： [ConEmu download](<https://www.fosshub.com/ConEmu.html>)
- 选择版本： 第二个，最大的那个

![1555577506138](https://i.loli.net/2019/04/18/5cb851ced4c4b.png)

- 下载 [思源黑体](https://github.com/adobe-fonts/source-han-sans/releases/tag/2.001R)

- 自定义设置

- 设置字体

![1555580116134](https://i.loli.net/2019/04/18/5cb851f03202f.png)

- 打开设置： 右下角 右键

![1555583701387](https://i.loli.net/2019/04/18/5cb88a243c7f1.png)

- 一键呼起： F4

![1555583764178.png](https://i.loli.net/2019/04/18/5cb8531e39e91.png)

- 设置宽： 86%， 高： 95%
- 设置 标签栏

![1555580250697.png](https://i.loli.net/2019/04/18/5cb8578be8586.png)

- 设置 文本光标，【块状】，【水平】，【固定光标大小】

![1555580409416.png](https://i.loli.net/2019/04/18/5cb85399e0c44.png)

- 分屏 【快捷键设置】，分屏 【未选中颜色暗淡】

![1555581376444.png](https://i.loli.net/2019/04/18/5cb853cbb3073.png)

![1555581394698.png](https://i.loli.net/2019/04/18/5cb854184df69.png)

- 已经备份好上述配置文件 ：ConEmu.xml 至文件夹 `H:\1.电脑常用软件安装\E：开发软件\1.前端软件开发\01 前端开发配置\ConEmu配置` 

## 9. Ubuntu on  Windows

### 安装和配置 Ubuntu

首先，打开 windows Microsoft store，搜索 Ubuntu，选择安装即可

![1555586497719.png](https://i.loli.net/2019/04/18/5cb88721c626b.png)

- 遇到问题：报错信息代码： `0x8007019e`
- 解决办法：[大鱼叔叔|开发日志win10安装linux子系统报错0x8007019e解决办法](<https://dueros.baidu.com/forum/topic/show/263267>)
- 重启后打开 Ubuntu，设置账号密码后，即可使用
- 换源配置：[ubuntu on windows安装和配置](https://blog.csdn.net/qq_34914551/article/details/81630269)

### 文件操作：在 Ubuntu 上操作  Windows 文件

#### 方法一：

- 进入 windows 的 C 盘 :  ` cd /mnt/c`
- 设置一打开 Ubuntu 就进入 windows 的C 盘
  - 打开 `.bashrc` ，在第一行输入  `cd /mnt/c/Users/yourName` ，此时，每次打开 Ubuntu 就可以进入windows 的 C 盘了

#### 方法二：

**如何链接 windows 文件到 Ubuntu 上？**

- 进入 Ubuntu的时候还是在 Ubuntu 的 根目录中，这个时候我们想操作 Windows 的文件，怎么办？

  **把 windows 的文件 链接到 Ubuntu 中来**

- 使用命令 `ln -s /mnt/c/Users/yourName/file`

- 即可把 `file` 文件链接到 Ubuntu 当前目录下了

**那么，我想打开这个链接过来的 windows 文件，使用 `start file` 可以吗？**

不行！

必须使用 `explore.exe file` 才可以打开这个 windows 文件

为了操作方便，我们可以在 `.bashrc`  中使用 alias 写成 `alias start='explore.exe'`

###  使用快速搜索工具 fzf

> 只有在 Ubuntu 上才可以使用 fzf， windows 不行

- [fzf](https://github.com/junegunn/fzf) ，类似于 windows 上的 everything 工具，安装方式参照 github ，如下：

```bash
git clone --depth 1 https://github.com/junegunn/fzf.git ~/.fzf
~/.fzf/install
```

![1555591813464.png](https://i.loli.net/2019/04/18/5cb887462be00.png)

![1555591933987.png](https://i.loli.net/2019/04/18/5cb8875ed6fb2.png)

如何使用？

1. 安装完成以后，退出 Ubuntu再进来，或者是保存 `.bashrc` 文件：`source .bashrc`

2. 在某个目录下，输入：`fzf` ，它就会快速扫描该目录下所有文件，

3. 然后你再输入相关文件名的时候，就会快速帮你定位到该文件的位置

我们也可以自己设置一些骚操作

- 快速搜索目录：`fd directoryName` + 回车

- 快速搜索内容名: `fs contentName` + 回车  

  此处可能会提示安装 `sudo apt install silversearcher-ag` 

- 快速搜索名字为 "xxx" 的文件，并使用 vim 打开：`f fileName` + 回车

- 快速使用默认软件打开某个文件： `fo fileName` + 回车 

以上的实现，需要在bash中写一个脚本来实现：

在 `.bashrc` 里面写入以下内容，保存：

```bash
# 查找文件
f() {
  local file
  q=$1

  file=$( fzf --query="" --select-1 --exit-0 -x)
  if [ -n "$file" ] ;then
    vim "$file"
  fi
  echo "fzf: bye"
}

# 查找并 open 文件，如果你没有 open 请先 alias 一下 open
fo(){
  local file
  q=$1

  #file=$(ag -l -g ""| fzf --query="$q" --select-1 --exit-0 -x)
  file=$( fzf --query="" --select-1 --exit-0 -x)
  if [ -n "$file" ] ;then
    open "$file"
  fi
  echo "fzf: bye"
}
# 查找并打开文件所在目录
fd() {
  local file
  local dir
  file=$(fzf +m -q "$1") && dir=$(dirname "$file") && cd "$dir"
}

# 搜索文件内容并用vim打开对应行
fs(){
  local file
  q=$1
  if [ -z "$q"] ;then
    q="."
  fi
  result=$(ag "$q" | fzf)
  IFS=':' read file line other <<< "$result"
  [ -n "$file" ] && vim "$file" +"$line";
}
```

![1557498797990.png](https://i.loli.net/2019/05/10/5cd58bea71b74.png)

