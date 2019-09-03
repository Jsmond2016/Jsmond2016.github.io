---
title: React-Hooks
date: 2019-07-08 11:33:17
copyright: true
comments: true
post: true
tags: 
- react
- Hooks
---

# React-Hooks 学习

## 写在前面

学习资料：

英文文档：[这里](https://reactjs.org/docs/hooks-intro.html) 和 [这里](https://reactjs.org/docs/hooks-reference.html)
中文解析：[这里](https://github.com/dt-fe/weekly/blob/master/79.精读《React Hooks》.md)

学习Demo： [React-Hooks-Demo](https://codesandbox.io/s/optimistic-brahmagupta-3hj75)



1. useState
2. useEffect
3. 自己的 Hook
4. 看一看所有 Hooks API

## 写一个加法器

使用普通的方式写一个简单的加法器：

```jsx
import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

// 使用 普通的 方式来实现
class App2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  add = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <div className="App">
        <div>{this.state.count}</div>
        <button onClick={this.add}>add</button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App2 />, rootElement);

```



## 使用 Hooks 来写一个加法器

```jsx
import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";


// 使用 hooks 的方式来实现
function App() {
  const [count, setCount] = useState(0);
  // 这是一个数组，count 表示值，setCount 表示 更新函数
  const add = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <div>{count}</div>
      <button onClick={add}>add</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

```



使用 Hooks 后的优点：

不需要再使用 Class ，以及设置 state 了，代码更加简洁



## useState 的更多例子

看代码：

```jsx
import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

// 使用 hooks 的方式来实现
function App() {
  const [count, setCount] = useState(0);
  // 这是一个数组，count 表示值，setCount 表示 更新函数
  const [user, setUser] = useState({
     name: "frank", 
     age: 18,
     hobbies: ['play', 'code'],
    });

  const add = () => {
    setCount(count + 1);
  };

  const addOld = () => {
    setUser({
      ...user,
      age: user.age + 1
    });
  };

  const addHobbies = () => {
   let hobbiesItem = Math.random().toString().substr(2,2);
    setUser({
      ...user,
      hobbies: [...user.hobbies, hobbiesItem]
    })
  }

  return (
    <div className="App">
      <div>{count}</div>
      <button onClick={add}>addCount</button>
      <div>
        {user.name}, {user.age}
      </div>
      <button onClick={addOld}>addOld</button>
      <div>
      {user.hobbies.join(",")}
      </div>
      <button onClick={addHobbies}>addHobbies</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

```



注意：

- Hooks 的使用，只能在 函数内部，不能写成如下方式：

```jsx
import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const [count, setCount] = useState(0); // 此处写法错误

function App() {
    // ...
}
```

- 顺序和名字，下面的写法依然正确 

```jsx
import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";



function App() {
   const [x, y] = useState(0);  // x 代表值， y 代表更新函数
   
    const add = () => {
        y(count + 1);  // 此处 y 代表 更新函数
      };
    
    return (
    <div className="App">
      <div>{count}</div>
      <button onClick={add}>addCount</button>
    </div>
    )
    
}
```



## useEffect API 的使用

官网：[使用 Effect Hook](https://zh-hans.reactjs.org/docs/hooks-effect.html#___gatsby)

重点：**Effect Hook 可以让你在函数组件中执行副作用操作** ，副作用，通过下面的例子来理解

- 首先，引入 useEffect
- 其次，以 `useEffect(fn())` 的方式使用它
- 特点：
  - 副作用 的使用
  - 在 useEffect 中可以使用 useState 已经定义的变量值

看代码：

```jsx
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

// 使用 hooks 的方式来实现
function App() {
  const [count, setCount] = useState(0);
  // 这是一个数组，count 表示值，setCount 表示 更新函数
  const [user, setUser] = useState({
    name: "frank",
    age: 18,
    hobbies: ["play", "code"]
  });

  const add = () => {
    setCount(count + 1);
  };

  const addOld = () => {
    setUser({
      ...user,
      age: user.age + 1
    });
  };

  useEffect(() => {
    document.querySelector("#output").innerText = count;
  });

  const addHobbies = () => {
    let hobbiesItem = Math.random()
      .toString()
      .substr(2, 2);
    setUser({
      ...user,
      hobbies: [...user.hobbies, hobbiesItem]
    });
  };

  return (
    <div className="App">
      <div>{count}</div>
      <button onClick={add}>addCount</button>
      <div>
        {user.name}, {user.age}
      </div>
      <button onClick={addOld}>addOld</button>
      <div>{user.hobbies.join(",")}</div>
      <button onClick={addHobbies}>addHobbies</button>
      <div id="output"></div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

```

