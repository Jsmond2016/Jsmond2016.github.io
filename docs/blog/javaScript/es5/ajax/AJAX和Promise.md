---
title: AJAX和Promise
date: 2018-01-17 22:41:52
copyright: true
comments: true
post: true
tags: 
- AJAX
- Promise
category: javaScript
---

> 给request设置第四部分，但是在chrome上看不到，因为当method为get时，  chrome 不让设置第四部分 ，只有修改method为post时可以展示在chorme上



## 对HTTP设置请求和处理响应

- 使用Node.js设置请求

request举例

```js
GET / HTTP/1.1  	 						//第一部分 method，path，http协议
Host: www.baidu.com							//第二部分  都是  key:value 的形式
User-Agent: curl/7.54.0						//第二部分
Accept: */*				   				   //第二部分
Frank: xxx				                    //第二部分
Content-Length: 10		                     //第二部分
Content-Type: application/x-www-form-urlencoded	  //第二部分
						                    //第三部分为回车
1234567890								   // 第四部分为请求的内容
```

使用 js 设置请求：

```js
let request = new XMLHttpRequest()
request.open('post','/xxx')  //设置第一部分
request.setRequestHeader('Tom','18') //设置第二部分
request.setRequestHeader('Content-type','x-www-urlencoded')  //设置第二部分
//第三部分为回车，不需要设置
request.send('我是request的第四部分')  
// 注意，如果method为get的时候，chrome无法看到对应的值，只有method为post时才可以在控制台显示

```

- 使用 js 获取响应

response 举例

```json
HTTP/1.1 200 OK
Accept-Ranges: bytes
Cache-Control: private, no-cache, no-store, proxy-revalidate, no-transform
Connection: Keep-Alive
Content-Length: 2443
Content-Type: text/html
Date: Tue, 10 Oct 2017 09:14:05 GMT
Etag: "5886041d-98b"
Last-Modified: Mon, 23 Jan 2017 13:24:45 GMT
Pragma: no-cache
Server: bfe/1.0.8.18
Set-Cookie: BDORZ=27315; max-age=86400; domain=.baidu.com; path=/

<!DOCTYPE html>
<!--STATUS OK--><html> <head> 后面太长，省略了……
```

使用 js 获取 响应

```js
let s1 = requet.status		 //获取状态码 200
let s2 = request.statusText  // 获取OK

let s3 = request.getResponseHeader('Content-Type') //获取Content-Type
let s4 = request.getAllResponseHeaders()
let request.responseText()    
//获取第四部分 <!DOCTYPE html>
<!--STATUS OK--><html> <head> 后面太长，省略了……
```



## 使用jQuery封装一个AJAX

- 封装1.0 版本-简单粗暴版本
- 封装2.0版本-参数为对象
- 上面封装出现的问题
- 封装3.0版本-添加Promise规范



###封装1.0 版本-简单粗暴版本

上面我们使用 js 设置请求响应，我们使用了以下5行代码，自然我们会想，有没有什么办法能够使用尽可能少的代码就完成上述的工作呢？

```js
let request = new XMLHttpRequest()
request.open('post','/xxx') 
request.setRequestHeader('Tom','18') 
request.setRequestHeader('Content-type','x-www-urlencoded')  
request.send('我是request的第四部分')  
```

我们设想，把上面的实现写成一个函数封装不就行了吗？

设想 : `xxx.ajax = function(url,method,body,successFn,failFn){}` 

具体实现

```js
//html
<bod>
	<button id="myButton">点我</button>
<body>



//js
window.jQuery.ajax = function(url,method,body,successFn,failFn){
        let request = new  XMLHttpRequest()
        requet.open(method,url)
        request.onreadystatechange = ()=>{
        if(request.readystate === 4){
            if(request.status >= 200 && request.status <300){
                successFn.call(undefined,request.responseText)
            }else if(request.status >=400){
                failFn.call(undefined,request)    
            }
        }
    }
    request.send(body)
}

window.$ = window.jQuery

myButton.addEventListener('click',(e)=>{
    window.jQuery.ajax(
        '/xxx',
        'get',
        null,
        (responseText)=>{console.log(1)},
        (request)=>{console.log(2)}
        )
})
```

#### 不足： 

写好第一次封装以后，感觉自我良好，美美的睡一觉，第二天早上起来，准备再次使用我们封装的函数时，发现有一些问题

```
window.jQuery.ajax(
        '/xxx',
        'get',
        null,
        (responseText)=>{console.log(1)},
        (request)=>{console.log(2)}
        )
```

- `/xxx ` 这表示啥意思？字符串？路径？
- `get` 表示method=get，我知道
- `null ` 表示一脸懵逼
- `(responseText)=>{}` 这个箭头函数表示什么？处理成功？处理失败？
- `(request)=>{console.log(2)}` 这又是啥意思？表示处理成功还是失败你倒是说话啊？

可能你会说，这都不懂？傻x，第一个`/xxx` 不是一看就知道表示路径吗？具体参数你不会回去看你自己封装函数的时候设置的参数吗？

**但是，**

如果某一次的请求路径为 `get` 那怎么办？很容易误导大家以为这个method啊

还有，如果封装函数的目的就是为了便利快捷，每次使用还得回去看参数，不是很麻烦吗？

以及，当method为get的时候，第三部分为空，一般人看不懂啊！！

> 当`method=get`的时候，第三个参数能不能不写？
>
> 不！行！它会把后面的箭头函数作为参数传进去，因此使用 `null` 作为占位符

显然，我们的封装还有不足。

####　需求：

**此时，我们迫切需要一个有结构的方法分别表示上面的参数** 

**由此，我们想到了 object**

### 封装2.0版本-参数为对象

使用 Object 作为参数，

####　优点：

- 直观性:`key:value`
- 传参：` function(object){}`
- 赋值： `Object.xxx = yyy`
- `arguments` 当传入的对象参数为多个的时候进行判断 。

 代码示例：

```js
window.jQuery.ajax = function(options){
		let url  
		if(arguments.length ===1){
			url = options.url;
		}else if(arguments.length ===2){
			url = arguments[0]
			options = arguments[1]
		}

		let method = options.method
		let body = options.body
		let successFn = options.successFn
		let failFn = options.failFn
		let headers = options.headers


		let request = new  XMLHttpRequest()
		requet.open(method,url)
		request.onreadystatechange = ()=>{
		if(request.readystate === 4){
			if(request.status >= 200 && request.status <300){
				successFn.call(undefined,request.responseText)
			}else if(request.status >=400){
				failFn.call(undefined,request)	
			}
		}
	}
	request.send(body)
}

window.$ = window.jQuery


//调用
myButton.addEventListener('click',(e)=>{
	let obj = {
		url:'/xxx',
		method:'get',
		headers:{
			'content-type':'application/x-www-urlencoded',
			'frank':18
		},
		successFn:(e)=>{  //如果参数里面有多个函数，直接在箭头函数里面写多个函数即可
			f1.call()
			f2.call()
		} //回调函数，e是 request.responseText
		failFn:(e)=>{console.log(e)}   //回调函数，e是request
	}
	window.jQuery.ajax(obj)
})
```

现在我们再看调用的代码

```js
myButton.addEventListener('click',(e)=>{
	let obj = {
		url:'/xxx',
		method:'get',
		successFn:(e)=>{console.log('success')} 
		failFn:(e)=>{console.log(e)}  
	}
	window.jQuery.ajax(obj)
})
```

#### 问题：

- 如果成功了是否可一执行2个函数？
  实现:在箭头函数里面放2个函数

  ```js
  successFn:(e)=>{  //如果参数里面有多个函数，直接在箭头函数里面写多个函数即可
  			f1.call()
  			f2.call()
  		} 
  ```

- 当请求失败的时候返回状态码为 404,是否会返回内容？

  答案；会的，依然可以设置第四部分的的返回值。

- 如何设置`header` ？
  实现：

  ```js
  myButton.addEventListener('click',(e)=>{
  	let obj = {
  		url:'/xxx',
  		method:'get',
  		headers:{
  			'content-type':'application/x-www-urlencoded',
  			'frank':18
  		},
  		successFn:(e)=>{console.log('success')} 
  		failFn:(e)=>{console.log(e)}  
  	}
  	window.jQuery.ajax(obj)
  })
  ```

  获取 `header` 

  ```js
  //省略部分代码...
  let headers = options.headers
  for(let key in headers){
    let value = headers[key]
    request.setRequestHeader(key,value)
  }
  ```

- 当传入的参数为多个的时候，例如 `function(url,object)`怎么处理 ？
  先判断 `arguments` 的长度。
  再分别进行处理

  ```js
  window.jQuery.ajax = function(options){
  		let url  
  		if(arguments.length ===1){
  			url = options.url;
  		}else if(arguments.length ===2){
  			url = arguments[0]
  			options = arguments[1]
  		}
  ```

  

#### 升级：使用ES6语法的解构赋值进行优化

  看代码:

  ```js
  let method = options.method
  let body = options.body
  let successFn = options.successFn
  let failFn = options.failFn
  let headers = options.headers
  ```

  都是 使用 let 声明 ，显得累赘

  使用[ES6语法解构赋值](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)：

  ```
  let {method,body.successFn,failFn,headers} = options  //等同于上面的5行
  ```

  再次优化 ：直接放入函数参数中

  ```js
  window.jQuery.ajax = function({method,body.successFn,failFn,headers}){
    //省略部分代码
  }
  ```

  

### 小结

上面几个步骤，看看我们从最简单粗暴的写法到逐步封装我们做了什么

- 第一步：瘦身，即对原来的代码进行封装，由多行到一个函数，通过传入参数进行赋值；
- 第二步：引入Object的结构化，即避免了每次调用函数的时候都去看我们封装的时候的参数是什么，同时赋值很方便；
- 第三步：使用ES6 解构赋值的语法对我们的封装函数进行改造，减少重复代码。

问题：如果多个不同的开发人员都对同一个AJAX进行了封装，会出现什么问题呢？

如下代码：

```js
//jack
jack.ajax = function(null,null,succcess,fail){}

//tom
tom.ajax(function(error,content){
  if(error){
    // fail
  }else{
    //success
  }
})

//smith
smith.ajax.onload = function(){}
smith.ajax.onerror = function(){}

```

即：

每个人对请求成功和失败的命名和处理方式不同，此时，我们需要一个统一化标准，怎么办？

  ### Promise  的使用

####　目的和作用：

1. 封装形式规范化
2. `then`  的使用和作用


```js
function success(responseText){console.log(responseText)}
function fail(request){console.log(request)}

myButton.addEventListener('click',(e)={
  $.ajax({
    url:'/xxx'
	method:'get'
	}).then(success,fail)
})
```

我们看到，在jQuery里面把 success 和 fail 的处理方式放在 `then` 里面，第一个参数表示成功，第二个参数表示失败。

`then()` 返回的依然是Promise，在后面可以再不断地 `then()` 

```js
myButton.addEventListener('click',(e)={
  $.ajax({
    url:'/xxx'
	method:'get'
	}).then(success,fail).then(
	success执行以后处理这里的函数，
	fail执行以后处理这里的函数
	)
})
```

小问题：

> ```js
> myButton.addEventListener('click',(e)={
>   $.ajax({
>     url:'/xxx'
> 	method:'get'
> 	}).then(
> 	(responseText)=>{console.log(responseText)},
> 	(request)=>{console.log(request)}
> 	)
> })
> ```
>
> 函数执行成功以后，即执行了 `(responseText)=>{console.log(responseText)}` 这行代码，返回的 `responseText` 为什么为对象而不是字符串？
>
> 答：因为jQuery 处理了，当jQuery 发现你的 response 的`Content-Type:text/json;` 时，它就会自动的把 `responseText` 转换成对象。
>
> 相当于 `JSON.parse(responseText)` ，返回为一个对象。 [JSON.parse()—MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)

#### 原理

```js
window.Promise = function(){
  //
 return {
   then(){}
 }
}
```

具体使用：只需要记住这句代码

`return new Promise(function(resolve,reject){})`





参考文章：

- [promise-知乎](https://www.zhihu.com/search?type=content&q=promise)
- [深入理解Promise](http://blog.csdn.net/aabv54321/article/details/61619233)
