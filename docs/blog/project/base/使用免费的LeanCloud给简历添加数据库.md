---
title: 使用免费的LeanCloud给简历添加数据库
date: 2018-01-20 19:32:53
copyright: true
comments: true
post: true
tags: AJAX
---

##  LeanCloud 简介

官网：[LeanCloud](https://leancloud.cn/pricing/)

开发版：免费的针对开发阶段和个人项目解决方案，成本低、功能丰富，可以满足开发的需求，适合产品开发阶段、个人项目、或在小群体中使用的应用使用。

特点：一定的流量以内供开发者免费试用，但是必须使用他提供的API

## 使用说明文档快速入门

- 在自己建立完App以后，点击快速入门 ，选择语言为 JavaScript

## 环境的安装
### NPM安装的Bug解决

- 注册并进入 [leancloud](https://leancloud.cn/) ，创建应用，按照说明文档操作

  ![](https://i.loli.net/2018/01/19/5a616751638a0.png)

- 使用 npm 安装失败，尝试使用 yarn，需要[安装 yarn](https://yarn.bootcss.com/docs/install.html)

- bash报错没有curl 这个命令 `bash: curl: command not found`

- 安装 curl `sudo apt install curl`

- 安装 `yarn` 成功

- 使用yarn依然无法安装

- 回到 npm 安装，报错显示没有package.json

  ```
  npm WARN enoent ENOENT: no such file or directory, open '<root>/node_modules/supertest/package.json
  ```

- 解决办法为，在根目录执行命令 `npm init` 

- 发现此时目录多了个 package.json

- 再次执行 `npm install leancloud-storage --save` ，显示没有权限，加上 `sudo` 以后，执行成功 ，但是没有在我的当前目录下出现对应的 `node_modlues` 文件，在根目录发现有，但是我要在当前目录下使用啊，怎么办？

- 在当前目录下执行 `npm init` 出现了 `package.json` 文件，再执行 `sudo npm install leancloud-storage --save`

- 发现目录有了这个文件
  ![](https://i.loli.net/2018/01/19/5a6168f863e55.png)

- 上面说明配置成功，然后执行第二条 `npm install leancloud-realtime --save`

- 引入CDN `<script src="//cdn1.lncld.net/static/js/3.5.0/av-min.js"></script>`

- 现在虽然可以使用了，问题是，这样执行了以后会不会留下什么后遗症？下一次使用的时候？？


### 测试

完成上面的操作以后，在控制台输入 `AV` ，即可看到一个 AV 对象如下：

```
{_config: {…}, _sharedConfig: {…}, _getAVPath: ƒ, _installationId: null, _getInstallationId: ƒ, …}
```




## 使用C-R-M原则

即：Copy，Run，Modify原则，使用别人的代码运行调试后在修改成自己需要的样子进行使用。

### 初始化

```
var APP_ID = 'HH1RDVnLiDw1RA0YCL66dcfw-gzGzoHsz';
var APP_KEY = 'eMqFOA16pkSGX7iCK408sNDE';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});
```

### 启用指定的节点

```
var APP_ID = 'HH1RDVnLiDw1RA0YCL66dcfw-gzGzoHsz';  
//注意，这里每个人的ID不同，按照自己分配的即可
var APP_KEY = 'eMqFOA16pkSGX7iCK408sNDE';
AV.init({
  appId: APP_ID,
  appKey: APP_KEY,

  // 启用美国节点
  region: 'us'
  
});
```

### 验证网络

执行命令行 ：`ping hh1rdvnl.api.lncld.net`

### 复制测试代码

```
var TestObject = AV.Object.extend('TestObject');
var testObject = new TestObject();
testObject.save({
  words: 'Hello World!'
}).then(function(object) {
  alert('LeanCloud Rocks!');
})
```

- 此时，刷新页面以后会弹出提示框，同时 LeanCloud 上面会有对应对测试结果。

> 以上根据说明文档操作测试无误以后即可上手使用。



## 建表，插入数据

事实上，上面的测试代码就是一个数据插入的操作

- 建表，名字为 TestObject

  `var TestObject = AV.Object.extend('TestObject');`

- 在表中新建一行数据

  `var testObject = new TestObject();`

- 输入一行数据内容，保存

- 如果保存成功则弹出对话框，内容为“LeanCloud Rocks”

```
//创建表，名字为 TestObject
var TestObject = AV.Object.extend('TestObject');
//在表中创建一行数据
var testObject = new TestObject();

//创建一行数据为 "Hello,World!",保存
//如果保存成功，则弹出对话框内容为 “LeanCloud Rocks”
testObject.save({
  words: 'Hello World!'
}).then(function(object) {
  alert('LeanCloud Rocks!');
})
```



### 小知识

- 表单内提交数据是监听 submit 还是 form 呢？

  答：监听 form

  因为：
  ​
  （1）当用户在输入完成内容以后直接按回车，是应该提交的，同时，用户点击“提交” 

  按钮也应该提交内容。

  （2）如果监听 submit的话，需要同时监听 submit 和 “Enter” ，显得麻烦累赘；而直接监听表单的话包括了上面的操作，代码量少。

  对比如下：

  ```
  //监听form
  let myForm = document.querySelector('#postMessageForm)
  myForm.addEventListener('submit',function(e){
    e.preventDefault() //阻止提交成功以后刷新页面
  })

  //监听 Submit
  let button = myForm.querySelector('input[type=submit]')
  button.addEventListener('click',function(){})
  // 监听回车
  let input = myForm.querySelector('input[name=content]')
  input.addEventListener('keypress',function(e){
    if(e.keyCode === 13){}
  })
  //ps：如果有多个input，则要监听多个回车事件。。。

  ```

  ​


## 显示数据

- 页面显示层

在HTML页面中写好对应的结构，举例为

```html
<body>
<ol>
//此处为使用js进行动态添加<li>标签，在<li>标签内添加对应的返回数据进行显示 
</ol>
  //以下操作添加数据
		<form class="postMessageForm" id="postMessageForm" style="width:700px;height:500px;margin: 0 auto">
			<label for="">姓名</label><input type="text" name="name">
			<label for="">内容</label><input type="text" name="content" >
			<input type="submit" value="提交">
		</form>
</body>
```



- 获取历史数据显示在页面中

进入**据存储开发指南 · JavaScript** 

找到 对象》批量操作》批量查询

```javascript
 var query = new AV.Query('Todo');
  query.find().then(function (todos) {
    todos.forEach(function(todo) {
      todo.set('status', 1);
    });
    return AV.Object.saveAll(todos);
  }).then(function(todos) {
    // 更新成功
  }, function (error) {
    // 异常处理
  });
```

将其修改成为自己需要的代码即可

示例代码如下：

```javascript
function(){
			var query = new AV.Query('Todo');
  			query.find().then(
				(message)=>{
					let array = message.map((item)=> item.attributes)
					array.forEach((item)=>{
						let li = document.createElement('li')
						li.innerText = `${item.name}:${item.content}`
						let messageList = document.querySelector('#messageList')
						this.messageList.append(li)
					})
				},
				function(error){
					alert('提交失败！')
				})
```



### 实现无刷新留言

因为使用 `<form>` 提交数据的时候会刷新页面，不论是用户自己刷新页面看到提交以后的数据，还是开发者帮助用户刷新页面 ，体验都极其不好，因此，我们进行改善 。

- 原来的思路：用户提交数据表单以后数据在LeanCloud上，然后访问 LeanCloud 获取数据再显示在页面上。
- 新思路：在用户提交表单的时候，把数据传送到 LeanCloud 的同时，把数据添加在页面中，代码如下：

```javascript
function(){
			let myForm = this.form
			let content = myForm.querySelector('input[name=content]').value 
			let name = myForm.querySelector('input[name=name]').value

			this.model.save(content,name).then(function(object) {
		  		let li = document.createElement('li')
				li.innerText = `${object.attributes.name}:${object.attributes.content}`
				let messageList = document.querySelector('#messageList')
				messageList.append(li)
				myForm.querySelector('input[name=content]').value = ''
				myForm.querySelector('input[name=name]').value = ''
			})
		}
```




