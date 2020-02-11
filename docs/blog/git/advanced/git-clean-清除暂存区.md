# git clean

作用：用来从你的工作目录中 **删除所有没有tracked** 过的文件

通常，git clean 和 git reset 结合使用

常用命令：

- 试运行

```bash
# 是一次clean的演习, 告诉你哪些文件会被删除. 记住他不会真正的删除文件, 只是一个提醒
git clean -n
```

- 删除当前目录下没有 tracked 的文件,不会删除.gitignore文件里面指定的文件夹和文件, 不管这些文件有没有被track过

```bash
git clean -f

# 删除指定路径下的没有被track过的文件
git clean -f <path>
```

- 删除当前目录下没有 tracked 的文件 和 文件夹

```bash
git clean -df
```

- 删除当前目录下所有没有track过的文件. 不管他是否是.gitignore文件里面指定的文件夹和文件

```bash
git clean -xf
```



参考资料：

- [git clean的用法](https://www.jianshu.com/p/0b05ef199749)