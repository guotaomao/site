(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{481:function(a,t,e){"use strict";e.r(t);var s=e(4),v=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"浏览器原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器原理"}},[a._v("#")]),a._v(" 浏览器原理")]),a._v(" "),e("p",[a._v("浏览器原理几乎是面试环节必问之一：浏览器地址栏输入一段 url 到完整的页面经历哪些步骤")]),a._v(" "),e("h2",{attrs:{id:"浏览器的多进程架构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的多进程架构"}},[a._v("#")]),a._v(" 浏览器的多进程架构")]),a._v(" "),e("p",[a._v("以 chrome 浏览器为例，他由多个进程组成，每个进程都有自己的核心职责，每个进程又包括多个线程，一个进程内的多个线程会协同工作，共同完成进程的职责。")]),a._v(" "),e("h3",{attrs:{id:"进程-process-和线程-thread"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#进程-process-和线程-thread"}},[a._v("#")]),a._v(" 进程 process 和线程 thread")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("进程就像是一个有边界的生产厂间，而线程就像是厂间内的一个个员工，可以自己做自己的事情，也可以相互配合做同一件事情")])]),a._v(" "),e("li",[e("p",[a._v("当我们启动一个应用，计算机会创建一个进程，操作系统会为进程分配一部分内存，应用的所有状态都会保存在这块内存中，应用也许还会创建多个线程来辅助工作，这些线程可以共享这部分内存中的数据。如果应用关闭，进程会被终结，操作系统会释放相关内存。")])]),a._v(" "),e("li",[e("p",[a._v("一个进程还可以要求操作系统生成另一个进程来执行不同的任务，系统会为新的进程分配独立的内存，两个进程之间可以使用 IPC （Inter Process Communication）进行通信。很多应用都会采用这样的设计，如果一个工作进程反应迟钝，重启这个进程不会影响应用其它进程的工作。")])])]),a._v(" "),e("p",[a._v("浏览器可以是单进程多线程，也可以是多进程多线程的应用")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://s1.ax1x.com/2022/04/20/LsEDAS.png",alt:"浏览器架构模型"}})]),a._v(" "),e("p",[a._v("不同的浏览器存在区别，因此没有一个标准，本文以 chrome 浏览器为例：\nchrome 采用多进程架构，顶层存在一个 browser process 来协调浏览器其他的进程")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://s1.ax1x.com/2022/04/21/LyyVHA.png",alt:"chrome的进程"}})]),a._v(" "),e("p",[a._v("具体流程：")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("浏览器进程，主要负责界面显示、用户交互、子进程管理，同时提供存储等功能。")])]),a._v(" "),e("li",[e("p",[a._v("渲染进程，核心任务是将 HTML、CSS 和 JavaScript 转换为用户可以与之交互的网页，排版引擎 Blink 和 JavaScript 引擎 V8 都是运行在该进程中，默认情况下，Chrome 会为每个 Tab 标签创建一个渲染进程。出于安全考虑，渲染进程都是运行在沙箱模式下。")])])]),a._v(" "),e("p",[a._v("渲染进程对文档进行页面解析和子资源加载，HTML 通过 HTM 解析器转成 DOM Tree（二叉树类似结构的东西），CSS 按照 CSS 规则和 CSS 解释器转成 CSSOM TREE，两个 tree 结合，形成 render tree（不包含 HTML 的具体元素和元素要画的具体位置），通过 Layout 可以计算出每个元素具体的宽高颜色位置，结合起来，开始绘制，最后显示在屏幕中新页面显示出来")]),a._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[e("p",[a._v("GPU 进程，其实，Chrome 刚开始发布的时候是没有 GPU 进程的。而 GPU 的使用初衷是为了实现 3D CSS 的效果，只是随后网页、Chrome 的 UI 界面都选择采用 GPU 来绘制，这使得 GPU 成为浏览器普遍的需求。最后，Chrome 在其多进程架构上也引入了 GPU 进程。")])]),a._v(" "),e("li",[e("p",[a._v("网络进程，主要负责页面的网络资源加载，之前是作为一个模块运行在浏览器进程里面的，直至最近才独立出来，成为一个单独的进程。")])]),a._v(" "),e("li",[e("p",[a._v("插件进程，主要是负责插件的运行，因插件易崩溃，所以需要通过插件进程来隔离，以保证插件进程崩溃不会对浏览器和页面造成影响。")])])]),a._v(" "),e("p",[a._v("链接：https://juejin.cn/post/6846687590540640263")]),a._v(" "),e("p",[a._v("浏览器的任务管理器可以看到多个进程的情况")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://s1.ax1x.com/2022/04/20/LslXz8.png",alt:"浏览器的进程"}})]),a._v(" "),e("p",[a._v("说完浏览器的架构模型之后，结下来看看浏览器的导航过程发生了什么")]),a._v(" "),e("p",[a._v("大多数人都是在地址栏中输入一个想要查询的问题然后跳转到某一个网站\n浏览器 Tab 外的工作主要由 browser process 控制，browser process 又进一步划分使用不同线程进行处理：")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://s1.ax1x.com/2022/04/20/LstiFJ.png",alt:"浏览器进程中的不同线程"}})]),a._v(" "),e("p",[a._v("ui thread，storage thread 存储线程，network thread 网络线程等。")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("ui thread 线程主要处理的是用户输入是 url 还是 query")])]),a._v(" "),e("li",[e("p",[a._v("network thread 线程主要是处理网络请求")])]),a._v(" "),e("li",[e("p",[a._v("network thread 获取到数据之后通知 ui thread 数据已经准备好了，然后 ui thread 会通知 render process 进程渲染页面")])])]),a._v(" "),e("h2",{attrs:{id:"等待-tcp-队列"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#等待-tcp-队列"}},[a._v("#")]),a._v(" 等待 TCP 队列")]),a._v(" "),e("p",[a._v("Chrome 有个机制，同一个域名同时最多只能建立 6 个 TCP 连接，如果在同一个域名下同时有 10 个请求发生，那么其中 4 个请求会进入排队等待状态，直至进行中的请求完成。")]),a._v(" "),e("h3",{attrs:{id:"断开连接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#断开连接"}},[a._v("#")]),a._v(" 断开连接")]),a._v(" "),e("p",[a._v("一般情况下，服务器发送完数据后，就要关闭 TCP 连接。不过有一种情况比较特殊，我们来看看")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("Connection:Keep-Alive\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("如果浏览器或者在服务器中加入其头信息如上面的字段的话，TCP 连接会仍然保持，这样子浏览器就可以通过同一个 TCP 连接发送请求，保存 TCP 连接可以省下去下次请求需要建立连接的时间，提升资源加载速度。")]),a._v(" "),e("p",[a._v("一些代表性的 HTTP 状态码： https://juejin.cn/post/6844903519447678990")]),a._v(" "),e("h2",{attrs:{id:"浏览器缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器缓存"}},[a._v("#")]),a._v(" 浏览器缓存")]),a._v(" "),e("p",[a._v("页面缓存有 header 决定，常见针对缓存的字段")]),a._v(" "),e("ol",[e("li",[a._v("cache-control")]),a._v(" "),e("li",[a._v("expries")]),a._v(" "),e("li",[a._v("if-modified")]),a._v(" "),e("li",[a._v("etag")]),a._v(" "),e("li",[a._v("if-none-match")])]),a._v(" "),e("h3",{attrs:{id:"强缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#强缓存"}},[a._v("#")]),a._v(" 强缓存")]),a._v(" "),e("ul",[e("li",[a._v("强缓存相关的字段 HTTP/1.1 cache-control 和 HTTP1.0 expries 有关")]),a._v(" "),e("li",[a._v("强缓存分为两种情况：一种是发送 HTTP 请求，一种是不需要发送。")])]),a._v(" "),e("h4",{attrs:{id:"cache-control-字段的-value"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cache-control-字段的-value"}},[a._v("#")]),a._v(" cache-control 字段的 value:")]),a._v(" "),e("p",[a._v("max-age 设置最大的缓存有效时间，可以在 response header 中发现 cache-control: max-age=2592000 这个字段缓存有效期是 30 天，也就是说浏览器在 max-age 内不会再向服务器发送请求了")]),a._v(" "),e("p",[a._v("s-maxage（单位为 s）同 max-age，只用于共享缓存（比如 CDN 缓存）")]),a._v(" "),e("p",[a._v("public 指定响应会被缓存，并且在多用户间共享，默认是 public")]),a._v(" "),e("p",[a._v("private 响应只作为私有的缓存，不能在用户共享")]),a._v(" "),e("p",[a._v("no-cache 指定不缓存响应，表明资源不进行缓存")]),a._v(" "),e("p",[a._v("no-store 绝对禁止缓存")]),a._v(" "),e("h4",{attrs:{id:"expries"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#expries"}},[a._v("#")]),a._v(" expries")]),a._v(" "),e("p",[a._v("缓存过期时间，用来指定资源到期的时间，是服务器端的具体的时间点。也就是说，Expires=max-age + 请求时间, cache-control 的优先级更高。 Expires 是 Web 服务器响应消息头字段，在响应 http 请求时告诉浏览器在过期时间前浏览器可以直接从浏览器缓存取数据，而无需再次请求。这个方式有一个问题：「服务器的时间和浏览器的时间可能并不一致」，所以 HTTP1.1 提出新的字段代替它。")]),a._v(" "),e("blockquote",[e("p",[a._v("强缓存失效之后会降级校验协商缓存")])]),a._v(" "),e("p",[a._v("浏览器在请求头中携带响应的缓存 Tag 来向服务器发送请求，服务器根据对应的 tag，来决定是否使用缓存。\n缓存分为两种，Last-Modified 和 ETag，两者各有优势。")]),a._v(" "),e("h4",{attrs:{id:"last-modified"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#last-modified"}},[a._v("#")]),a._v(" last-modified")]),a._v(" "),e("p",[a._v("服务器文件的最后修改时间，需要配合 cache-control 一起使用，当再次向浏览器发送请求时，请求头里会有一个字段 if-modified-since 报文，询问 last-modified 时间点之后资源是否被修改过，没有修改返回状态码 304，使用缓存，修改过则再次向浏览器发送请求，返回码和首次请求相同为 200，资源为服务器最新资源")]),a._v(" "),e("h4",{attrs:{id:"etag"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#etag"}},[a._v("#")]),a._v(" ETag")]),a._v(" "),e("p",[a._v("根据实体内容产生一段 hash, 标识资源的状态，有服务端产生，浏览器会将这个字段回传给服务器，判断资源是否被修改过")]),a._v(" "),e("h3",{attrs:{id:"浏览器的缓存流程图："}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的缓存流程图："}},[a._v("#")]),a._v(" 浏览器的缓存流程图：")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://s1.ax1x.com/2022/04/21/L6aKk8.png",alt:"浏览器缓存的流程图"}})]),a._v(" "),e("p",[a._v("为啥有了 last-modified 为啥还需要 ETag")]),a._v(" "),e("p",[a._v("HTTP1.1 中 Etag 的出现主要是为了解决几个 Last-Modified 比较难解决的问题：")]),a._v(" "),e("ol",[e("li",[e("p",[a._v("Last-Modified 标注的最后修改只能精确到秒级，如果某些文件在 1 秒钟以内，被修改多次的话，它将不能准确标注文件的修改时间")])]),a._v(" "),e("li",[e("p",[a._v("如果某些文件会被定期生成，当有时内容并没有任何变化，但 Last-Modified 却改变了，导致文件没法使用缓存")])]),a._v(" "),e("li",[e("p",[a._v("有可能存在服务器没有准确获取文件修改时间，或者与代理服务器时间不一致等情形")])]),a._v(" "),e("li",[e("p",[a._v("Etag 是根据资源内容在服务器端的唯一标识符，能够更加准确的控制缓存")])])]),a._v(" "),e("p",[a._v("Last-Modified 与 ETag 是可以一起使用的，服务器会优先验证 ETag，一致的情况下，才会继续比对 Last-Modified，最后才决定是否返回 304。")]),a._v(" "),e("h5",{attrs:{id:"etag-if-none-match"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#etag-if-none-match"}},[a._v("#")]),a._v(" ETag/if-none-match:")]),a._v(" "),e("p",[a._v("Etag/If-None-Match 配合 Cache-Control 使用。")]),a._v(" "),e("p",[a._v("Etag：web 服务器响应请求时，告诉浏览器当前资源在服务器的唯一标识（生成规则由服务器觉得）。Apache 中，ETag 的值，默认是对文件的索引节（INode），大小（Size）和最后修改时间（MTime）进行 Hash 后得到的。")]),a._v(" "),e("p",[a._v("If-None-Match：当资源过期时（使用 Cache-Control 标识的 max-age），发现资源具有 Etage 声明，则再次向 web 服务器请求时带上头：\nIf-None-Match：Etag 的值")]),a._v(" "),e("h5",{attrs:{id:"last-modified-if-modified-since"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#last-modified-if-modified-since"}},[a._v("#")]),a._v(" Last-Modified/If-Modified-Since")]),a._v(" "),e("p",[a._v("Last-Modified/If-Modified-Since 要配合 Cache-Control 使用。")]),a._v(" "),e("p",[a._v("Last-Modified：标示这个响应资源的最后修改时间。web 服务器在响应请求时，告诉浏览器资源的最后修改时间。")]),a._v(" "),e("p",[a._v("If-Modified-Since：当资源过期时（使用 Cache-Control 标识的 max-age），发现资源具有 Last-Modified 声明，则再次向 web 服务器请求时带上头:\nIf-Modified-Since:Last-Modified 的值")]),a._v(" "),e("h1",{attrs:{id:"浏览器面试知识查漏补缺"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器面试知识查漏补缺"}},[a._v("#")]),a._v(" 浏览器面试知识查漏补缺")]),a._v(" "),e("h3",{attrs:{id:"_1-css-加载会造成堵塞吗？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-css-加载会造成堵塞吗？"}},[a._v("#")]),a._v(" 1. css 加载会造成堵塞吗？")]),a._v(" "),e("p",[a._v("先说结论：")]),a._v(" "),e("ol",[e("li",[a._v("css 加载不会影响 DOM 解析，但是会阻塞 DOM 渲染")]),a._v(" "),e("li",[a._v("css 会阻塞 js 执行，并不会阻塞 js 文件下载")])]),a._v(" "),e("p",[a._v("CSSOM 的作用：")]),a._v(" "),e("ol",[e("li",[a._v("提供 js 操作样式表的能力")]),a._v(" "),e("li",[a._v("第二个是为布局树的合成提供基础的样式信息")]),a._v(" "),e("li",[a._v("这个 CSSOM 体现在 DOM 中就是 document.styleSheets")])]),a._v(" "),e("p",[a._v("DOM 和 CSSOM 通常是并行构建的，所以「CSS 加载不会阻塞 DOM 的解析」")]),a._v(" "),e("h3",{attrs:{id:"_2-js-会阻塞页面加载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-js-会阻塞页面加载"}},[a._v("#")]),a._v(" 2. js 会阻塞页面加载")]),a._v(" "),e("p",[a._v("js 会阻塞 DOM 的解析也就是会阻塞 DOM 的解析")]),a._v(" "),e("h3",{attrs:{id:"_3-defer-和-async-的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-defer-和-async-的区别"}},[a._v("#")]),a._v(" 3. defer 和 async 的区别")]),a._v(" "),e("p",[a._v("两者都是异步加载 js, 不会阻塞 DOM 解析")]),a._v(" "),e("p",[a._v("async 是在外部 JS 加载完成后，浏览器空闲时，Load 事件触发前执行，标记为 async 的脚本并不保证按照指定他们的先后顺序执行，该属性对于内联脚本无作用 (即没有「src」属性的脚本）， async 在 load 之前")]),a._v(" "),e("p",[a._v("defer 是在 JS 加载完成后，整个文档解析完成后，触发 DOMContentLoaded 事件前执行，如果缺少 src 属性（即内嵌脚本），该属性不应被使用，因为这种情况下它不起作用， defer 在 DOMContentLoaded 之前")]),a._v(" "),e("h3",{attrs:{id:"_4-domcontentloaded-和-load-的区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-domcontentloaded-和-load-的区别"}},[a._v("#")]),a._v(" 4. DOMContentLoaded 和 load 的区别")]),a._v(" "),e("p",[a._v("DOMContentLoaded 事件触发时：仅当 DOM 解析完成后，不包括样式表，图片等资源。")]),a._v(" "),e("p",[a._v("onload 事件触发时,页面上所有的 DOM,样式表,脚本,图片等资源已经加载完毕。")]),a._v(" "),e("p",[a._v("也就是说顺序是： DOMContentLoad -> onload")]),a._v(" "),e("h3",{attrs:{id:"_5-对-xss-cross-site-sript-跨站脚本攻击"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-对-xss-cross-site-sript-跨站脚本攻击"}},[a._v("#")]),a._v(" 5. 对 XSS (cross site sript)跨站脚本攻击")]),a._v(" "),e("p",[a._v("XSS 是指黑客往 HTML 文件中或者 DOM 中注入恶意脚本，从而在用户浏览页面时利用注入的恶意脚本对用户实施攻击的一种手段")]),a._v(" "),e("p",[a._v("XSS 攻击的一般危害：")]),a._v(" "),e("ol",[e("li",[a._v("窃取 Cookie")]),a._v(" "),e("li",[a._v("监听用户行为，比如输入账号密码后之间发给黑客服务器")]),a._v(" "),e("li",[a._v("在网页中生成浮窗广告")]),a._v(" "),e("li",[a._v("修改 DOM 伪造登入表单")])]),a._v(" "),e("p",[a._v("阻止 XSS 攻击的策略：")]),a._v(" "),e("p",[a._v("以上讲述的 XSS 攻击原理，都有一个共同点：让恶意脚本直接在浏览器执行")]),a._v(" "),e("ol",[e("li",[a._v("对输入脚本进行过滤或转码")]),a._v(" "),e("li",[a._v("利用 cookie 的 HttpOnly 属性")]),a._v(" "),e("li",[a._v("安全策略的实现基于一个称作 Content-Security-Policy 的 HTTP 首部\nCSP，即浏览器中的内容安全策略，它的核心思想大概就是服务器决定浏览器加载哪些资源，具体来说有几个功能 👇")])]),a._v(" "),e("p",[a._v("限制加载其他域下的资源文件，这样即使黑客插入了一个 JavaScript 文件，这个 JavaScript 文件也是无法被加载的；禁止向第三方域提交数据，这样用户数据也不会外泄；提供上报机制，能帮助我们及时发现 XSS 攻击。禁止执行内联脚本和未授权的脚本；")]),a._v(" "),e("h3",{attrs:{id:"_6-对-csrf-跨站点请求伪造"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-对-csrf-跨站点请求伪造"}},[a._v("#")]),a._v(" 6. 对 CSRF 跨站点请求伪造")]),a._v(" "),e("p",[a._v("csrf (cross site request forgery)又称为“跨站请求伪造”，是指黑客引诱用户打开黑客的网站，在黑客的网站中，利用用户的登录状态发起的跨站请求。简单来讲，「CSRF 攻击就是黑客利用了用户的登录状态，并通过第三方的站点来做一些坏事。」")]),a._v(" "),e("p",[a._v("攻击者一般会自动让你发起：")]),a._v(" "),e("ol",[e("li",[a._v("自动发起 Get 请求")]),a._v(" "),e("li",[a._v("自动发起 POST 请求")]),a._v(" "),e("li",[a._v("引诱用户点击链接")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(' <img src="http://bank.example/withdraw?amount=10000&for=hacker" >\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("在受害者访问含有这个 img 的页面后，浏览器会自动向http://bank.example/withdraw?account=xiaoming&amount=10000&for=hacker发出一次HTTP请求。")]),a._v(" "),e("p",[a._v("CSRF 攻击原理，跟 XSS 对比的话，CSRF 攻击并不需要将恶意代码注入 HTML 中，而是跳转新的页面，利用「服务器的验证漏洞」和「用户之前的登录状态」来模拟用户进行操作")])])}),[],!1,null,null,null);t.default=v.exports}}]);