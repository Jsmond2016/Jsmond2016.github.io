---
title: React 开发环境的搭建
date: 2019-07-07 11:33:17
copyright: true
comments: true
post: true
tags: 
- react
- 环境搭建
---

# React 开发环境的搭建

> 本项目使用 React Fiber 版本，也就是 React 16版本

- [React 官网](https://zh-hans.reactjs.org/)
- [React 官方教程](https://zh-hans.reactjs.org/tutorial/tutorial.html)

## 开发环境准备

- 使用打包工具：Webpack
- 使用官方脚手架工具：[Creat-react-app](https://zh-hans.reactjs.org/docs/create-a-new-react-app.html#create-react-app)
- 安装 Nodejs
- 安装 react-app: `npm install -g create-react-app`



## 项目启动

1. 新建项目（名字随意，建议英文）: `create-react-app todolist`
2. 完成步骤1后，按照提示：
   1. `cd todolist`
   2. `npm run start`
3.  在浏览器输入 `localhost:3000` ，即可看到预览效果



## 工程目录介绍

- `package.json` 文件：配置文件，前面的命令 `npm run start ` 实际上就是运行了`scripts`里面的 `start` 

- `.gitignore` 使用 git 工具管理代码，对于一些不想传到 github 上的东西，在此添加剂可

- `public` 

  - `favicon.ico` 浏览器 tab 上的 icon 图标
    ![1560944410062](./img/1560944410062.png)
  - `index.html` 主页的模板，负责显示页面中 html 的内容

- `src`

  - `index.js` 项目的入口 

  ```js
  import React from 'react'; 
  import ReactDom from 'react-dom';
  import App from './App';
  
  // PWA progressive web application
  // 主要功能是帮助我们借助网页写手机应用
  //将该网页上传到 支持 https协议的服务器上，此时，网页若使用了registerServiceWorker，则其具备如下特性：
  // 在访问该网页以后，即使断网了，registerServiceWorker 可以帮助你把网页存储在浏览器之内，无网络也可以访问
  import  registerServiceWorker from './registerServiceWorker'
  
  ReactDom.render(<App/>, document.getElementById('root'));
  registerServiceWorker();
  
  
  ```

  - `App.test.js` 文件，是一个自动化的测试文件
  - `App.js` 文件，负责显示到页面的内容

## React 的组件

React 组件的编写： App.js 文件就是一个组件，我们可以换成 TodoList.js 文件

```js
import React, {Component} from 'react'

class TodoList extends Component{
    render(){
        return (
            <div>todolist</div>
        )
    }
}

export default TodoList;
```

说明，此处使用了 ES6语法： `import React, {Component} from 'react'`  等价于

```js
import React from 'react';  // 此处不同

//import {Component} from 'react';
//等价于
//import React from 'react';
//const Component  = React.Component;

class TodoList extends React.Component{  // 此处不同
    render(){
        return (
            <div>todolist</div>
        )
    }
}

export default TodoList;
```



需要注意：

```js
import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';

ReactDOM.render(<TodoList />, document.getElementById('root'));
```

上面代码中，虽然我们没有使用到 `react` ，但是不能删除 `import React from 'react'` ，因为

```js
ReactDOM.render(<TodoList />, document.getElementById('root'));
```

这里使用你了 `JSX` 语法，将 `TodoList` 挂载到 `root` 中。

**必须引入 `react` 我们的代码才能够使用 `JSX` ，才能够编译成功。**

如果是在 `index.js` 文件中使用自定义组件，自定义组件 名字必须为 **“大写字母开头”**



## JSX 语法补充

在 render 方法中， return 后面括号内的就是 jsx 代码。

1. jsx 注释：` {/*这是一个多行注释*/}` ，注意，多行注释需要将注释内容单独一行，和花括号分别占一行，**不能在同一行。**

```jsx
 render(){
        return (
            <Fragment>
            {/*这是一个多行注释*/}
                <div>
            {
                // 这是一个单行注释
            }
                    <input type="text"
                           value={this.state.inputValue}
                           onChange={this.handleInputChange.bind(this)}
                    />
                    <button onClick={this.handleBtnClick.bind(this)}>提交</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return <li key={index} onClick={this.handleItemDelete.bind(this, index)}>{item}</li>
                        })
                    }
                </ul>
            </Fragment>
        )
    }
```



2. 写 css 的时候，使用 className 代替 class，避免和前面重名导致歧义

```jsx
<Fragment>
                <div>
                    <input type="text" className='input'
                           value={this.state.inputValue}
                           onChange={this.handleInputChange.bind(this)}
                    />
                    <button onClick={this.handleBtnClick.bind(this)}>提交</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return <li key={index} onClick={this.handleItemDelete.bind(this, index)} dangerouslySetInnerHTML={{__html:item}}></li>
                        })
                    }
                </ul>
            </Fragment>
```



2. 不转译 HTML ，使用 `dangeroutlySetInnerHTML` ，这样在提交文本框的时候，下面生成的内容则不会进行转译，如下代码：

```jsx
<ul>
{
this.state.list.map((item, index) => {
	return <li key={index} onClick={this.handleItemDelete.bind(this, index)} 			dangerouslySetInnerHTML={{__html:item}}></li>
    })
 }
 </ul>
```

3. 使用 htmlFor 代替 for，比如常见的 label 中所使用

```jsx
<Fragment>
                <div>
                    <label htmlFor="insertArea">请输入内容</label>
                    <input id="insertArea" type="text" className='input'
                           value={this.state.inputValue}
                           onChange={this.handleInputChange.bind(this)}
                    />
                    <button onClick={this.handleBtnClick.bind(this)}>提交</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return <li key={index} onClick={this.handleItemDelete.bind(this, index)} dangerouslySetInnerHTML={{__html:item}}></li>
                        })
                    }
                </ul>
            </Fragment>
```

## React 特点

- 声明式开发（基础的前端开发中，基本都是在操作 Dom，使用 React 可以减少代码量）
- 可以与其他框架并存（React 的代码只对 `root` 有效，后面可以使用 jquery 等框架，不操作 `root` 即可共存）
- 组件化（大写字母开头，父子通信的特点）
- 单向数据流（父组件可以向子组件传值，但是子组件**绝不能改变**父组件传过来的值）
- 视图层框架（只局限于视图层，在大型项目中，仅仅只有 React 是远远不够的）
- 函数式编程（有利于前端自动化测试，对于一个个函数，只需要验证其输出结果即可判断该函数是否正确）



