# git-stash

作用：暂存当前工作区（workspace） 的代码

使用场景：

- 是一个 git 仓库
- 对于已经有 commit 记录的代码，又发生了变更，没有 git add
- 需要暂存/转移这部分代码



使用命令：

- 一个暂存

```bash
# 如果只有一个暂存的话

git stash  # 暂存代码
git stash pop # 释放代码，并删除改记录
```

- 多个暂存

```bash
# 如果有多个暂存，建议添加 message
git stash save "messages"

# 获取当前暂存区所有暂存的记录
git stash list

# 显示例子如下 stash@{$num}
stash@{0}: On master: update ab.txt
stash@{1}: On master: update a.txt
stash@{2}: WIP on master: 592fddd update
stash@{3}: WIP on master: 592fddd update

# 恢复到指定暂存区并删除该暂存记录
git stash pop stash@{1} # 恢复到 ‘update a.txt’
```

- 应用到指定暂存记录 且 **不删除** 改记录，适用于某个变更应用到多个分支的情况

```bash
git stash apply stash@{num}
```

- 其他命令

```bash
# 显示文件更改,做了哪些改动，默认show第一个存储
git stash show

# 显示文件更改，查看指定 $num 文件更改
git stash show stash@{$num}

# 丢弃指定存储
git stash drop stash@{$num} 

# 清空所有stash存储
git stash clear
```



参考资料：

- [git stash 用法总结和注意点](https://www.cnblogs.com/zndxall/archive/2018/09/04/9586088.html)
- [git stash详解](https://blog.csdn.net/stone_yw/article/details/80795669)

