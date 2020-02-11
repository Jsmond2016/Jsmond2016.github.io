# git 永久记住账号密码

有时候，不是使用的 SSH 方式下载代码，从而在提交代码的时候，会提示需要输入账号密码，因为次数多了，感觉很累赘，怎么办？

- 换成 SSH 的方式
- 永久记住账号密码

所以，使用下面的 git 设置永久记住账号密码：

方法一：

```bash
git config --global credential.helper store
```

方法二：

编辑 `C:\Users\Administator` 里面的 `.gitconfig` 文件，添加下面的代码：

```js
[user]
	name = usrename  //你的用户名

	email = useremail@mail.com  //你的git邮箱账号
// 主要是下面的这2行
[credential]
    helper = store
```



参考博客：

- [git永久保存账号密码，免去git重复输入账号密码操作](https://blog.csdn.net/lyly4413/article/details/80691751)
- [git永久保存账号密码免去git重复输入账号密码操作](https://www.jianshu.com/p/2dbc14eaaa42?utm_campaign)