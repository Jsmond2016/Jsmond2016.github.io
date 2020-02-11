(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{468:function(t,a,s){"use strict";s.r(a);var n=s(0),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"异步"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#异步"}},[t._v("#")]),t._v(" 异步")]),t._v(" "),s("h3",{attrs:{id:"维基百科解释"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#维基百科解释"}},[t._v("#")]),t._v(" 维基百科解释")]),t._v(" "),s("p",[s("strong",[t._v("异步IO")]),t._v("是计算机操作系统对"),s("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E8%BE%93%E5%85%A5%E8%BE%93%E5%87%BA",target:"_blank",rel:"noopener noreferrer"}},[t._v("输入输出"),s("OutboundLink")],1),t._v("的一种处理方式：发起IO请求的线程不等IO操作完成，就继续执行随后的代码，IO结果用其他方式通知发起IO请求的程序。与异步IO相对的是更为常见的“同步（阻塞）IO”：发起IO请求的线程不从正在调用的IO操作函数返回（即被阻塞），直至IO操作完成。")]),t._v(" "),s("h3",{attrs:{id:"个人总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#个人总结"}},[t._v("#")]),t._v(" 个人总结")]),t._v(" "),s("p",[t._v("理解为：【不等结果就执行下一步】")]),t._v(" "),s("p",[t._v("举例：")]),t._v(" "),s("p",[t._v("A：让黄牛去买票，然后站着等，没有买回来就不做别的事情。")]),t._v(" "),s("p",[t._v("B：让黄牛去买票（告诉黄牛，你买到票就告诉我），然后做别的事情。")]),t._v(" "),s("p",[t._v("代码举例："),s("a",{attrs:{href:"http://js.jirengu.com/vepikokuri/2/edit",target:"_blank",rel:"noopener noreferrer"}},[t._v("Demo预览"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("异步做事")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"异步做事"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("同步做事")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"同步做事"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("异步做事")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 打印出的顺序如下")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//"1"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//"异步做事"')]),t._v("\n")])])]),s("h2",{attrs:{id:"回调【callback】"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#回调【callback】"}},[t._v("#")]),t._v(" 回调【Callback】")]),t._v(" "),s("h3",{attrs:{id:"回调通常和异步结合使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#回调通常和异步结合使用"}},[t._v("#")]),t._v(" 回调通常和异步结合使用")]),t._v(" "),s("p",[t._v("回调：是拿到异步结果的一种方式；")]),t._v(" "),s("p",[t._v("同时，回调也可以拿到同步的结果")]),t._v(" "),s("h3",{attrs:{id:"例子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#例子"}},[t._v("#")]),t._v(" 例子")]),t._v(" "),s("p",[t._v("假如有 2 个函数 f1 和 f2")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("f1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("f2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("如果f1 是一个很耗时的函数，可以 考虑改写 f1，让 f2 写成 f1 的回调函数")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("　　"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("f1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("callback")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("　　　　setTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n　　　　　　"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// f1的任务代码")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("　　　　　　callback")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n　　　　"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n　　"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("这种情况下，执行代码为：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("f1(f2)\n")])])]),s("p",[t._v("使用这样的方式，我们就将同步的方式转换成了异步的方式，f1不会堵塞程序运行，相当于先执行程序的主要逻辑，将耗时的操作推迟执行。")]),t._v(" "),s("h3",{attrs:{id:"小结-："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小结-："}},[t._v("#")]),t._v(" 小结 ：")]),t._v(" "),s("p",[t._v("回调函数")]),t._v(" "),s("ul",[s("li",[t._v("优点\n"),s("ul",[s("li",[t._v("简单、容易理解和部署")])])]),t._v(" "),s("li",[t._v("缺点\n"),s("ul",[s("li",[t._v("是不利于代码的阅读和维护，各个部分之间高度"),s("a",{attrs:{href:"http://en.wikipedia.org/wiki/Coupling_(computer_programming)",target:"_blank",rel:"noopener noreferrer"}},[t._v("耦合"),s("OutboundLink")],1),t._v("（Coupling）")]),t._v(" "),s("li",[t._v("流程会很混乱，而且每个任务只能指定一个回调函数。")])])])]),t._v(" "),s("p",[t._v("参考资料：")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/calidion/calidion.github.io/issues/40",target:"_blank",rel:"noopener noreferrer"}},[t._v("同步、异步、阻塞、非阻塞关系理解"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.zhihu.com/question/19732473",target:"_blank",rel:"noopener noreferrer"}},[t._v("同步与异步-知乎"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2012/12/asynchronous%EF%BC%BFjavascript.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Javascript异步编程的4种方法-阮一峰"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.zhihu.com/question/19801131",target:"_blank",rel:"noopener noreferrer"}},[t._v("回调函数是什么？—知乎"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);