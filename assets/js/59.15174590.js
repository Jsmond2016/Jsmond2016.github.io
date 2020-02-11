(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{489:function(e,t,a){"use strict";a.r(t);var r=a(0),_=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[a("img",{attrs:{src:"https://i.loli.net/2018/02/07/5a7aac8d3f4ac.png",alt:""}})]),e._v(" "),a("blockquote",[a("p",[e._v("如图，在使用浏览器的时候，当我们加载某个资源的时候，需要向服务器请求对应的资源。")]),e._v(" "),a("p",[e._v("而当用户刷新页面的或者加载同一个资源的时候，再重新加载这个资源的时候，非常浪费时间和消耗性能。")]),e._v(" "),a("p",[e._v("此时，缓存的出现很好的解决了这个问题。")])]),e._v(" "),a("h2",{attrs:{id:"缓存的处理方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存的处理方式"}},[e._v("#")]),e._v(" 缓存的处理方式")]),e._v(" "),a("ul",[a("li",[e._v("Expires")]),e._v(" "),a("li",[e._v("Cache-Control")]),e._v(" "),a("li",[e._v("ETag")])]),e._v(" "),a("h2",{attrs:{id:"缓存的作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存的作用"}},[e._v("#")]),e._v(" 缓存的作用")]),e._v(" "),a("ol",[a("li",[e._v("减少了冗余的数据传输，节省了网费")]),e._v(" "),a("li",[e._v("减少了服务器的负担， 大大提高了网站的性能")]),e._v(" "),a("li",[e._v("加快了客户端加载网页的速度")]),e._v(" "),a("li",[e._v("极大的提高了用户体验")])]),e._v(" "),a("h2",{attrs:{id:"expires-与-cache-control"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#expires-与-cache-control"}},[e._v("#")]),e._v(" Expires 与 Cache-Control")]),e._v(" "),a("p",[e._v("既然浏览器有缓存，自然而然少不了对应的管理和设置，早期的浏览器使用的是 Expires，后期随着技术的更新，出现了Cache-Control，二者本质上的功能基本相同，而在使用过程中，依然是后者 更好用。")]),e._v(" "),a("h3",{attrs:{id:"expires"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#expires"}},[e._v("#")]),e._v(" Expires")]),e._v(" "),a("h4",{attrs:{id:"含义："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#含义："}},[e._v("#")]),e._v(" 含义：")]),e._v(" "),a("p",[e._v("expires通常被理解为失效日期及相关意义，DBA通常把expires作为表示过期数量或者过期时间的字段。")]),e._v(" "),a("h4",{attrs:{id:"使用："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用："}},[e._v("#")]),e._v(" 使用：")]),e._v(" "),a("p",[a("code",[e._v("Expires: <http-date>")]),e._v(" 表示到期时间")]),e._v(" "),a("p",[e._v("举例：")]),e._v(" "),a("p",[a("code",[e._v("Expires: Wed, 21 Oct 2015 07:28:00 GMT")]),e._v(" 表示到期时间为： 格林尼治时间 2015年10月21日 07:28:00")]),e._v(" "),a("p",[e._v("更多使用方式，参考："),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Expires",target:"_blank",rel:"noopener noreferrer"}},[e._v("Expires-MDN"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"cache-control"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cache-control"}},[e._v("#")]),e._v(" Cache-Control")]),e._v(" "),a("h4",{attrs:{id:"含义：-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#含义：-2"}},[e._v("#")]),e._v(" 含义：")]),e._v(" "),a("p",[e._v("通用消息头被用于在http 请求和响应中通过指定指令来实现缓存机制。缓存指令是单向的, 这意味着在请求设置的指令，在响应中不一定包含相同的指令。")]),e._v(" "),a("h4",{attrs:{id:"基本使用："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本使用："}},[e._v("#")]),e._v(" 基本使用：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Cache-Control: no-cache, no-store, must-revalidate 禁止缓存\nCache-Control:public, max-age=31536000 缓存静态资源，到期时间为 31536000 秒即 1 年 以后缓存过期。\n")])])]),a("p",[e._v("更多用法： "),a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cache-Control",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cache-Control--MDN"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"几个问题："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#几个问题："}},[e._v("#")]),e._v(" 几个问题：")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("如果被缓存的文件更新了怎么办？如何验证是否为新的文件？")]),e._v(" "),a("p",[e._v("文件如果更新了，则 URL 的名字会不同，就不会使用本地的缓存了，而是使用新的缓存。")]),e._v(" "),a("p",[e._v("看图：\n​\n"),a("img",{attrs:{src:"https://i.loli.net/2018/02/07/5a7ae94dcbffc.png",alt:""}})]),e._v(" "),a("p",[e._v("图中很多文件的后缀都是一些没有规律的随机字符串，这是为什么呢？")]),e._v(" "),a("p",[e._v("答案就是，每次更新了文件以后，为了和旧版本的文件记性区分，对应的在文件名后面加一些随机字符串表示不同。")])]),e._v(" "),a("li",[a("p",[e._v("缓存过多怎么办？")]),e._v(" "),a("p",[e._v("浏览器会定期清除不需要的缓存。")])]),e._v(" "),a("li",[a("p",[e._v("使用上使用 Cache-Control 还是 使用 Expires 呢？")]),e._v(" "),a("p",[e._v("当然是推荐使用 Cache-Control，因为 Expires 还有一个不足就是：\nExpires 的过期时间是相对本地的时间作为参照，如果电脑的时间重置了回到了更早的时间，那么浏览器永远无法使用以前的缓存 ，而是使用新的 url；反之，如果系统时间为更晚的时间，那么浏览器就永远无法使用到 新的  URL，而是一直使用以前的缓存。")])]),e._v(" "),a("li",[a("p",[e._v("使用 Cache-Control 的本质是？")]),e._v(" "),a("p",[e._v("发现一样文件，直接不请求")])])]),e._v(" "),a("h2",{attrs:{id:"etag-和-md5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#etag-和-md5"}},[e._v("#")]),e._v(" ETag 和 MD5")]),e._v(" "),a("p",[e._v("通常而言，ETag 的使用是和 MD5 结合一起使用的。主要是验证文件的差异性。")]),e._v(" "),a("p",[e._v("即以下两者文件的差异：")]),e._v(" "),a("ul",[a("li",[e._v("服务端的文件")]),e._v(" "),a("li",[e._v("浏览器缓存的文件")])]),e._v(" "),a("h3",{attrs:{id:"md5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#md5"}},[e._v("#")]),e._v(" MD5")]),e._v(" "),a("p",[e._v("MD5消息摘要算法（英语：MD5 Message-Digest Algorithm），一种被广泛使用的密码散列函数，可以产生出一个128位（16字节）的散列值（hash value），用于确保信息传输完整一致。MD5由美国密码学家罗纳德·李维斯特（Ronald Linn Rivest）设计，于1992年公开，用以取代MD4算法。这套算法的程序在 RFC 1321 中被加以规范。")]),e._v(" "),a("p",[e._v("简言之：内容差异越小，MD5计算结果差异越大 。")]),e._v(" "),a("h3",{attrs:{id:"etag"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#etag"}},[e._v("#")]),e._v(" ETag")]),e._v(" "),a("p",[e._v("发现是一样的文件 ，请求但是不下载，返回 状态码 ：304 表示没有修改。")]),e._v(" "),a("h4",{attrs:{id:"md5-和-etag-的结合使用："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#md5-和-etag-的结合使用："}},[e._v("#")]),e._v(" MD5 和 ETag 的结合使用：")]),e._v(" "),a("p",[e._v("分别计算服务端和浏览器的文件差异：")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("服务端文件：使用MD5 计算出对应的数值为 "),a("code",[e._v("fileMd5")]),e._v(" ，在响应中返回给请求；")]),e._v(" "),a("p",[a("code",[e._v("response.setHeader('ETag',fileMd5)")])]),e._v(" "),a("p",[e._v("在返回的响应中会多一个响应头  "),a("code",[e._v("ETag")]),e._v("，结果如图：")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2018/02/07/5a7afa3a4bb29.png",alt:""}})]),e._v(" "),a("p",[e._v("然后在下一次刷新页面的时候，就会多一个新的请求头  "),a("code",[e._v("If-None-Match")]),e._v("，如图：")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://i.loli.net/2018/02/07/5a7afabf53309.png",alt:""}})])]),e._v(" "),a("li",[a("p",[e._v("即在新的 请求头 "),a("code",[e._v("If-None-Match")]),e._v("  中的MD5值是上一次服务器返回的 MD5 值作为请求，如果和服务器对应的文件 MD5 值相同，则不下载。")])])]),e._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),a("h3",{attrs:{id:"关于-expires、cache-control-、etag"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于-expires、cache-control-、etag"}},[e._v("#")]),e._v(" 关于 Expires、Cache-Control 、ETag")]),e._v(" "),a("ul",[a("li",[e._v("Cache-Control ：一旦发现有相同的文件，不发请求，直接使用本地的缓存文件，即 【有相同，不请求】")]),e._v(" "),a("li",[e._v("ETag：一旦发现和服务端的文件相同，则不下载，同时返回状态码： 304 表示文件未改变。即 【请求发现不相同，则不下载】")]),e._v(" "),a("li",[e._v("现在我们发现 ETag 和 Cookie 有点相似，都是会发请求。区别在于：\n"),a("ul",[a("li",[e._v("Cookie 是跟随域名，记录用户的状态信息")]),e._v(" "),a("li",[e._v("ETag 是跟随 URL，即文件的 URL，每个文件都是不同的 URL")])])])]),e._v(" "),a("h3",{attrs:{id:"缓存-与-302-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缓存-与-302-的区别"}},[e._v("#")]),e._v(" 缓存 与 302 的区别")]),e._v(" "),a("ul",[a("li",[e._v("缓存没有请求。")]),e._v(" "),a("li",[e._v("302 有请求，有响应，但是响应没有第四部分。")])]),e._v(" "),a("p",[e._v("参考资料：")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Caching_FAQ#%E5%90%84%E7%A7%8D%E7%B1%BB%E5%9E%8B%E7%9A%84%E7%BC%93%E5%AD%98",target:"_blank",rel:"noopener noreferrer"}},[e._v("HTTP 缓存"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://kb.cnblogs.com/page/166267/",target:"_blank",rel:"noopener noreferrer"}},[e._v("HTTP缓存"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"http://caibaojian.com/http-cache.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("HTTP缓存"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("推荐阅读 "),a("a",{attrs:{href:"http://wf.uisdc.com/cn/performance/optimizing-content-efficiency/http-caching.html#etag",target:"_blank",rel:"noopener noreferrer"}},[e._v("HTTP 缓存"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"http://www.cnblogs.com/lovesong/p/5352973.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("浏览器缓存机制"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000006689795",target:"_blank",rel:"noopener noreferrer"}},[e._v("HTTP缓存"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000010775131",target:"_blank",rel:"noopener noreferrer"}},[e._v("HTTP缓存机制详解"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Expires",target:"_blank",rel:"noopener noreferrer"}},[e._v("Expires"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://zh.wikipedia.org/wiki/MD5",target:"_blank",rel:"noopener noreferrer"}},[e._v("MD5 维基百科"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://zh.wikipedia.org/wiki/HTTP_ETag",target:"_blank",rel:"noopener noreferrer"}},[e._v("ETag--维基百科"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=_.exports}}]);