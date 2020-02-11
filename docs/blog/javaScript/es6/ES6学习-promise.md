# Promise 

## JS 的异步

JS语言的执行环境是“单线程”的，即指一次只能完成一件任务；如果有多个任务，那么必须排队，前面一个任务完成，再执行后一个任务，以此类推。这种模式的好处是实现起来比较简单，执行环境相对单纯；坏处是只要有一个任务耗时很长，后面的任务都必须排队等着，会拖延整个程序的执行。常见的浏览器无响应（假死），往往就是因为某一段Javascript代码长时间运行（比如死循环），导致整个页面卡在这个地方，其他任务无法执行。

为了解决这个问题，Javascript语言将任务的执行模式分成两种：

- 同步（Synchronous）
- 异步（Asynchronous）。

"同步模式"就是上一段的模式，后一个任务等待前一个任务结束，然后再执行，程序的执行顺序与任务的排列顺序是一致的、同步的；

"异步模式"则完全不同，每一个任务有一个或多个回调函数（callback），前一个任务结束后，不是执行后一个任务，而是执行回调函数，后一个任务则是不等前一个任务结束就执行，所以程序的执行顺序与任务的排列顺序是不一致的、异步的。

"异步模式"非常重要。在浏览器端，耗时很长的操作都应该异步执行，避免浏览器失去响应，最好的例子就是Ajax操作。在服务器端，"异步模式"甚至是唯一的模式，因为执行环境是单线程的，如果允许同步执行所有http请求，服务器性能会急剧下降，很快就会失去响应。

## 常用的异步编程模式

1. 回调函数
   即f1,f2两个函数，f2要等待f1执行结果后执行，即 f1(f2)
2. 事件驱动的方式
   f1.on('done', f2); （JQ写法，f1完成时，trigger("done")则执行f2）
3. 发布-订阅 模式
4. Promise对象实现

## promise 是什么

**Promise** 对象用于表示一个异步操作的最终状态（完成或失败），以及该异步操作的结果值。

 promise对象的3个状态
  * pending: 初始化状态
  * fullfilled: 成功状态
  * rejected: 失败状态

运用：

* 使用promise实现超时处理
* 使用promise封装处理ajax请求

```js
let request = new XMLHttpRequest();
request.onreadystatechange = function () {
    // ...
}
request.responseType = 'json';
request.open("GET", url);
request.send();
```



使用方法：

```js
// 1. 创建promise对象
var promise = new Promise(function(resolve, reject){ 
  // 做异步的操作 
  if(成功) { // 调用成功的回调
    resolve(result); 
  } else { // 调用失败的回调
    reject(errorMsg); 
  } 
}) 
```



运行 demo，[效果](https://jsbin.com/zipeweruda/1/edit?js,console)：

```js
// 1. 创建promise对象
let promise = new Promise((resolve, reject) => { //接受一个函数，参数分别为 resolve 和 reject
    console.log('111')
     // 做异步的操作 
    setTimeout(() => {
        console.log("333")
        //resolve("hello~") // 成功操作
        reject("Bye~")  //失败操作
    })
})

console.log("----------")

promise.then((data)=>{
    console.log(data + '成功了')
}, (data)=> {
    console.log(data + '失败了')
})
```



## promise.then()

基本使用：

```js
// 2. 调用promise对象的then()
promise.then(function(
  result => console.log(result), 
  errorMsg => alert(errorMsg)
))
```

promise 执行过程

![09_promise过程分析.png](https://i.loli.net/2019/07/16/5d2d6e0a1962b97706.png)

promise + ajax 测试代码

```js
// 参考尚硅谷教程 第5章/ES5_6教程/视频/第15集
// 在webstorm 打开此文件或者是开启 http-server 服务，
// 同时后端在 es_server 目录开启 node 服务: node bin/www 

function getNews(url) {
	let promise = new Promise((resolve, reject) => {
	//状态初始化
	// 执行异步任务
	//创建 xmlhttp 实例对象
	let xmlHttp = new XMLHttpRequest()
	console.log(xmlHttp.responseText)
	// 绑定监听
	xmlHttp.onreadystatechange = function() {
		if(xmlHttp.readyState == 4 ){ //请求成功
			if(xmlHttp.status == 200){
				resolve(xmlHttp.responseText)
			}else {
				//请求失败
			reject("暂时没有新闻内容")
			}	
		}
	}

	// 设置请求方式 以及 url
	xmlHttp.open('GET', url)
	xmlHttp.send()	
	})
	return promise
}


getNews('http://127.0.0.1:3000/news?id=2')
	.then((data) => {
		
		console.log(data)
		// 发送请求获取评论内容准备 url
		let commentsUrl = JSON.parse(data).commentsUrl
		let url2 = 'http://127.0.0.1:3000' + commentsUrl
		// 发送请求
		return getNews(url2)

		}, (error) => {
			console.log(error)
		})
		.then((data) => {
				console.log(data)
		}, (error) => {
				console.log(error)
		})
```

## promise.catch()

`Promise.prototype.catch` 方法是 `Promise.prototype.then(null, rejection)` 的别名，用于指定发生错误时的回调函

数。

```js
getJSON("/posts.json").then(function(posts) {
  // some code
}).catch(function(error) {
  // 处理前一个回调函数运行时发生的错误
  console.log('发生错误！', error);
});
```

`Promise` 对象的错误具有**"冒泡"性质**，会一直向后传递，直到被捕获为止。也就是说，错误总是会被下一个 catch 语句捕获。

```js
getJSON("/post/1.json").then(function(post) {
  return getJSON(post.commentURL);
}).then(function(comments) {
  // some code
}).catch(function(error) {
  // 处理前两个回调函数的错误
});
```



## promise.resolve() 和 promise.reject()

有时需要将现有对象转为Promise对象，Promise.resolve方法就起到这个作用。

```js
// test1 下面代码将 jQuery 生成 deferred 对象，转为一个新的 ES6 的 Promise 对象。
var jsPromise = Promise.resolve($.ajax('/whatever.json'));

//test2
var p = Promise.resolve('Hello');
 
p.then(function (s){
  console.log(s)
});
// Hello
```

- 如果 Promise.resolve 方法的参数，**不是具有 then 方法的对象**（又称 thenable 对象），则返回一个新的 Promise 对象，且它的状态为fulfilled。
- 如果Promise.resolve方法的 **参数** 是一个 **Promise 对象** 的实例，则会被**原封不动地返回**
- Promise.reject(reason)方法也会返回一个新的Promise实例，该实例的状态为rejected。Promise.reject方法的参数reason，会被传递给实例的回调函数

```js
var p = Promise.reject('出错了');
 
p.then(null, function (s){
  console.log(s)
});
// 出错了
```

## promise.all()  和 promise.race()

这部分很少用到，可以了解下，参考教程 [菜鸟教程-promise](https://www.runoob.com/w3cnote/javascript-promise-object.html)

参考博客：

- [大白话讲解Promise](https://www.cnblogs.com/lvdabao/p/es6-promise-1.html)
- [ES6 Promise的使用和理解 ](https://juejin.im/post/5b605b035188251a90189c61)