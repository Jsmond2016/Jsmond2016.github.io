---
title: Linux 常用命令行
date: 2018-03-28 22:57:32
copyright: true
comments: true
post: true
categories:
- linux
tags:
- 命令行
---



1.进入目录
- cd  +空格+文件名
  例子：cd c/user/file        表示进入file文件夹

2.显示当前目录
- pwd 
  例子：cd c/user/file/pwd         表示显示file的路径 

3.创建新文件夹  
- mkdir  +空格+文件名
  例子：mkdir file          表示在当前路径下创建file
- mkdir -p +空格+目录路径
  例子：mkdir -p file/file2/file3       表示创建的file3在file/file2 的路径下

4.查看路径
- ls 显示文件或目录
  例子：>file>file2>file3 ls         表示显示file3文件或目录
- ls -a 列出当前目录下所有文件及目录，包括隐藏的a(all)
  例子：>file>file2>file3 ls -a       表示显示file3文件下的所有文件和目录
- ls -l 列出文件详细信息
  例子：>file>file2>file3 ls -l       表示显示file3文件下文件下的详细信息
- ls -al 列出所有文件及详细信息
  例子：>file>file2>file3 ls -al       表示显示file3文件下文件下的所有文件及详细信息

5.创建文件

- echo 内容>文件名       往文件内写入内容
  例子：echo file>1.txt       表示在1.txt文件中写入内容为 “file”

- echo 内容>!文件名       强制重定向，新内容覆盖原有内容（此命令在windows环境下不支持）
   例子：echo file2>！1.txt       表示对1.txt已存在内容覆盖为“file2”，原本内容“file”丢失

- echo 内容>>文件名        在文件内容末尾进行添加 
  例子：echo file2>>1.txt       此时文件1.txt内容为file和file2

6.创建文件(二)


- touch +空格+文件名        表示创建名字为“文件名”文件
  例子：touch file.txt       表示创建名字为“file”的文本文件

- touch +空格+文件名         表示改变文件“文件名”的更新时间
  例子：touch file.txt       表示更改文件“file.txt”的更新时间

7.复制文件

- cp +空格+原路径+空格+目标路径        表示复制某个文件到新的文件夹下（个人理解为单个复制某个文件）
  例子： cp c/file/1.txt  c/file2        表示将1.txt文件复制到c/file2文件夹内

- cp -r +空格+原路径+目标路径        表示复制整个目录到新的路径下（个人理解为复制整个文件夹到一个新的文件夹内,即复制目录）
  例子：cp -r A B         表示将整个A文件夹复制到B文件夹内。

8.移动文件(剪切)

- mv +空格+原路径+目标路径
  例子：mv A B        表示将整个A文件夹剪切到B文件夹内。

9. 删除文件
- rm +空格+文件路径    表示删除某路径下的文件
  例子：rm c/user/A         表示删除c/user/A文件

- rm -f +空格+文件路径    表示强制删除
  例子：rm -f c/user/B        表示强制删除文件B

- rm -r +空格+文件路径     表示删除目录
  例子：rm -r c/user/A        表示删除c/user/A  包括A内所有文件全部被删除

- rm -rf +目标路径     表示强制删除某个目录
  例子： rm -rf c/user/AA        表示强制删除c/user/AA这个目录

**切记**：永远不要运行 rm -rf /

10.常用小技巧

- cd -      表示回到刚才的目录
  上（键盘的“上”箭头指示键）      表示使用上一次命令

- ！！      表示使用上一次命令
- Alt+.      表示使用上一次的最后一个参数
- xxx;yyy      表示一句话执行两个命令（不论xxx命令是否执行，yyy命令都会执行）
- xxx&&yyy      表示一句话执行两个命令（只有xxx命令可执行，yyy命令才能够执行）

11.如何在命令里面打回车？
- \\+Enter

12.如何自学命令行
- man ls
- ls -help
- ls -h
- [ExplainShell.com](http://www.ExplainShell.com)

参考资料：
- [Linux 教程](http://www.runoob.com/linux/linux-tutorial.html)
- [Linux常用命令](http://c.biancheng.net/linux_tutorial/30/)
- [Linux常用命令](https://www.cnblogs.com/gaojun/p/3359355.html)
- [Linux常用命令大全（非常全！！！）](https://www.cnblogs.com/yjd_hycf_space/p/7730690.html)
