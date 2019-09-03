---
title: React-router
date: 2019-07-08 11:33:17
copyright: true
comments: true
post: true
tags: 
- react
- router
---

# React-router 学习

学习参考：[REACT TRAINING](https://reacttraining.com/react-router/web/guides/quick-start)

## router 的原理

- 改变 hash

```js
window.location.hash='xxx' 改变hash
window.addEventListener('hashchange',fun) 监听hash的改变
```

- 改变 url

```js
history.pushState(obj,title,'/url') 改变url
window.addEventListener('popstate',fun) 当浏览器向前向后时，触发该事件。
```



## React-router 的安装

- 安装 React，创建项目

```bash
npm install -g create-react-app
create-react-app demo-app
cd demo-app
```

- 安装 react-router-dom

```bash
npm install react-router-dom
```

## 常用组件

### 1). react-router-dom中的核心组件: 

- Router 
  - Router是一个外层，最后render的是它的子组件，不渲染具体业务组件。
  - 分为 HashRouter(通过改变hash)、BrowserRouter(通过改变url)、MemoryRouter
  - Router 负责选取哪种方式作为单页应用的方案hash或browser或其他的，把HashRouter 换成 BrowserRouter，代码可以继续运行。
  - Router 的 props中有一个 history 的对象，history 是对 window.history 的封装，history的负责管理与浏览器历史记录的交互和哪种方式的单页应用。history 会作为 childContext 里的一个属性传下去。
- Route 
  - 负责渲染具体的业务组件，负责匹配url和对应的组件
  - 有三种渲染的组件的方式：component(对应的组件)、render(是一个函数，函数里渲染组件)、children(无论哪种路由都会渲染)
- Switch 
  - 匹配到一个Route子组件就返回不再继续匹配其他组件。
- Link 
  - 跳转路由时的组件，调用 history.push 把改变 url。

参考资料：[react-router了解一下](https://juejin.im/post/5ac8c10551882555731c6247#heading-2)

```bash
BrowserRouter:
HahsRouter: 
Route: 路由组件, 注册路由 
Redirect: 重定向
Link:路由链接组件
Switch: 渲染第一个被location匹配到的并且作为子元素的 <Route> 或者 <Redirect>
hashHistory: 路由的切换由URL的hash变化决定，即URL的#部分发生变化
```
### 2). 其他
```bash
history 对象
match 对象
withRouter 函数
```


## 基本路由的使用

- 引入 `react` 
- 引入 `react-router-dom` ，切记，这里不是 `react-router` 新版本在这里有改动

```js
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
      </div>
    </Router>
  );
}

ReactDOM.render(<AppRouter />, document.getElementById("root"));

```

具体效果参考：（可能要科学上网） [react-router-demo](https://codesandbox.io/s/a-simple-react-router-v4tutorial-lr37d)

通过上面，我们可以学会对 `BrowserRouter` , `Route`, `Link` 的使用

- `BrowserRouter` ` 
- `route`
- `Link` 



## 嵌套路由的使用

参考代码：

```js
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Topic({ match }) {
  return <h3>Requested Param: {match.params.id}</h3>;
}

function Topics({ match }) {
  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:id`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

function Header() {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/topics">Topics</Link>
      </li>
    </ul>
  );
}

export default App;
```

具体效果：[嵌套路由Demo](https://codesandbox.io/s/focused-kapitsa-s7rfp)

## 拓展

- 普通用法：

```jsx
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

<router>
	<Link to="link01" > link01 </Link>
	<Link to="Link02" > link02 </Link>
	
	<Route path="/link01" component={myComponet01} />
	<Route path="/link02" component={myComponet02} />
</router>
```

- 嵌套用法：

```jsx
import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

<router>
	<Link to="link01" > link01 </Link>
	<Link to="Link02" > link02 </Link>
	
	<Route path="/link01" component={myComponet01} />
	<Route path="/link02" component={myComponet02} /> 
</router>


class myComponet02 extends Component{
	render(
		<Link to="link03" > link03 </Link>
		<Link to="Link04" > link04 </Link>
	
		<Route path="/link03" component={myComponet03} />
		<Route path="/link04" component={myComponet04} />
	)
}
```

- 路由组件传值

```jsx
const He = ({match}) => {
    return (
        <div>
            <h2>{match.params.topicId}</h2>
        </div>
    )
}


const Hello = ({match})=> {
    return (
        <div>
            <h2>hello</h2>
            <Link to={`${match.url}/he`}>He</Link> <br/>
            <Link to={`${match.url}/she`}>She</Link> <br/>
            <Link to={`${match.url}/it`}>It</Link> <br/>
            <hr/>
            <Route path={`${match.path}/:topicId`} component={He} />
        </div>
    )
}
```

关键代码：

- `match`是一个匹配路径参数的对象，它有一个属性 params，里面的内容就是 **路径参数**，除常用的 params 属性外，它还有url、path、isExact属性。
- `:topicId` 既是一个占位符，又是一个标识名称，获取方式 `this.props.match.params.topicId`

## 我的实践

















参考资料：

- [reacttraining guide](https://reacttraining.com/react-router/web/guides/quick-start)
- [react-router了解一下](https://juejin.im/post/5ac8c10551882555731c6247#heading-11)