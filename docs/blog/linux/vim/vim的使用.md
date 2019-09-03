---
title: vim 的使用
date: 2018-03-28 22:57:32
copyright: true
comments: true
post: true
categories:
- vim
tags:
- vim
---

# vim初学

- Windows 要安装 Git Bash

- Linux 无需安装

- macos 无需安装

  

## 需要记住的单词

- quit
- write  /  read
- yank  复制
- paste  粘贴   / p 粘贴在光标后 /  P 粘贴在光标前
- delete   /  delete in ()--di()   /  delete at () --da()  / db 向后删 / df 向前删
- change  /  change in ()--ci()   /  change at () --ca()  / cb 向后删 / cf 向前删
- find
- word
- forward / backward
- up  /  down
- insert / append
- do   /   undo  / redo
- replace

插入操作

1. insert
2. append
3. I
4. A

翻页操作

1. ctrl D 下翻半页
2. ctrl U 上翻半页

删除 delete 和修改 change 操作

- delete/change word
- delete/change in ()
- delete at ()
- delete in/at {}
- delete in tag
- change in tag

四种模式

1. insert 模式（编辑模式）
2. 普通模式（normal模式）
3. 冒号模式（命令模式）
4. v 模式（编辑选区模式）

复制粘贴

1. 到达你想复制的开头
2. 按v，到达你想复制的结尾
3. 按y复制
4. 按p或P粘贴

拷贝配置文件填充到 vim 配置文件中：

```
 curl https://gist.githubusercontent.com/FrankFang/3747651/raw/24762b0c62996a0fb6d9d8916abdc82afe8e557f/.vimrc > ~/.vimrc
```

其具体配置内容为：

```bash
nmap <F2> a<C-R>=strftime("%c")<CR><Esc>

"http://stackoverflow.com/questions/69998/tabs-and-spaces-in-vim
set tabstop=4
set shiftwidth=4
set expandtab

call pathogen#infect()
syntax on
filetype plugin indent on
set nu
let g:JSLintHighlightErrorLine = 0
" system clipboard  http://vim.wikia.com/wiki/Accessing_the_system_clipboard
"copy
vmap <F7> "+ygv"zy`>
"paste (Shift-F7 to paste after normal cursor, Ctrl-F7 to paste over visual selection)
nmap <F7> "zgP
nmap <S-F7> "zgp
imap <F7> <C-r><C-o>z
vmap <C-F7> "zp`]
cmap <F7> <C-r><C-o>z
"copy register

autocmd FocusGained * let @z=@+

" 备份文件路径   http://stackoverflow.com/questions/607435/why-does-vim-save-files-with-a-extension
set backupdir=F:/vimtmp
set directory=F:/vimtm


let g:NERDTreeHighlightCursorline = 0


au BufReadPost * if line("'\"") > 0|if line("'\"") <= line("$")|exe("norm '\"")|else|exe "norm $"|endif|endif



" http://vim.wikia.com/wiki/Switch_between_Vim_window_splits_easily 
map <C-J> <C-W>j<C-W>_
map <C-K> <C-W>k<C-W>_


" http://vim.wikia.com/wiki/Alternative_tab_navigation
" tab navigation like firefox
nmap th :tabfirst<CR>
nmap tj :tabnext<CR>
"map tk :tabprevious<CR>
nmap tl :tablast<CR>
nmap tk  <Esc>:tabprevious<CR>
"imap tj <Esc>:tabnext<CR>i
nmap <C-t> :tabnew<CR>
imap <C-t> <Esc>:tabnew<CR>
nmap ff :s/>\s*</>\r</g<CR>

```

在使用 vim 时候，报错信息

```bash
Error detected while processing /home/root2/.vimrc:
line    8:
E117: Unknown function: pathogen#infect
Press ENTER or type command to continue
```

解决办法：

- [Unknown function: pathogen#infect](https://stackoverflow.com/questions/30714757/unknown-function-pathogeninfect)
- [pathogen installation.](https://github.com/tpope/vim-pathogen#installation)
- 执行如下代码即可修复

```
mkdir -p ~/.vim/autoload ~/.vim/bundle && \
curl -LSso ~/.vim/autoload/pathogen.vim https://tpo.pe/pathogen.vim
```

此时上面问题解决，但是会有如下警告：

```bash
E303: Unable to open swap file for "xxx",recovery impossible
```

解决办法：

- [vim E303错误信息解决记录](https://blog.csdn.net/bytrustin/article/details/7053122)

博客上说的都是建立一个文件夹，如果没有解决就赋予这个文件夹管理员权限。

but why？我试了不行？？就因为我是使用了 ubuntu on windows 吗？

后面看了 `.vimrc` 终于有了答案

```bash
" 备份文件路径   http://stackoverflow.com/questions/607435/why-does-vim-save-files-with-a-extension
set backupdir=F:/vimtmp
set directory=F:/vimtm
```

原来是自己坑了自己，修改在 ubuntu 内的文件夹作为备份文件夹即可。

# 安装插件

> 可以参考[芳芳的配置文件](https://github.com/FrankFang/dot-files)

1. 安装 [vim-plug](https://github.com/junegunn/vim-plug)

```bash
curl -fLo ~/.vim/autoload/plug.vim --create-dirs \
    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
```

写入 `.vimrc` 为

```bash
call plug#begin('~/.vim/plugged')
" 这里写插件内容

call plug#end()
```

其他内容请看官网

1. 配置
2. 安装 [vim-emmet](https://github.com/mattn/emmet-vim)
3. 配置

```bash
" https://github.com/mattn/emmet-vim
Plug 'mattn/emmet-vim'
```

退出 `.vimrc` 后重进 / 使用 `source` 保存， 然后在 `.vimrc` 中打开，输入 `:PlugInstall`

安装完成后，参考 [芳芳的配置文件]()，重定义 emmet 的默认快捷键 `Ctrol + z + ,`，我们设置为 `Ctrol + y`

```
imap   <C-y>   <plug>(emmet-expand-abbr)
nmap   <C-y>   <plug>(emmet-expand-abbr)
vmap   <C-y>   <plug>(emmet-expand-abbr)
```

提示：不建议把快捷键设置为 `<tab>`

- 如何实现多行同时操作？  
- 答案：使用 `Ctrol + v` 进入编辑模式，然后修改完成后按下 `Esc`
- 如何使用 **宏** ？

给定场景：把下面的所有 `p1` 换成 `bob` ？

```js
function(p1){
    console.log(p1);
    p2 = p1 + frank;
    p3 = p1 + frank;
}
```

首先，按下 `Esc` 进入 `Normal` 模式，然后按下 `q` 进入宏编辑模式，按下一个字母（给当前宏取个名字）`a`

接着修改 `p1` 为 `bob` 修改完成后，按下 `Esc` 退出宏模式

在下面想要修改的位置，按下 `@a` 即可完成修改

或者按下快捷键 `.` ，达到同样的效果





更多资料，请看：

- [jaywcjlove/vim-web](https://github.com/jaywcjlove/vim-web)
- [vimawesome](https://vimawesome.com/)
- [打造前端开发的 Vim 环境](https://harttle.land/2015/11/22/vim-frontend.html)
- [面向web前端及node开发人员的vim配置](https://segmentfault.com/a/1190000016330814)
- [现在开始用vim开发Web前端吧](http://coderunthings.com/2015/12/09/frontendvim/)
- [ruanyl/bigvim](https://github.com/ruanyl/bigvim)
- [前端开发工程师的 Vim 跟 IDE 一样](https://juejin.im/entry/5878222661ff4b0065e447af)
- [我的VIM配置及说明【K-VIM】](http://www.wklken.me/posts/2013/06/11/linux-my-vim.html)