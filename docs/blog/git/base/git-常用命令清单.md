# git 学习

> 参考文档： [git 阮一峰](http://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html)

## 基础命令

1. 新建 git 代码仓库

```bash
git init [project-name]
```

2. 下载一个项目和它的整个代码历史

```bash
git clone [url]
```

3. 显示当前的Git配置

```bash
git config --list
```

4. 设置提交代码时的用户信息

```bash
 git config [--global] user.name "[name]"
 git config [--global] user.email "[email address]"
```

5. 添加指定文件到暂存区

```bash
git add [file1] [file2] ...
```

## 添加和删除

1. 添加指定目录到暂存区，包括子目录

```bash
git add [dir]
```

2. 添加当前目录的所有文件到暂存区

```bash
git add .
```

3.  删除工作区文件，并且将这次删除放入暂存区

```bash
git rm [file1] [file2] ...
```

4. 停止追踪指定文件，但该文件会保留在工作区

```bash
git rm --cached [file]
```

5. 改名文件，并且将这个改名放入暂存区

```bash
git mv [file-original] [file-renamed]
```

## 代码提交

1. 提交暂存区到仓库区

```bash
 git commit -m [message]
```

2. 提交暂存区的指定文件到仓库区

```bash
git commit [file1] [file2] ... -m [message]
```

3. 提交工作区自上次commit之后的变化，直接到仓库区

```bash
git commit -a
```

4. 提交时显示所有diff信息 【建议使用】

```bash
git commit -v
```

## 分支管理

1. 列出所有本地分支

```bash
git branch
```

2. 列出所有远程分支

```bash
git branch -r
```

3. 列出所有本地分支和远程分支

```bash
 git branch -a
```

4. 新建一个分支，但依然停留在当前分支

```bash
git branch [branch-name]
```

5. 新建一个分支，并切换到该分支

```bash
git checkout -b [branch]
```

6. 切换到指定分支，并更新工作区

```bash
git checkout [branch-name]
```

7. 切换到上一个分支

```bash
git checkout -
```

8. 合并 B 分支到 A 分支

```bash
git checkout A # 切换到 A 分支

git merge B # 合并分支 A 到 B

# 通常我们开发中，是合并 feature-xxx 分支到 develop 分支

# 首先，保证 feature-xxx 分支是已经提交了代码

git checkout develop

git merge feature-xxx
```

9. 删除分支

```bash
git branch -d [branch-name]
```

10. 删除远程分支

```bash
 git push origin --delete [branch-name]
 git branch -dr [remote/branch]
```

## 查看信息

1.  显示有变更的文件

```bash
git status
```

2. 显示当前分支的版本历史

```bash
git log

git log --graph # 查看各分支点线图
```

3. 显示暂存区和工作区的差异

```bash
git diff
```

## 远程同步

1. 下载远程仓库的所有变动

```bash
git fetch [remote]
```

2. 显示所有远程仓库

```bash
git remote -v
```

3. 增加一个新的远程仓库，并命名

```bash
git remote add [shortname] [url]
```



更多资料，参考：

- [Git教程-廖雪峰](https://www.liaoxuefeng.com/wiki/896043488029600)
- [git官网教程](https://git-scm.com/book/zh/v1/Git-%E5%9F%BA%E7%A1%80-%E5%8F%96%E5%BE%97%E9%A1%B9%E7%9B%AE%E7%9A%84-Git-%E4%BB%93%E5%BA%93)