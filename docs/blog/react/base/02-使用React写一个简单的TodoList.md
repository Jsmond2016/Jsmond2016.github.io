---
title: 使用React写一个TodoList
date: 2019-07-08 11:33:17
copyright: true
comments: true
post: true
tags: 
- react
- todolist
---

# 使用React写一个TodoList

## 写一个 TodoList Demo

> 使用 webstorm 遇到问题和解决办法：[webStorm保存文件时出现Following errors occurred on attepmt to save files:can't save...](https://blog.csdn.net/thaiilk/article/details/88569951)

Demo 代码如下：

```js
import React, { Component, Fragment} from 'react';

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputValue: 'hello',
            list: []
        }
    }

    render(){
        return (
            <Fragment>
                <div>
                    <input type="text"
                           value={this.state.inputValue}
                           onChange={this.handleInputChange.bind(this)}
                    />
                    <button>提交</button>
                </div>
                <ul>
                    <li>学英语</li>
                    <li>Learn React</li>
                </ul>
            </Fragment>
        )
    }
    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
        //this.state.inputValue = e.target.value  这里的 this 为undefined ，需要在前面事件中使用 bind 绑定
        //console.log(e.target.value)
    }
}

export default TodoList;
```

**学习要点：**

1. `state` 负责存储组件里面的数据
2. `HTML`  中，如果使用到 js 的表达式，需要使用 `{}` 括起来
3. 使用 `onChange` 事件时，需要绑定事件的 this ，后面的方法中的 this 才是正确的。
4. 在修改 `state` 中的数据时，不能够直接修改，而需要使用 `setState({key: value})` 对象的方式修改。 

接下来，我们对 TodoList 进行完善，看如下代码：

```js
import React, { Component, Fragment} from 'react';

class TodoList extends Component{

    constructor(props){
        super(props);
        this.state = {
            inputValue: '',
            list: ['学习英文', '学习 React']
        }
    }

    render(){
        return (
            <Fragment>
                <div>
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

    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
        //this.state.inputValue = e.target.value
        //console.log(e.target.value)
    }
    handleBtnClick() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }
    handleItemDelete(index) {
        const list = [...this.state.list];
        list.splice(index, 1);

        this.setState({
            list: list
        })
        // this.state.list.splice(index,1); 不可以这样使用，修改数据必须使用 setState方法
        // 引入一个概念： immutable ，即 state 不允许我们做任何改变，否则会影响性能优化

        console.log(index)
    }
}

export default TodoList;
```

**上述代码中，新增了 2 个功能：**

- 输入内容后点击提交，下面会生成输入内容的列表
- 点击列表项，则可以删除该列表项

功能一**学习要点**：

1. 循环生成列表项，需要使用 index，不然会有警告！

```js
<ul>
     {
         this.state.list.map((item, index) => {
         return <li key={index} onClick={this.handleItemDelete.bind(this, index)}>{item}</li>
           })
      }
 </ul>
```

2. 使用 ES6 语法，对数组进行处理，即进行数据添加：`[...this.state.list, this.state.inputValue]` ,

```js
 handleBtnClick() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }
```

3. 删除数组数据项的时候，需要先将数组拷贝一份，对拷贝到数组进行操作再使用 setState 进行数据赋值。

```js
handleItemDelete(index) {
        const list = [...this.state.list];
        list.splice(index, 1);

        this.setState({
            list: list
        })
        // this.state.list.splice(index,1); 不可以这样使用，修改数据必须使用 setState方法
        // 引入一个概念： immutable ，即 state 不允许我们做任何改变，否则会影响性能优化

        console.log(index)
    }
```




## 组件拆分和组件之间的传值

1. 组件注释问题：

```jsx
{/* jsx  单行注释*/} 

{/*
    jsx
    多行注释   
*/}
```

在 jsx 中，若单组件前后有注释时，需要使用 div 等对外层进行包裹，代码为：

```jsx
 return (
     <div>
         <TodoItem content={item} index={index}/>
         {/*<li
                key={index} onClick={this.handleItemDelete.bind(this, index)}
                dangerouslySetInnerHTML={{__html:item}}></li>
          */}
     </div>
 )
```

2. 父子传值，在子组件上标注好属性，然后给子组件使用

```jsx
{//父组件 TodoList.js}
return (
    <div>
        <TodoItem content={item} index={index}/>
    </div>
)
```

子组件使用父组件的传值：

```jsx
import React, {Component} from 'react'

class TodoItem extends Component{

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }
    render() {
        return (
            <div onClick={this.handleClick}>{this.props.content}</div>
        )
    }

    handleClick() {
        alert(this.props.index);
    }
}

export default TodoItem;
```

注意，这里调用 handleClick 方法绑定的 this，**子组件需要在 constructor 中绑定，而不是在事件中绑定**，目的是**更节约性能。**

错误写法：

```jsx
render() {
        return (
            <div onClick={this.handleClick.bind(this)}>{this.props.content}</div>
        )
    }
```



3. 子父传值：子组件操作父组件方法

前面的功能中，当点击列表项，则该列表项被删除。

父元素，TodoList.js

```jsx
render(){
        return (
            <Fragment>
                {//...省略部分代码}
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <div>
                                    <TodoItem
                                        content={item}
                                        index={index}
                                        deleteItem={this.handleItemDelete.bind(this)}
                                </div>
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }
    handleItemDelete(index) {
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState({
            list: list
        })
    }
```

子组件中：

```jsx
import React, {Component} from 'react'

class TodoItem extends Component{

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }
    render() {
        return (
            <div onClick={this.handleClick}>{this.props.content}</div>
        )
    }
    handleClick() {
        this.props.deleteItem(this.props.index)
    }

}
```



**重要学习要点！！！：**

- 当子组件操作 `deleteItem` 方法的时候，需要绑定父组件的 `this` 
- 子组件使用父组件传过来的值，或者是子组件操作父组件的方法时，子组件中都是用 `this.props.xxx` 的方式操作父组件的 `xxx` 方法或者 `xxx` 数据

## TodoList 代码优化

1. 使用 ES6 语法对子组件代码优化： `{ content,  index, delteItem } = this.props` 。

```jsx
 render() {
        const {content} = this.props;
        return (
            <div onClick={this.handleClick}>{content}</div>
        )
    }

    handleClick() {
        const {deleteItem, index} = this.props;
        deleteItem(index);
    }
```

2. 在初始化 `constructor()` 中完成对 this 的绑定

```jsx
{//...}
class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputValue: '',
            list: ['学习英文', '学习 React']
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this)
    }
    render(){
            return (
                <Fragment>
                    <div>
                        <label htmlFor="insertArea">请输入内容</label>
                        <input id="insertArea" type="text" className='input'
                               value={this.state.inputValue}
                               onChange={this.handleInputChange}
                        />
                        <button onClick={this.handleBtnClick}>提交</button>
                    </div>
                    <ul>
                        {this.getTodoItem()}
                    </ul>
                </Fragment>
            )
        }
```

3. 将 jsx 中的逻辑内容换到方法之中，精简代码

```jsx
 render(){
        return (
            <Fragment>
                {//省略部分代码...}
                <ul>
                    {this.getTodoItem()}
                </ul>
            </Fragment>
        )
    }
getTodoItem() {
        return this.state.list.map((item, index) => {
            return (
                <div>
                    <TodoItem
                        content={item}
                        index={index}
                        deleteItem={this.handleItemDelete}
                    />
                </div>
            )
        })
    }
```

4. 对于 `setState` 使用新的语法，即使用【返回函数】的方式换掉原来的对象设置的方式：

```jsx
{//旧代码}
handleInputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }
{//新代码}
handleInputChange(e) {
        const value = e.target.value;
        this.setState(() => ({inputValue: value}))
    }
```

**注意：**这里需要先将 `e.target.value` 放在外面，为了代码的性能优化，不然写成`this.setState(() => ({inputValue: e.target.value}))`会报错

```jsx
{//旧代码}
this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
{//新代码}
handleBtnClick() {
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }))
    }
```

**注意：** 这里函数有一个参数 `prevState` 表示 list 变更前的状态，即等价于 `this.state.list` 。

```jsx
{//旧代码}
handleItemDelete(index) {
    const list = [...this.state.list];
        list.splice(index, 1);
        this.setState({
             list: list
         })
}

{//新代码}
handleItemDelete(index) {
        this.setState((prevState) => {
            const list = [...prevState.list];
            list.splice(index, 1);
            return {list}
            }
        );
    }
```

道理同上！