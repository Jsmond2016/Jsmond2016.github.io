# Generator

## 含义

 概念：

1.ES6提供的解决异步编程的方案之一
2.Generator函数是一个状态机，内部封装了不同状态的数据，
3.用来生成遍历器对象
4.可暂停函数(惰性求值), yield可暂停，next方法可启动。每次返回的是yield后的表达式结果

特点：

1.function 与函数名之间有一个星号
2.内部用yield表达式来定义不同的状态

例如：

```js
 function* generatorExample(){
          let result = yield 'hello';  // 状态值为hello
          yield 'generator'; // 状态值为generator
        }
```

3.generator 函数返回的是指针对象( iterator )，而不会执行函数内部逻辑
4.调用 next 方法函数内部逻辑开始执行，遇到yield表达式停止，返回 yield 后的表达式结果{value: yield后的表达式结果/undefined, done: false/true}
5.再次调用 next 方法会从上一次停止时的 yield 处开始，直到最后
6.yield 语句返回结果通常为 undefined， 当调用 next 方法时传参内容会作为启动时yield语句的返回值。



Generator 函数是 ES6 提供的一种异步编程解决方案，语法行为与传统函数完全不同。

generator 定义

- Generator 函数是一个状态机，封装了多个内部状态。
- 执行 Generator 函数会返回一个遍历器对象，遍历器对象生成函数。
- 形式上，Generator 函数是一个普通函数，区别在于：
  - `function`关键字与函数名之间有一个星号
  - 函数体内部使用`yield`表达式

代码长啥样？

```js
function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}

var hw = helloWorldGenerator();

hw.next()
// { value: 'hello', done: false }

hw.next()
// { value: 'world', done: false }

hw.next()
// { value: 'ending', done: true }

hw.next()
// { value: undefined, done: true }
```



特点：

- 调用 Generator 函数后，该函数并不执行。
- 返回的也不是函数运行结果，而是一个指向内部状态的指针对象，即一个遍历器对象 Iterator
- 必须调用遍历器对象的`next`方法，使得指针移向下一个状态。

总之，一句话：**Generator 函数是分段执行的，`yield`表达式是暂停执行的标记，而`next`方法可以恢复执行。**

## 方法

- yield
- next()

## 使用

主要体现在两个方面：

- 协作

- 异步

```js
/*
    * 需求：
    * 1、发送ajax请求获取新闻内容
    * 2、新闻内容获取成功后再次发送请求，获取对应的新闻评论内容
    * 3、新闻内容获取失败则不需要再次发送请求。
    * 
    * */ 

    function getNews(url) {
    	$.get(url, function(data) { // 获取到 data，在 data 中获取 commentsUrl
    		console.log(data)
    		let url = 'http://localhost:3000' + data.commentsUrl
    		SX.next(url)
    	})
    }

    function* sendXml() {
    	let url = yield getNews("http://localhost:3000/news?id=3")
    	yield getNews(url)
    }

    let SX = sendXml()
    SX.next()
```



## 总结





参考资料：

- 推荐学习 [ES6系列教程第三篇--Generator 详解](https://blog.csdn.net/tcy83/article/details/80427195)