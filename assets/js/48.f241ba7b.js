(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{406:function(t,e,o){"use strict";o.r(e);var a=o(0),v=Object(a.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("p",[t._v("今天主要想说的是以下几个标签")]),t._v(" "),o("ul",[o("li",[o("code",[t._v("<a>")])]),t._v(" "),o("li",[o("code",[t._v("<iframe>")])]),t._v(" "),o("li",[o("code",[t._v("<form>")])]),t._v(" "),o("li",[o("code",[t._v("<input>")]),t._v("  && "),o("code",[t._v("<button>")])]),t._v(" "),o("li",[o("code",[t._v("<table>")])])]),t._v(" "),o("ol",[o("li",[o("code",[t._v("<a>")]),t._v(" 标签")])]),t._v(" "),o("ul",[o("li",[t._v("全称："),o("code",[t._v("anchor")]),t._v(" ：锚点")]),t._v(" "),o("li",[t._v("常见用法一："),o("code",[t._v('<a href=" http://www.xxx.com" target="_blank" > hello</a>')])])]),t._v(" "),o("p",[t._v("属性理解1：target ：目标，把什么作为目标")]),t._v(" "),o("blockquote",[o("p",[t._v("(1) "),o("code",[t._v("_blank")]),t._v(" : 新窗口打开，即到一个新的未命名的HTML4窗口或HTML5浏览器上下文\n"),o("code",[t._v('例子：<a href=" http://www.xxx.com" target="_blank" > hello</a>')])]),t._v(" "),o("p",[t._v("(2) "),o("code",[t._v("_self")]),t._v(" ：  当前页面加载，即当前的响应到同一HTML 4 frame（或HTML5浏览上下文）。此值是默认的，如果没有指定属性的话。\n"),o("code",[t._v('例子：<a href=" http://www.xxx.com" target="_self" > hello</a>')])]),t._v(" "),o("p",[t._v("(3) "),o("code",[t._v("_top")]),t._v(" ： IHTML4中：加载的响应成完整的，原来的窗口，取消所有其它frame。 HTML5中：加载响应进入顶层浏览上下文（即，浏览上下文，它是当前的一个的祖先，并且没有parent）。如果没有parent框架或者浏览上下文，此选项的行为方式相同_self\n"),o("code",[t._v('例子：<a href=" http://www.xxx.com" target="_top" > hello</a>')])]),t._v(" "),o("p",[t._v("(4) "),o("code",[t._v("_parent")]),t._v(" ：加载响应到当前框架的HTML4父框架或当前的HTML5浏览上下文的父浏览上下文。如果没有parent框架或者浏览上下文，此选项的行为方式相同_self。\n"),o("code",[t._v('例子:<a href=" http://www.xxx.com" target="_parent" > hello</a>')])])]),t._v(" "),o("p",[t._v("属性理解2：href ：超链接")]),t._v(" "),o("blockquote",[o("p",[t._v("(1)  链接到外部地址："),o("code",[t._v("http://xxx.com")]),t._v(" "),o("code",[t._v('例子：<a href ="http://www.qq.com" >QQ</a>')])]),t._v(" "),o("p",[t._v("(2)  链接到本页的某个部分："),o("code",[t._v("#属性")]),t._v(" "),o("code",[t._v('例子：<a href ="#attribute" >xxx</a>')])]),t._v(" "),o("p",[t._v("(3)  打开某个文件：\n"),o("code",[t._v("使用file协议")]),t._v(":"),o("code",[t._v("file:///C:/Users/Administrator/Desktop/homework/vsCode/Html/Untitled-1.html")]),t._v(" "),o("code",[t._v('例子：<a href ="file:///users/html/index.html" >demo</a>')])]),t._v(" "),o("p",[t._v("(4)  创建一个可点击的图片："),o("code",[t._v("http://www.qq.com/imgs/1.png")]),t._v(" "),o("code",[t._v('例子：<a href ="http://www.qq.com/imgs/1.png" >pic</a>')])]),t._v(" "),o("p",[t._v("(5)  创建一个email链接："),o("code",[t._v("mailto:123@qq.com")]),t._v(" "),o("code",[t._v('例子：<a href ="mailto:123@qq.com" >QQemail</a>')])]),t._v(" "),o("p",[t._v("(6)  创建电话链接："),o("code",[t._v("tel:+1356789456")]),t._v(" "),o("code",[t._v('例子：<a href ="tel:+1356789456" >+1356789456</a>')])]),t._v(" "),o("p",[t._v("(7) 查询参数："),o("code",[t._v("?name=Tom")]),t._v(" "),o("code",[t._v('例子：<a href ="http://www.user.com/?name=Tom" >Tom</a>')])]),t._v(" "),o("p",[t._v("(8) 伪协议："),o("code",[t._v("javascript:;")]),t._v("或"),o("code",[t._v("javascript:void(0);")]),t._v(" "),o("code",[t._v('例子：<a href ="javascript:;" >点击无响应</a>')]),t._v("\n注："),o("em",[o("strong",[t._v("以上参数中，只有（7）是会发起请求的，其他的都不会向服务器发起请求")])]),t._v("\n示例代码：")])]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v('<!DOCTYPE html>\n<html lang="en">\n<head>\n\t<meta charset="UTF-8">\n\t<title>Document</title>\n</head>\n<body>\n\t<a href="ohter.html?name=hello">hello</a>\n</body>\n</html>\n')])])]),o("p",[t._v("点击 超链接 "),o("a",{attrs:{href:""}},[t._v("hello")]),t._v(" 后的效果，打开控制台查看请求为\n"),o("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/1683063-618ee12c2f734c74.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"查询参数"}})]),t._v(" "),o("ul",[o("li",[t._v("常见用法二："),o("code",[t._v('<a href="www.xxx.com" download>hello</a>')])])]),t._v(" "),o("p",[t._v("属性理解:1:download:下载URL而不是导航到URL，因此将提示用户将其保存为本地文件。")]),t._v(" "),o("ul",[o("li",[t._v("注：仅在HTML中，下载URL只有2种方式，一种是上面的"),o("code",[t._v("download")]),t._v("属性，另一种为HTTP响应中"),o("code",[t._v("conten-type")]),t._v("的参数为"),o("code",[t._v("application/octet-stream")]),t._v("时，浏览器会下载文件")])]),t._v(" "),o("ol",[o("li",[o("code",[t._v("<iframe>")]),t._v(" 标签")])]),t._v(" "),o("ul",[o("li",[t._v("名称：框架")]),t._v(" "),o("li",[t._v("常见用法：主要在页面嵌套页面，经常和"),o("code",[t._v("<a>")]),t._v("标签一起使用；")])]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v('<!DOCTYPE html>\n<html lang="en">\n<head>\n\t<meta charset="UTF-8">\n\t<title>Document</title>\n</head>\n<body>\n\t<iframe name=xxx src="#" frameborder="0"></iframe>\n\t<a href="http://www.qq.com" target="xxx">QQ</a>\n\t<a href="http://www.123.com" target="xxx">123</a>\n</body>\n</html>\n')])])]),o("p",[t._v("效果为：\n"),o("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/1683063-a02a4c0914a74e69.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"iframe"}})]),t._v(" "),o("p",[t._v("属性分析一："),o("code",[t._v('<iframe name=xxx src="#" frameborder="0"></iframe>')]),t._v("\n属性："),o("code",[t._v("name=xxx")]),t._v(","),o("code",[t._v("src=#")]),t._v("\n分析:在"),o("code",[t._v("<a>")]),t._v("标签中，分别对应不同的超链接，但是目标都指向iframe，以第一个QQ超链接为例，即表示在iframe打开链接为"),o("code",[t._v("http://www.qq.com")]),t._v("窗口，第二个123链接同理")]),t._v(" "),o("p",[t._v("属性分析二："),o("code",[t._v('<iframe name=xxx src="#" frameborder="0"></iframe>')]),t._v("\n属性："),o("code",[t._v("src=#")]),t._v("\n分析：除了上面所示参数可以为绝对路径以外，也可以放置相对路径，即在本地新建一个"),o("code",[t._v("index.html")]),t._v("，上面"),o("code",[t._v('src="index.html"')]),t._v("，即下面QQ在"),o("code",[t._v("index.html")]),t._v("打开")]),t._v(" "),o("ol",[o("li",[o("code",[t._v("<form>")]),t._v(" 标签")])]),t._v(" "),o("ul",[o("li",[t._v("form：表单")]),t._v(" "),o("li",[t._v("常见用法：")])]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v('<!DOCTYPE html>\n<html lang="en">\n<head>\n\t<meta charset="UTF-8">\n\t<title>Document</title>\n</head>\n<body>\n\t<form action="index.html" method="post" target="_blank">\n\t\t<input type="text" name="account">\n\t\t<input type="submit" value="提交">\n\n\t</form>\n</body>\n</html>\n')])])]),o("p",[o("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/1683063-603921f2b3d7bf32.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"post"}})]),t._v(" "),o("ul",[o("li",[o("p",[t._v("属性分析一："),o("code",[t._v("action")]),t._v("\n解释：类似"),o("code",[t._v('<a href="" >123</a>')]),t._v(" 中的"),o("code",[t._v("href")]),t._v("一样，跳转链接，主要服务于后面"),o("code",[t._v("submit")]),t._v("所要提交到的位置")])]),t._v(" "),o("li",[o("p",[t._v("属性分析二："),o("code",[t._v("method")]),t._v("\n解释1：在"),o("code",[t._v("<form>")]),t._v("中，若不申明method的传输方式，则默认为 "),o("code",[t._v("get")]),t._v("；只有声明为"),o("code",[t._v('method="pos"t')]),t._v(" 时，才是"),o("code",[t._v("post")]),t._v("，并且，HTTP协议会有第四部分即("),o("code",[t._v("Form Data")]),t._v(")的内容；如果有查询参数出现，也是出现在"),o("code",[t._v("Form Data")]),t._v("中，而不是像"),o("code",[t._v("get")]),t._v("一样出现在搜索框中。")])])]),t._v(" "),o("p",[o("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/1683063-3a3dbde916ff8955.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:'method="post"'}})]),t._v(" "),o("blockquote",[o("p",[t._v("说明：当在表单输入账号密码时，因为使用的不是HTTPS协议，所以密码在最后一部分以明文的方式进行传输，存储方式为上一部分"),o("code",[t._v("Content-Type:application/x-www-form-urlencoded")]),t._v("，若要是中间有人进行监听，那么密码就泄露了，这就是为什么HTTP协议不安全所在之处。")])]),t._v(" "),o("p",[t._v("解释2：上图中，我们看到，当"),o("code",[t._v('method="post"')]),t._v("时，可以 上传数据，那么，想问：当"),o("code",[t._v("method=post")]),t._v("时，是否可以像"),o("code",[t._v('method="get"')]),t._v("一样查询呢？\n答案：可以的，需要修改1个地方，即："),o("code",[t._v("action=user?xxx=3")]),t._v(" (其中=号两边为任意参数)")]),t._v(" "),o("ul",[o("li",[o("p",[t._v("属性分析三："),o("code",[t._v("target")]),t._v("\n和"),o("code",[t._v("<a>")]),t._v("标签一样，可以跳转到其他的链接，不同的是，前者是 get 一个页面， form 是 post 一个页面。")])]),t._v(" "),o("li",[o("p",[t._v("属性分析四："),o("code",[t._v("submit")]),t._v("\n解释：在 "),o("code",[t._v("<form>")]),t._v(" 中，如果没有这个 "),o("code",[t._v("提交")]),t._v(" 按钮 ，就无法提交 "),o("code",[t._v("<form>")]),t._v(" 内的数据，除非使用JS。")])])]),t._v(" "),o("ol",[o("li",[o("code",[t._v("<input>")]),t._v(" 标签")])]),t._v(" "),o("ul",[o("li",[o("p",[t._v("input 输入")])]),t._v(" "),o("li",[o("p",[t._v("常见参数一： "),o("code",[t._v('type="text"')]),t._v(","),o("code",[t._v('type="password"')]),t._v(","),o("code",[t._v('type="button"')]),t._v("......\n说明：在页面效果上 "),o("code",[t._v('<input type="submit" value="button">')]),t._v(" 和"),o("code",[t._v("<button>button</button>")]),t._v(" 是一样的 ，那么它们有什么区别呢？\n"),o("strong",[t._v("区别：")])])]),t._v(" "),o("li",[o("p",[t._v("当")]),o("form",[t._v("中只有一个 "),o("code",[t._v("<button>")]),t._v("时，这个时候  "),o("code",[t._v("<button>")]),t._v(" 就会自动升级为 "),o("code",[t._v('<input type="submit" value="button">')]),t._v(" 进行提交数据，即 "),o("code",[t._v('<button>button</button> == <input type="submit" value="button">')]),t._v(" 二者等价。"),o("p")])]),t._v(" "),o("li",[o("p",[t._v("当 "),o("code",[t._v("<form>")]),t._v(" 的"),o("code",[t._v('<input type="button" value="">')]),t._v(" 说明了"),o("code",[t._v("type")]),t._v("类型为 "),o("code",[t._v("button")]),t._v(" 那么此按钮也仅仅是一个按钮，不具有提交功能。")])]),t._v(" "),o("li",[o("p",[t._v("常见参数二：\n看如下代码：")])])]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v('<input type="checkbox" id="boy" > <label for="boy">男</label>\n<label ><input type="checkbox">男</label>\n')])])]),o("p",[t._v("当我们选择多选框时，通常只有点击多选框才能勾选其内容，显然，这不太人性化；需求是，我们只要点击和多选框对应的文字，那么就可以选中该多选框，实现方式有2种，使用"),o("code",[t._v("<label>")]),t._v("标签实现，如上代码。")]),t._v(" "),o("ul",[o("li",[t._v("常见参数三：单选框如何做到只会选中一个？")])]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v('<input type="radio" name="apple" value="yes">\n<input type="radio" name="apple" value="no">水果\n')])])]),o("p",[t._v("效果：\n"),o("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/1683063-b6a8f9155e892181.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"水果"}}),t._v("\n方法：使用 "),o("code",[t._v("name")]),t._v(" ，当单选框中name取的参数值相同时，就是二者或是多者选一；")]),t._v(" "),o("ul",[o("li",[t._v("常见参数三：下拉框 "),o("code",[t._v("<select> <option></option> </select>")])])]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v('<select name="group" id="">\n\t<option value=""></option>\n\t<option value="second" selected>第二组</option>\n\t<option value="third" disabled="">第三组</option>\n\t<option value="fourth">第四组</option>\n\t<option value="fifth">第五组</option>\n</select>\n\n')])])]),o("p",[o("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/1683063-d4f9d9d8365b9025.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"分组"}})]),t._v(" "),o("ol",[o("li",[o("code",[t._v("<table>")]),t._v(" 标签")])]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v('<!DOCTYPE html>\n<html>\n<head>\n<meta charset="utf-8">\n<title>JS Bin</title>\n</head>\n<body>\n <table border="1px">\n   <colgroup>\n     <col width=100 bgcolor=red>\n     <col width=150 bgcolor=green>\n     <col width=160 bgcolor=yellow>\n   </colgroup>\n   <thead>\n     <th>班级</th>\n     <th>姓名</th>\n     <th>分数</th>\n   </thead>\n   <tbody>\n     <tr>\n       <td>1班</td>\n       <td>张三</td>\n       <td>李四</td>\n     </tr>\n     <tr>\n       <td>2班</td>\n       <td>赵六</td>\n       <td>刘七</td>\n     </tr>\n   </tbody>\n   <tfoot>\n   </tfoot>\n </table>\n</body>\n</html>\n\n')])])]),o("p",[o("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/1683063-a2e4f6119d9b9132.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"效果图"}})]),t._v(" "),o("blockquote",[o("p",[t._v("tr == table row\ntd ==table data\nth ==theader")])]),t._v(" "),o("ul",[o("li",[o("p",[t._v("说明一："),o("code",[t._v("<colgroup>")]),t._v(" 标签的使用，自上而下的 "),o("code",[t._v("<col>")]),t._v(" 分别设置第一列，第二列...的属性")])]),t._v(" "),o("li",[o("p",[t._v("说明二：如果改变"),o("code",[t._v("<tfoot>")]),t._v("的顺序，将其放置在 "),o("code",[t._v("<tbody>")]),t._v(" 前面，那么效果如何？\n答案是：不会改变，浏览器会自动排列顺序。")])]),t._v(" "),o("li",[o("p",[t._v("说明三：属性"),o("code",[t._v("border-collapse:collapse;")]),t._v("\n设置合并边框")])])]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v('<!DOCTYPE html>\n<html>\n<head>\n  <meta charset="utf-8">\n  <title>JS Bin</title>\n  <style>\n    table{\n      border-collapse: collapse;\n    }\n  </style>\n</head>\n<body>\n   <table border="1px">\n     <colgroup>\n       <col width=100 bgcolor=red>\n       <col width=150 bgcolor=green>\n       <col width=160 bgcolor=yellow>\n     </colgroup>\n     <thead>\n       <th>班级</th>\n       <th>姓名</th>\n       <th>分数</th>\n     </thead>\n     <tbody>\n       <tr>\n         <td>1班</td>\n         <td>张三</td>\n         <td>李四</td>\n       </tr>\n       <tr>\n         <td>2班</td>\n         <td>赵六</td>\n         <td>刘七</td>\n       </tr>\n     </tbody>\n     <tfoot>\n       \n     </tfoot>\n   </table>\n</body>\n</html>\n')])])]),o("p",[o("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/1683063-9272e1470d5a227e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}})]),t._v(" "),o("p",[t._v("(完)")])])}),[],!1,null,null,null);e.default=v.exports}}]);