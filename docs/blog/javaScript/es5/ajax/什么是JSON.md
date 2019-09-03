---
title: JSON
date: 2018-01-14 17:57:26
copyright: true
comments: true
post: true
tags: 
- JSON
category: 
- javaScript
---



## 1. 什么是JSON?

**JSON**(JavaScript Object Notation) 是一种轻量级的数据交换格式。是一种由道格拉斯·克罗克福特构想设计、轻量级的数据交换语言，以文字为基础，且易于让人阅读。尽管JSON是Javascript的一个子集，但JSON是独立于语言的文本格式，并且采用了类似于C语言家族的一些习惯。

JSON 数据格式与语言无关，脱胎于 JavaScript，但目前很多编程语言都支持 JSON 格式数据的生成和解析。JSON 的官方 MIME 类型是 `application/json`，文件扩展名是 `.json`。

## 2. JSON 的语法

- 语法详情看[这里](http://json.org/json-zh.html)
- 注意细节 
  - 复合类型的值**只能是数组或对象** ，不能是函数、正则表达式对象、日期对象
  - **简单类型的值只有四种** ：字符串、数值（必须以十进制表示）、布尔值和`null`（不能使用`NaN`, `Infinity`, `-Infinity`和`undefined`）。
  - 字符串必须使用**双引号** 表示，不能使用单引号。
  - 对象的**键名必须放在双引号** 里面。
  - 数组或对象**最后一个** 成员的后面，**不能加逗号** 。

## 3. JSON和JavaScript的区别

| JavaScript支持 |        表示方法        | JSON支持  |        表示方法        |
| :----------: | :----------------: | :-----: | :----------------: |
|     null     |        null        |  null   |        null        |
|    array     |    `['a','b']`     | string  |    `["a","b"]`     |
|    Object    |  `{name:'frank'}`  | Object  | `{"name":"frank"}` |
|    string    |     `'frank'`      | string  |     `"frank"`      |
|    number    |        123         | number  |        123         |
|   boolean    |    `true/false`    | boolean |    `true/false`    |
|  undefined   |     undefined      |   不支持   |        不支持         |
|   Function   | `function fn(){}`  |   不支持   |        不支持         |
|      变量      |     `var a={}`     |   不支持   |        不支持         |
|     原型链      | `object.prototype` |   不支持   |        不支持         |



## 4. JSON 的使用
- 问题：如下代码为服务端返回给页面的数据，请问 `response.write()` 里面的内容是对象吗？？

```nginx
//省略部分代码
if(path=== '/'){
  response.statuscode = 200
  response.setHeader('content-type','text/json;charset=utf-8')
  response.write(`
  {
    "note":{
      "to":"A",
      "from":"B"
      "heading":"sayHi"
      "content":"hi"
    }
  }
  `)
}
//省略部分代码
```

答：

不是对象！不是对象！不是对象！上面使用的是JSON的语法构建的JSON对象，但是返回给页面的时候永远是 `string` ,即http协议的响应的第四部分为 string

验证方式：在前端页面收到响应以后

```javascript
console.log(typeof response.responseText) //string
```

- 问题：如何把上述从后台获得的符合JSON语法的字符串转换成 js 对象或者是对应的值？
```javascript
let string = response.responseText
let object = window.JSON.parse(string)
console.log(typeof object) //object
```



参考资料：

推荐文章：[JSON-知乎](https://zhuanlan.zhihu.com/p/22627657)

[JSON](http://json.org/json-zh.html)

[JSON-MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON)

[JSON-阮一峰 ](http://javascript.ruanyifeng.com/stdlib/json.html)